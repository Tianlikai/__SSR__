import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import Hello from './components/Hello';

const root = document.getElementById('root');
const render = Component => ReactDOM.hydrate(
  <AppContainer>
    <Component />
  </AppContainer>,
  root,
);

render(Hello);

if (module.hot) {
  module.hot.accept('./components/Hello', () => {
    const nextApp = require('./components/Hello').default; // eslint-disable-line
    render(nextApp);
  });
}
