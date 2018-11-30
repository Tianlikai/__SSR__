import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import { BrowserRouter as Router } from 'react-router-dom';

import App from './routes/App';

const root = document.getElementById('root');
const render = Component => ReactDOM.hydrate(
  <AppContainer>
    <Router>
      <Component />
    </Router>
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
