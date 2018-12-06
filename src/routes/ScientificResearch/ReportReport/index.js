import Loadable from 'react-loadable';

import { createRoute } from '../../../util/core';

const Spinner = () => null;
const routesConfig = data => ({
  path: '/scientificResearch/report/article/:id',
  PERMISSIONS: true,
  breadcrumb: [data.navConfig[3], data.subNav[1]],
  component: Loadable({
    loader: () => import('../../Article'),
    loading: Spinner,
  }),
});

export default data => createRoute(routesConfig, data);
