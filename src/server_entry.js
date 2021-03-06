import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider, useStaticRendering } from 'mobx-react';

import App from './routes/App';
import { createStoreMap } from './store';

// 让mobx，在服务端渲染时不会重复数据变换
useStaticRendering(true);

export default (stores, routerContext, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
);

export { createStoreMap };
