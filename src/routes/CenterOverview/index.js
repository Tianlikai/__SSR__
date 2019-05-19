import { createRoute } from '../../util/core';

import Container from '../../layouts/Container';
import Introduction from './Introduction';
import Leader from './Leader';
import Expert from './Expert';
import NotFound from '../ErrorPage/404';

import subNavConfig from '../../config/subNavConfig';

const config = subNavConfig.CenterOverview;

const routesConfig = () => ({
  path: '/centerOverview',
  subNav: config,
  component: Container,
  PERMISSIONS: true,
  childRoutes: [Introduction(), Leader(), Expert(), NotFound()],
});

export default () => createRoute(routesConfig);
