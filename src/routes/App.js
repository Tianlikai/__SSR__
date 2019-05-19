import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../config/router';

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return [
      <div key="app">
        <Link to="/list">首页</Link>
        <br />
        <Link to="/detail">详情页</Link>
        <br />
        <Link to="/testApi">测试接口</Link>
      </div>,
      <Routes key="r_" />,
    ];
  }
}
