import Loadable from 'react-loadable';

import { createRoute } from '../../../util/core';

const Spinner = () => null;
const routesConfig = data => ({
  path: '/centerDynamic/cooperation/article/:id',
  PERMISSIONS: true,
  breadcrumb: [data.navConfig[2], data.subNav[1]],
  component: Loadable({
    loader: () => import('../../Article'),
    loading: Spinner,
  }),
});

export default data => createRoute(routesConfig, data);
