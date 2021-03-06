import React from 'react';
import PropTypes from 'prop-types';

const CommonLayoutContainer = (props) => {
  const { children } = props;
  return <div className="common-layout-container">{children}</div>;
};

CommonLayoutContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default CommonLayoutContainer;
