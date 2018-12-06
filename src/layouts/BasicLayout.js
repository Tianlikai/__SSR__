import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import BasicFooter from './BasicFooter';
import BasicHeader from './BasicHeader';

import './styles/BasicLayout.scss';

export default class Home extends React.Component {
  static propTypes = {
    routerData: PropTypes.object,
  };

  componentDidUpdate() {
    if (this.node) {
      ReactDOM.findDOMNode(this.node).scrollIntoView(); // eslint-disable-line
    }
  }

  render() {
    const { routerData } = this.props;
    const { childRoutes } = routerData;

    return (
      <div className="home">
        <div
          ref={(node) => {
            this.node = node;
          }}
          className="scrollTop"
        />
        <BasicHeader />
        <Switch>{childRoutes}</Switch>
        <BasicFooter />
      </div>
    );
  }
}
