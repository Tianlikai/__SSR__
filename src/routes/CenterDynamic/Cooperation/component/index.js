import { CommonList as factory } from '../../../../layouts/CommonList';

const Cooperation = factory({
  config: [
    { key: 'coo_0', name: '首页', to: '/home' },
    { key: 'coo_1', name: '中心动态', to: '/centerDynamic/report/1' },
    { key: 'coo_2', name: '合作交流' },
  ],
  title: '合作交流',
  store: 'dynamicCooperation',
});

export default Cooperation;
