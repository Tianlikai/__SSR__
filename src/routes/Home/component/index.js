import React from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Content from '../../../layouts/Content';
import Banner from './Banner';
import Dynamic from './Dynamic';
import Study from './Study';
import Leader from './Leader';

import { ARTICLE_DETAIL_TYPE } from '../../../config/urls';

import './style.scss';

@inject('homeStore')
@observer
class Dashboard extends React.Component {
  static propTypes = {
    homeStore: PropTypes.object,
    history: PropTypes.object,
  };

  componentDidMount() {
    // const { HomeStore } = this.props;
    // HomeStore.initListBanner();
    // HomeStore.initRecentList({
    //   type: 1,
    //   error: '获取动态文章列表失败',
    // });
    // HomeStore.initRecentList({
    //   type: 2,
    //   error: '获取最新成果列表失败',
    // });
  }

  handleMove = (record) => {
    const { history } = this.props;
    const path = ARTICLE_DETAIL_TYPE[record.type];
    history.push(`${path}${record.articleId}`);
  };

  handleRedirectToDynamic = () => {
    const { history } = this.props;
    history.push('/centerDynamic/report/1');
  };

  handleRedirectToResearch = () => {
    const { history } = this.props;
    history.push('/scientificResearch/direction');
  };

  handleRedirectToLeader = () => {
    const { history } = this.props;
    history.push('/centerOverview/leader');
  };

  render() {
    const { homeStore } = this.props;
    const {
      listBanner, listSubBanner, listResearch, listLeader,
    } = homeStore;
    return (
      <Content className="home-content">
        <Helmet>
          <title>华中师范大学 - 论答学习技术与大数据研究中心</title>
          <meta name="description" content="华中师范大学-论答学习技术与大数据研究中心" />
        </Helmet>
        <Banner listBanner={listBanner} />

        <div className="middle-container section-container justify-content">
          <Dynamic
            listSubBanner={listSubBanner}
            handleMove={this.handleMove}
            handleRedirectToDynamic={this.handleRedirectToDynamic}
          />

          <Study
            listResearch={listResearch}
            handleMove={this.handleMove}
            handleRedirectToResearch={this.handleRedirectToResearch}
          />
        </div>
        <Leader listLeader={listLeader} handleRedirectToLeader={this.handleRedirectToLeader} />
      </Content>
    );
  }
}

export default withRouter(Dashboard);
