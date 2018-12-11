import { createRoute } from '../../../util/core';

import NotFound from './component';

const routesConfig = () => ({
  key: 'notFound',
  component: NotFound,
  PERMISSIONS: true,
});

export default () => createRoute(routesConfig);
