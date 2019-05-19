import React from 'react';
import PropTypes from 'prop-types';

const CommonLayoutSide = (props) => {
  const { children } = props;
  return <div className="common-layout-side">{children}</div>;
};

CommonLayoutSide.propTypes = {
  children: PropTypes.element,
};

export default CommonLayoutSide;
