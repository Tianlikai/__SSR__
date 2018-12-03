const vm = require('vm');
const ejs = require('ejs');
const path = require('path');
const axios = require('axios');
const MFS = require('memory-fs'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const NativeModule = require('module');
const Helmet = require('react-helmet').default;
const proxy = require('http-proxy-middleware'); // eslint-disable-line
const serialize = require('serialize-javascript');
const ReactDomServer = require('react-dom/server');
const bootstrapper = require('react-async-bootstrapper');
const serverConfig = require('../build/webpack.config.server');
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
let createStoreMap;

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
  serverBundle = m.exports.default;
  createStoreMap = m.exports.createStoreMap; // eslint-disable-line
});

const getStoreState = (stores) => {
  const keys = Object.keys(stores);
  return keys.reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson(); // eslint-disable-line
    return result;
  }, {});
};

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

  app.get('*', (req, res) => {
    getTemplate().then((template) => {
      const routerContext = {};
      const store = createStoreMap();
      const apps = serverBundle(store, routerContext, req.url);

      if (routerContext.url) {
        res.status(302).setHeader('Location', routerContext.url);
        res.end();
        return;
      }

      bootstrapper(app).then(() => {
        const content = ReactDomServer.renderToString(apps);

        const state = getStoreState(store);
        const helmet = Helmet.rewind();
        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(state),
          meta: helmet.meta.toString(),
          title: helmet.title.toString(),
          link: helmet.link.toString(),
          style: helmet.link.toString(),
        });
        res.send(html);
      });
    });
  });
};
