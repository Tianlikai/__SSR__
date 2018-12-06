import React from 'react';

import classnames from 'classnames';
import { Link } from 'react-router-dom';

import MenuItem from '../MenuItem';

import navConfig from '../../../config/navConfig';
import subNavConfig from '../../../config/subNavConfig';

const Logo = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/b1d3d276daa79a49919e3341c05572cd.png';

const ModalHelper = (function helper(bodyCls) {
  // var scrollTop
  return {
    afterOpen() {
      // scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls);
      // document.body.style.top = -scrollTop + 'px'
    },
    beforeClose() {
      document.body.classList.remove(bodyCls);
      // scrollTop lost after set position:fixed, restore it back.
      // document.scrollingElement.scrollTop = scrollTop
    },
  };
}('open-modal'));

export default class HeaderPhone extends React.Component {
  state = {
    visible: false,
  };

  showSideMenu = (e) => {
    e.stopPropagation();
    this.setState(
      {
        visible: true,
      },
      () => ModalHelper.afterOpen(),
    );
  };

  hideSideMenu = (e) => {
    const { stopPropagation } = e || {};
    if (stopPropagation) stopPropagation();
    this.setState(
      {
        visible: false,
      },
      () => ModalHelper.beforeClose(),
    );
  };

  render() {
    const { visible } = this.state;

    const classContent = classnames('side-menu-content', {
      'side-menu-hide': !visible,
      'side-menu-show': visible,
    });

    const classBlur = classnames({
      'side-menu-blur-none': !visible,
      'side-menu-blur': visible,
    });

    // bug：当更改路由导致加载页面为空
    // 改bug临时 hack 解决方案
    const socialService = subNavConfig.SocialService.slice();
    socialService.splice(1, 1);

    return (
      <div className="header-container-phone">
        <div className="sideMenu">
          <svg onClick={this.showSideMenu} className="icon" aria-hidden="true">
            <use xlinkHref="#icon-official-burger" />
          </svg>
        </div>

        <Link className="logo-container" to={navConfig[0].to}>
          <img className="logo-phone" src={Logo} alt="logo" />
        </Link>

        <div className={classBlur} onClick={this.hideSideMenu} />
        <div className={classContent}>
          <div className="side-menu-close" onClick={this.hideSideMenu}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-official-close-o" />
            </svg>
          </div>

          <div className="side-menu-items">
            <MenuItem key="nav-home" title="首页" link="/home" callback={this.hideSideMenu} />
            <MenuItem
              key="nav-overview"
              title="中心概况"
              subMenus={subNavConfig.CenterOverview}
              callback={this.hideSideMenu}
            />
            <MenuItem
              key="nav-act"
              title="中心动态"
              subMenus={subNavConfig.CenterDynamic}
              callback={this.hideSideMenu}
            />
            <MenuItem
              key="nav-research"
              title="科学研究"
              subMenus={subNavConfig.ScientificResearch}
              callback={this.hideSideMenu}
            />
            <MenuItem
              key="service"
              title="社会服务"
              subMenus={socialService}
              callback={this.hideSideMenu}
            />
          </div>
        </div>
      </div>
    );
  }
}
