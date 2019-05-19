import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

const CommonHeader = (props) => {
  const { title, className } = props;
  const cn = classnames('commonHeader-overView', {
    [className]: className,
  });
  return <div className={cn}>{title}</div>;
};

CommonHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default CommonHeader;
