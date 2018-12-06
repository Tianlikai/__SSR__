import Loadable from 'react-loadable';

import { createRoute } from '../../../util/core';

const Spinner = () => null;
const routesConfig = data => ({
  path: '/socialService/school/article/:id',
  PERMISSIONS: true,
  breadcrumb: [data.navConfig[4], data.subNav[2]],
  component: Loadable({
    loader: () => import('../../Article'),
    loading: Spinner,
  }),
});

export default data => createRoute(routesConfig, data);
