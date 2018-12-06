import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import { BrowserRouter } from 'react-router-dom';

import Entry from './routes';

import AppState from './store/app.state';
import HomeStore from './store/Home';
import DetailStore from './store/Detail';
import ArticleStore from './store/Article';

const initialState = window.__INITIAL__STATE__ || {}; // eslint-disable-line

const appState = new AppState(initialState.appState);
const homeStore = new HomeStore(initialState.homeStore);
const detailStore = new DetailStore(initialState.detailStore);
const dynamicReport = new ArticleStore(1);
const dynamicCooperation = new ArticleStore(2);
const scientificResearchReport = new ArticleStore(3);
const scientificResearchActivity = new ArticleStore(4);
const scientificResearchMeeting = new ArticleStore(5);
const socialServiceTraining = new ArticleStore(6);
const socialServicePrincipalReport = new ArticleStore(7);
const socialServiceSchool = new ArticleStore(8);
const socialServicePractice = new ArticleStore(9);

const store = {
  appState,
  homeStore,
  detailStore,
  dynamicReport,
  dynamicCooperation,
  scientificResearchReport,
  scientificResearchActivity,
  scientificResearchMeeting,
  socialServiceTraining,
  socialServicePrincipalReport,
  socialServiceSchool,
  socialServicePractice,
};

function getInitStyle() {
  const {
    document: {
      documentElement: { clientWidth },
    },
  } = window;
  let width;
  if (clientWidth <= 375) {
    width = 375;
  } else if (clientWidth <= 768) {
    width = 384 * (clientWidth / 768) * 2;
  } else if (clientWidth <= 1920) {
    width = 375 * (clientWidth / 1920);
  } else {
    width = 375;
  }
  document.documentElement.style.fontSize = `${width / 3.75}px`;
}

getInitStyle();

window.addEventListener('resize', getInitStyle);

const root = document.getElementById('root');
const render = Component => ReactDOM.hydrate(
  <AppContainer>
    <Provider {...store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  root,
);

render(Entry);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextApp = require('./routes').default; // eslint-disable-line
    render(nextApp);
  });
}
