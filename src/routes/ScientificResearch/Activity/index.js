import Loadable from 'react-loadable';

import { createRoute } from '../../../util/core';

const Spinner = () => null;
const routesConfig = () => ({
  path: '/scientificResearch/activity/:page',
  PERMISSIONS: true,
  exact: true,
  component: Loadable({
    loader: () => import('./component'),
    loading: Spinner,
  }),
});

export default () => createRoute(routesConfig);
