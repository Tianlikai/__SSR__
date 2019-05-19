import React from 'react';

import classnames from 'classnames';

import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import './style.scss';

const SubNavItem = (props) => {
  const { name, pathname, to } = props;
  // bug：当更改路由导致加载页面为空
  // 改bug临时 hack 解决方案
  if (name === '校长示范') return null;

  let target = to;
  const arr = target.split('/');
  const len = arr.length - 1;
  if (len === 3) {
    target = `/${arr[1]}/${arr[2]}/`;
  }
  const cn = classnames({
    'subNav-item-active': pathname.indexOf(target) >= 0,
  });
  return (
    <div className="subNav-item">
      <Link to={to} className={cn}>
        {name}
      </Link>
    </div>
  );
};

SubNavItem.propTypes = {
  name: PropTypes.string,
  pathname: PropTypes.string,
  to: PropTypes.string,
};

@withRouter
export default class SubNav extends React.Component {
  static propTypes = {
    config: PropTypes.array,
  };

  render() {
    const { config, history } = this.props;
    const { pathname } = history.location;
    return (
      <div className="subNav-container">
        {config
          && config.map(subNav => <SubNavItem key={subNav.to} pathname={pathname} {...subNav} />)}
      </div>
    );
  }
}
