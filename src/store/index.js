import AppStateClass from './app.state';
import HomeStoreClass from './Home';
import DetailStoreClass from './Detail';
import ArticleStoreClass from './Article';

export const AppState = AppStateClass;
export const HomeStore = HomeStoreClass;
export const DetailStore = DetailStoreClass;
export const ArticleStore = ArticleStoreClass;

export default {
  AppState,
  HomeStore,
  DetailStore,
  ArticleStore,
};

export const createStoreMap = () => ({
  appState: new AppState(),
  homeStore: new HomeStore(),
  detailStore: new DetailStore(),
  dynamicReport: new ArticleStore(1),
  dynamicCooperation: new ArticleStore(2),
  scientificResearchReport: new ArticleStore(3),
  scientificResearchActivity: new ArticleStore(4),
  scientificResearchMeeting: new ArticleStore(5),
  socialServiceTraining: new ArticleStore(6),
  socialServicePrincipalReport: new ArticleStore(7),
  socialServiceSchool: new ArticleStore(8),
  socialServicePractice: new ArticleStore(9),
});
