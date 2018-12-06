import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Helmet } from 'react-helmet';
import LoadingHeader from './LoadingHeader';
import ListAttachments from './ListAttachments';
import CommonLayout from '../../layouts/CommonLayout';
import { Breadcrumb } from '../../components/Breadcrumb';

import './style.scss';

const { CommonLayoutContainer, CommonLayoutHeader, CommonLayoutContent } = CommonLayout;

/* eslint-disable react/no-danger */
@inject('Detail')
@observer
class Article extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    Detail: PropTypes.object.isRequired,
    routerData: PropTypes.object,
  };

  componentDidMount() {
    const { match, Detail } = this.props;
    const { params } = match;
    const { id } = params;
    Detail.getCcnuArticleDetail(id);
  }

  render() {
    const { routerData, Detail } = this.props;
    const { breadcrumb } = routerData;
    const { loading, info } = Detail.data;
    const {
      publishAt, title, content, enclosure,
    } = info;
    const config = [{ name: '首页', to: '/home' }, breadcrumb[0], breadcrumb[1], { name: '正文' }];
    const __html = { __html: content }; // eslint-disable-line
    const attachments = enclosure ? JSON.parse(enclosure) : false;
    return (
      <CommonLayoutContainer>
        <Helmet>
          <title>华中师范大学 - 论答学习技术与大数据研究中心</title>
          <meta name="description" content="华中师范大学 - 论答学习技术与大数据研究中心" />
        </Helmet>
        <CommonLayoutHeader className="T-layoutHeader">
          <Breadcrumb className="T-article-breadcrumb" config={config} />
          {loading && <LoadingHeader />}
          {!loading && (
            <div title={title} className="T-article-title T-mul-ellipse">
              {title}
            </div>
          )}
          {!loading && (
            <div title={publishAt} className="T-article-time">
              {publishAt}
            </div>
          )}
        </CommonLayoutHeader>
        <CommonLayoutContent className="T-layoutContent">
          {loading && <LoadingHeader />}
          {!loading && (
            <div
              className="htmlWrapper redactor-styles redactor-layer-img-edit redactor-in"
              dangerouslySetInnerHTML={__html}
            />
          )}
          {attachments && <ListAttachments attachments={attachments} />}
        </CommonLayoutContent>
      </CommonLayoutContainer>
    );
  }
}

export default withRouter(Article);
