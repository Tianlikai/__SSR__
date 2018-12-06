import React from 'react';
import PropTypes from 'prop-types';

const CommonLayoutContainer = (props) => {
  const { children } = props;
  return <div className="common-layout-container">{children}</div>;
};

CommonLayoutContainer.propTypes = {
  children: PropTypes.element,
};

export default CommonLayoutContainer;
