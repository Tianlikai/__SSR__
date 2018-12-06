import React from 'react';

import { Helmet } from 'react-helmet';

import ContentText from './ContentText';
import CommonHeader from '../../../../layouts/CommonHeader';
import CommonLayout from '../../../../layouts/CommonLayout';

import './style.scss';

const { CommonLayoutContainer, CommonLayoutHeader, CommonLayoutContent } = CommonLayout;

const ListContainer = () => {
  const title = '华中师范大学 - 论答学习技术与大数据研究中心';
  return (
    <CommonLayoutContainer>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="论答学习技术与大数据研究中心" />
      </Helmet>
      <CommonLayoutHeader>
        <CommonHeader title="研究方向" />
      </CommonLayoutHeader>
      <CommonLayoutContent>
        <ContentText className="contentText" />
      </CommonLayoutContent>
    </CommonLayoutContainer>
  );
};

export default ListContainer;
