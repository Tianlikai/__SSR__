import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import { BrowserRouter } from 'react-router-dom';

import App from './routes/App';

// import appState from './store/app.state';

// const store = {
//   appState,
// };

const root = document.getElementById('root');
const render = Component => ReactDOM.hydrate(
  <AppContainer>
    {/* <Provider {...store}> */}
    <BrowserRouter>
      <Component />
    </BrowserRouter>
    {/* </Provider> */}
  </AppContainer>,
  root,
);

render(App);

if (module.hot) {
  module.hot.accept('./routes/App', () => {
    const nextApp = require('./routes/App').default; // eslint-disable-line
    render(nextApp);
  });
}
