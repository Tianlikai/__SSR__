import { CommonList as factory } from '../../../../layouts/CommonList';

const Report = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '中心动态', to: '/centerDynamic/report/1' },
    { name: '媒体报道' },
  ],
  title: '媒体报道',
  store: 'dynamicReport',
});

export default Report;
