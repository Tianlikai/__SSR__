import React from 'react';

import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import CommonHeader from '../CommonHeader';
import CommonLayout from '../CommonLayout';

import ListCard from '../../components/ListCard';
import { LoadingCard } from '../../components/Loading';
import { Breadcrumb } from '../../components/Breadcrumb';

import { ARTICLE_DETAIL_TYPE } from '../../config/urls';

import './style.scss';

const { CommonLayoutContainer, CommonLayoutHeader, CommonLayoutContent } = CommonLayout;

const factory = (data) => {
  const { config, title, store } = data;

  @inject(store)
  @observer
  class ListContainer extends React.Component {
    static propTypes = {
      match: PropTypes.object,
      history: PropTypes.object,
    };

    componentDidMount() {
      const {
        match: {
          params: { page },
        },
      } = this.props;
      this.props[store].initList({ pageNo: page }); // eslint-disable-line
    }

    componentWillReceiveProps(nextProps) {
      const {
        match: { params },
      } = this.props;
      const { page: oldPage } = params;
      const { page } = nextProps.match.params;
      if (page === oldPage) return null;
      this.props[store].initList({ pageNo: page }); // eslint-disable-line
      return null;
    }

    handleChangePage = (page) => {
      const {
        history,
        match: { path },
      } = this.props;
      const route = path.replace(':page', page);
      history.push(`${route}`);
    };

    render() {
      //   const { match } = this.props;
      const { data } = this.props[store]; // eslint-disable-line
      const { loading, count, list } = data;
      //   const page = parseInt(match.params.page);
      return (
        <CommonLayoutContainer>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content="论答学习技术与大数据研究中心" />
          </Helmet>
          <CommonLayoutHeader>
            <Breadcrumb className="T-card-breadcrumb" config={config} />
            <CommonHeader className="T-card-header" title={title} />
          </CommonLayoutHeader>
          <CommonLayoutContent>
            {loading && <LoadingCard />}
            {!loading && count === 0 && <div className="with-noInfo">没有相关信息～</div>}
            <ListCard className="T-card-list" config={list} ARTICLE_TYPE={ARTICLE_DETAIL_TYPE} />
            {/* <div className='pagination-container'>
                            <Pagination
                                total={count}
                                Current={page}
                                onChange={this.handleChangePage}
                            />
                        </div> */}
          </CommonLayoutContent>
        </CommonLayoutContainer>
      );
    }
  }

  return withRouter(ListContainer);
};

export default factory;
