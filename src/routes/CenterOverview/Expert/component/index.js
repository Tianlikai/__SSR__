import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { inject, observer } from 'mobx-react';

import ListCard from '../../../../components/ListCard';
import CommonHeader from '../../../../layouts/CommonHeader';
import CommonLayout from '../../../../layouts/CommonLayout';

const { CommonLayoutContainer, CommonLayoutHeader, CommonLayoutContent } = CommonLayout;

@inject('homeStore')
@observer
export default class Expert extends React.Component {
  static propTypes = {
    homeStore: PropTypes.object,
  };

  render() {
    const { homeStore } = this.props;
    const { listExpert } = homeStore;
    return (
      <CommonLayoutContainer>
        <Helmet>
          <title>华中师范大学 - 论答学习技术与大数据研究中心</title>
          <meta name="description" content="华中师范大学 - 论答学习技术与大数据研究中心" />
        </Helmet>
        <CommonLayoutHeader>
          <CommonHeader title="专家委员" />
        </CommonLayoutHeader>
        <CommonLayoutContent>
          <ListCard className="self-listCard" config={listExpert} />
        </CommonLayoutContent>
      </CommonLayoutContainer>
    );
  }
}
