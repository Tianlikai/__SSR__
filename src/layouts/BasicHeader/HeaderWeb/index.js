import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import navConfig from '../../../config/navConfig';

const Logo = 'https://lcdns-static.learnta.com/staSrc4/ccnu/t1/8e1d54637214c73059f12c6a9423c2fa.png';

const HeaderItem = (props) => {
  const { pathname, to, name } = props;
  const target = pathname.split('/')[1];
  const cn = classnames({
    'nav-item-active': to.indexOf(target) >= 0,
  });
  return (
    <div className="nav-item">
      <Link to={to} className={cn}>
        {name}
        <div className="nav-active-tag" />
      </Link>
    </div>
  );
};

HeaderItem.propTypes = {
  pathname: PropTypes.string,
  to: PropTypes.string,
  name: PropTypes.string,
};

@withRouter
export default class HeaderWeb extends React.Component {
  render() {
    const {
      history: {
        location: { pathname },
      },
    } = this.props;
    return (
      <div className="header-container-web">
        <Link to={navConfig[0].to}>
          <img className="logo-web" src={Logo} alt="logo" />
        </Link>
        <div className="nav-right">
          {navConfig && navConfig.map(nav => <HeaderItem pathname={pathname} {...nav} />)}
        </div>
      </div>
    );
  }
}
