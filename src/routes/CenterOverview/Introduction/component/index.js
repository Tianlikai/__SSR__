import React from 'react';
import { Helmet } from 'react-helmet';

import ContentText from './ContentText';
import CommonHeader from '../../../../layouts/CommonHeader';
import CommonLayout from '../../../../layouts/CommonLayout';

import './style.scss';

const { CommonLayoutContainer, CommonLayoutHeader, CommonLayoutContent } = CommonLayout;

const Introduction = () => (
  <CommonLayoutContainer>
    <Helmet>
      <title>华中师范大学 - 论答学习技术与大数据研究中心</title>
    </Helmet>
    <CommonLayoutHeader>
      <CommonHeader title="中心简介" />
    </CommonLayoutHeader>
    <CommonLayoutContent>
      <ContentText className="contentText" />
    </CommonLayoutContent>
  </CommonLayoutContainer>
);

export default Introduction;
