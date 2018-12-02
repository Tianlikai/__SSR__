import React from 'react';
// import { Provider, useStaticRendering } from 'mobx-react';
// import { StaticRouter } from 'react-router-dom';

import App from './routes/App';

// import appState from './store/app.state';

// 让mobx，在服务端渲染时不会重复数据变换
// useStaticRendering(true);

// const store = {
//   appState,
// };

export default (
  // <Provider {...store}>
  //   <StaticRouter>
  <App />
  //   </StaticRouter>
  // </Provider>
);
