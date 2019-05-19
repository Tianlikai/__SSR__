import React from 'react';
import { Helmet } from 'react-helmet';

import Content from '../../../../layouts/Content';

export default () => (
  <Content>
    <Helmet>
      <title>404 - 论答CRM</title>
      <meta name="description" content="论答CRM" />
    </Helmet>
    没有找到相关页面
  </Content>
);
