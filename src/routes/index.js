import Home from './Home';
import CenterOverview from './CenterOverview';
import CenterDynamic from './CenterDynamic';
import ScientificResearch from './ScientificResearch';
import SocialService from './SocialService';
import NotFound from './ErrorPage/404';

import BasicLayout from '../layouts/BasicLayout';
import { createRoutes } from '../util/core';

const routesConfig = () => [
  {
    path: '/',
    exact: false,
    PERMISSIONS: true,
    component: BasicLayout,
    indexRoute: '/home',
    childRoutes: [
      Home(),
      CenterOverview(),
      CenterDynamic(),
      ScientificResearch(),
      SocialService(),
      NotFound(),
    ],
  },
];

export default () => createRoutes(routesConfig);
