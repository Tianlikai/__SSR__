import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

const CommonLayoutHeader = (props) => {
  const { className, children } = props;
  const cn = classnames('common-layout-header', {
    [className]: className,
  });
  return <div className={cn}>{children}</div>;
};

CommonLayoutHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default CommonLayoutHeader;
