const path = require("path");
const axios = require("axios");
const MFS = require("memory-fs");
const webpack = require("webpack");
const proxy = require("http-proxy-middleware");
const ReactDomServer = require("react-dom/server");
const serverConfig = require("../build/webpack.config.server");

/**
 * 开发环境启动webpack-dev-server时，template不不写在内存中
 * 需要动态获取实时获取template
 * 所以向webpack-dev-server 发送请求获取 template.html
 */
const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://0.0.0.0:8888/public/index.html")
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};

/**
 * 获取最新打包后的 bundle.js 文件
 */
const Module = module.constructor;
const mfs = new MFS();
let serverBundle;

const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;

serverCompiler.watch({}, (err, state) => {
  if (err) throw err;

  state.errors && state.errors.forEach(err => console.error(err));
  state.warnings && state.warnings.forEach(warn => console.warn(warn));

  const bundlePath = path.join(
    serverConfig.output.path, // 路径
    serverConfig.output.filename // 文件名
  );

  const bundle = mfs.readFileSync(bundlePath, "utf-8");
  const m = new Module();
  m._compile(bundle, "server_entry.js");
  serverBundle = m.exports.default;
});

module.exports = function(app) {
  // 访问的是public路径时，文件在内存中
  // 代理到webpack-dev-server服务器
  app.use(
    "/public",
    proxy({
      target: "http://0.0.0.0:8888",
      changeOrigin: true
    })
  );

  app.get("*", function(req, res) {
    getTemplate().then(template => {
      const content = ReactDomServer.renderToString(serverBundle);
      res.send(template.replace("<!-- app -->", content));
    });
  });
};
