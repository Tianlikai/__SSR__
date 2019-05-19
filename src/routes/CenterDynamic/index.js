import { createRoute } from '../../util/core';

import Container from '../../layouts/Container';
import Report from './Report';
import Cooperation from './Cooperation';
import ReportArticle from './ReportArticle';
import CooperationArticle from './CooperationArticle';
import NotFound from '../ErrorPage/404';

import navConfig from '../../config/navConfig';
import subNavConfig from '../../config/subNavConfig';

const data = {
  navConfig,
  subNav: subNavConfig.CenterDynamic,
};

const config = subNavConfig.CenterDynamic;

const routesConfig = () => ({
  key: 'centerDynamic',
  path: '/centerDynamic',
  component: Container,
  subNav: config,
  PERMISSIONS: true,
  childRoutes: [Report(), Cooperation(), ReportArticle(data), CooperationArticle(data), NotFound()],
});

export default () => createRoute(routesConfig);
