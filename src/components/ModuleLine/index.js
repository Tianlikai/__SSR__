import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ModuleLine = (props) => {
  const { className, title, children } = props;
  const classes = className ? `contentTitle ${className}` : 'contentTitle';
  return (
    <div className={classes}>
      {title}
      {children}
    </div>
  );
};

ModuleLine.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default ModuleLine;
