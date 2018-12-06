import { CommonList as factory } from '../../../../layouts/CommonList';

const Cooperation = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '中心动态', to: '/centerDynamic/report/1' },
    { name: '合作交流' },
  ],
  title: '合作交流',
  store: 'dynamicCooperation',
});

export default Cooperation;
