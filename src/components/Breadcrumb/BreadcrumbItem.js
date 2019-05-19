import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadcrumbItem = (props) => {
  const {
    prefixCls, separator, label, to,
  } = props;
  if (to) {
    return (
      <span className="breadItem-item">
        <Link to={to}>
          <span className={`${prefixCls}-label`}>{label}</span>
        </Link>
        <span className={`${prefixCls}-separator`}>{separator}</span>
      </span>
    );
  }
  return (
    <span className="breadItem-item">
      <span className={`${prefixCls}-label`}>{label}</span>
      <span className={`${prefixCls}-separator`}>{separator}</span>
    </span>
  );
};

BreadcrumbItem.defaultProps = {
  prefixCls: 'breadItem',
  separator: '/',
  label: 'string',
};

BreadcrumbItem.propTypes = {
  prefixCls: PropTypes.string,
  separator: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  label: PropTypes.string,
  to: PropTypes.string,
};

export default BreadcrumbItem;
