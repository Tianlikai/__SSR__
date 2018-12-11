import React from 'react';
import PropTypes from 'prop-types';

import footerData from '../../config/footerData';

import './style.scss';

/* eslint-disable react/jsx-no-target-blank */
const Item = (props) => {
  const {
    className, img, alt, title, info,
  } = props;
  return (
    <div className="footer-top-item">
      <div className="img-container">
        {img && <img className={className} src={img} alt={alt} />}
      </div>
      <div className="subTitle">{title}</div>
      <ul>
        {img
          ? info.map(item => <li key={item.key}>{item.text}</li>)
          : info.map(item => (
            <li key={item.href}>
              <a target="_blank" href={item.href || '#'}>
                {item.text}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.array,
};

const BasicFooter = () => (
  <div className="layout-footer">
    <div className="footer-top">
      {footerData.map(footer => (
        <Item key={footer.key} {...footer} />
      ))}
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom-text">
        <div>Copyright © 2015-2018 北京爱论答科技有限公司</div>
      </div>
    </div>
  </div>
);

export default BasicFooter;
