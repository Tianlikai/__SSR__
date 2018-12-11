import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './MenuItem.scss';

export default class MenuItem extends React.Component {
  static propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    outLink: PropTypes.string,
    subMenus: PropTypes.array,
    callback: PropTypes.func,
  };

  state = {
    showSubMenu: false,
  };

  handleCallBack = () => {
    const { callback } = this.props;
    if (callback) callback();
  };

  toggleSubMenu = () => {
    const { showSubMenu } = this.state;
    this.setState({ showSubMenu: !showSubMenu });
  };

  render() {
    const { showSubMenu } = this.state;
    const {
      subMenus, outLink, link, title, name, to,
    } = this.props;

    const classArrow = classnames('arrow', {
      'arrow-downup': showSubMenu,
      'arrow-updown': !showSubMenu,
    });
    return (
      <div className="menu-item" onClick={subMenus && this.toggleSubMenu}>
        {outLink && (
          <a href={link || to} className="title">
            {title || name}
          </a>
        )}

        {!subMenus && !outLink && (
          <Link className="title" to={link || to} onClick={this.handleCallBack}>
            {title || name}
          </Link>
        )}

        {subMenus && !outLink && <div className="title">{title || name}</div>}
        {subMenus && (
          <span className={classArrow}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-official-arrow" />
            </svg>
          </span>
        )}

        {showSubMenu
          && !outLink
          && subMenus
          && subMenus.map(subMenu => (
            <Link
              onClick={this.handleCallBack}
              className="sub-menu"
              key={subMenu.title || subMenu.name}
              to={subMenu.link || subMenu.to}
            >
              {subMenu.title || subMenu.name}
            </Link>
          ))}
      </div>
    );
  }
}
