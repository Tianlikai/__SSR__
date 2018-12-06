import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

const CommonLayoutContent = (props) => {
  const { className, children } = props;
  const cn = classnames('common-layout-content', {
    [className]: className,
  });
  return <div className={cn}>{children}</div>;
};

CommonLayoutContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default CommonLayoutContent;
