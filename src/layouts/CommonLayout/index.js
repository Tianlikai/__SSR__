import React from 'react';
import PropTypes from 'prop-types';

import CommonLayoutSide from './CommonLayoutSide';
import CommonLayoutContainer from './CommonLayoutContainer';
import CommonLayoutHeader from './CommonLayoutHeader';
import CommonLayoutContent from './CommonLayoutContent';

import './style.scss';

const CommonLayout = (props) => {
  const { children } = props;
  return <div className="common-layout">{children}</div>;
};

CommonLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

CommonLayout.CommonLayoutSide = CommonLayoutSide;
CommonLayout.CommonLayoutContainer = CommonLayoutContainer;
CommonLayout.CommonLayoutHeader = CommonLayoutHeader;
CommonLayout.CommonLayoutContent = CommonLayoutContent;

export default CommonLayout;
