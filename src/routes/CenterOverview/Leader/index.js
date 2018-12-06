import Loadable from 'react-loadable';

import { createRoute } from '../../../util/core';

const Spinner = () => null;

const routesConfig = () => ({
  path: '/centerOverview/leader',
  PERMISSIONS: true,
  component: Loadable({
    loader: () => import('./component'),
    loading: Spinner,
  }),
});

export default () => createRoute(routesConfig);
