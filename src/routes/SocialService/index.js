import { createRoute } from '../../util/core';

import Container from '../../layouts/Container';
import Training from './Training';
import Principal from './Principal';
import School from './School';
import Practice from './Practice';
import TrainingReport from './TrainingReport';
import PrincipalReport from './PrincipalReport';
import SchoolReport from './SchoolReport';
import PracticeReport from './PracticeReport';
import NotFound from '../ErrorPage/404';

import navConfig from '../../config/navConfig';
import subNavConfig from '../../config/subNavConfig';

const data = {
  navConfig,
  subNav: subNavConfig.SocialService,
};
const config = subNavConfig.SocialService;

const routesConfig = () => ({
  path: '/socialService',
  component: Container,
  subNav: config,
  PERMISSIONS: true,
  childRoutes: [
    Training(),
    Principal(),
    School(),
    Practice(),
    TrainingReport(data),
    PrincipalReport(data),
    SchoolReport(data),
    PracticeReport(data),
    NotFound(),
  ],
});

export default () => createRoute(routesConfig);
