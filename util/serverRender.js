const ejs = require('ejs');
const Helmet = require('react-helmet').default;
const serialize = require('serialize-javascript');
const ReactDomServer = require('react-dom/server');
const bootstrapper = require('react-async-bootstrapper');

const getStoreState = (stores) => {
  const keys = Object.keys(stores);
  return keys.reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson(); // eslint-disable-line
    return result;
  }, {});
};

const serverRender = (bundle, template, req, res) => new Promise((resolve, reject) => {
  const { createStoreMap } = bundle;
  const serverBundle = bundle.default;

  const routerContext = {};
  const store = createStoreMap();
  const apps = serverBundle(store, routerContext, req.url);

  if (routerContext.url) {
    res.status(302).setHeader('Location', routerContext.url);
    res.end();
    return;
  }

  bootstrapper(apps)
    .then(() => {
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
      resolve();
    })
    .catch(reject);
});

module.exports = serverRender;
