import React from 'react';
import assign from 'object-assign';
import { Route, Switch, Redirect } from 'react-router-dom';

// 路由映射表
window.dva_router_pathMap = {};

export const createRoute = (routesConfig, data) => {
  const routesResult = routesConfig(data);
  const {
    component: Comp, path, indexRoute, exact, key, ...otherProps
  } = routesResult;
  if (path && path !== '/') {
    window.dva_router_pathMap[path] = { path, ...otherProps };
  }
  const routeProps = assign(
    {
      key: path || key,
      exact,
      render: props => <Comp routerData={otherProps} {...props} />,
    },
    path && {
      path,
    },
  );
  if (indexRoute) {
    return [
      <Redirect key={`${path}_redirect`} exact from={path} to={indexRoute} />,
      <Route {...routeProps} />,
    ];
  }
  return <Route {...routeProps} />;
};

export const createRoutes = routesConfig => (
  <Switch>{routesConfig().map(config => createRoute(() => config))}</Switch>
);
