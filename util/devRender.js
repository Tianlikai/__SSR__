const vm = require('vm');
const path = require('path');
const axios = require('axios');
const MFS = require('memory-fs'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const NativeModule = require('module');
const proxy = require('http-proxy-middleware'); // eslint-disable-line
const serverConfig = require('../build/webpack.config.server');

const serverRender = require('./serverRender');

/**
 * 开发环境启动webpack-dev-server时，template不不写在内存中
 * 需要动态获取实时获取template
 * 所以向webpack-dev-server 发送请求获取 template.html
 */
const getTemplate = () => new Promise((resolve, reject) => {
  axios
    .get('http://0.0.0.0:8888/public/server.ejs')
    .then((res) => {
      resolve(res.data);
    })
    .catch(reject);
});

/**
 * 获取最新打包后的 bundle.js 文件
 */
const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} };
  const wrapper = NativeModule.wrap(bundle);
  const script = new vm.Script(wrapper, {
    filename,
    displayErrors: true,
  });
  const result = script.runInThisContext();
  result.call(m.exports, m.exports, require, m);
  return m;
};

const mfs = new MFS();
let serverBundle;

const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;

serverCompiler.watch({}, (err, states) => {
  if (err) throw err;

  const stats = states.toJson();
  stats.errors.forEach(error => console.error(error));
  stats.warnings.forEach(warn => console.warn(warn));

  const bundlePath = path.join(
    serverConfig.output.path, // 路径
    serverConfig.output.filename, // 文件名
  );

  const bundle = mfs.readFileSync(bundlePath, 'utf-8');
  const m = getModuleFromString(bundle, 'server_entry.js');
  serverBundle = m.exports;
});

module.exports = function devSsrRender(app) {
  /**
   * 访问的是public路径时，文件在内存中
   * 代理到webpack-dev-server服务器
   */
  app.use(
    '/public',
    proxy({
      target: 'http://0.0.0.0:8888',
      changeOrigin: true,
    }),
  );

  app.get('*', (req, res, next) => {
    if (!serverBundle) {
      return res.send('waiting for compile! refresh later!');
    }

    return getTemplate()
      .then(template => serverRender(serverBundle, template, req, res))
      .catch(next);
  });
};
