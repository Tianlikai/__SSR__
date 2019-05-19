import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles/Content.scss';

const Content = (props) => {
  const { className, children } = props;
  const cn = classnames('content', {
    [className]: className,
  });
  return <div className={cn}>{children}</div>;
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

export default Content;
