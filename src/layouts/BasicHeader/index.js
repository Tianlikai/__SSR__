import React from 'react';
import HeaderWeb from './HeaderWeb';
import HeaderPhone from './HeaderPhone';

import './style.scss';

const Header = () => (
  <div className="layout-header">
    <HeaderWeb />
    <HeaderPhone />
  </div>
);

export default Header;
