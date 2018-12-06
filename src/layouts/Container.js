import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import Content from './Content';
import CommonLayout from './CommonLayout';
import SubNav from './SubNav';

const { CommonLayoutSide } = CommonLayout;

const Container = (props) => {
  const { routerData } = props;
  const { childRoutes, subNav } = routerData;
  return (
    <Content>
      <CommonLayout>
        <CommonLayoutSide>
          <SubNav config={subNav} />
        </CommonLayoutSide>
        <Switch>{childRoutes}</Switch>
      </CommonLayout>
    </Content>
  );
};

Container.propTypes = {
  routerData: PropTypes.object,
};

export default Container;
