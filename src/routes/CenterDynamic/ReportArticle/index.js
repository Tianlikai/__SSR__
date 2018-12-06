import Loadable from 'react-loadable';

import { createRoute } from '../../../util/core';

const Spinner = () => null;
const routesConfig = data => ({
  path: '/centerDynamic/report/article/:id',
  PERMISSIONS: true,
  breadcrumb: [data.navConfig[2], data.subNav[0]],
  component: Loadable({
    loader: () => import('../../Article'),
    loading: Spinner,
  }),
});

export default data => createRoute(routesConfig, data);
