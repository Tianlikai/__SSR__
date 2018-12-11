import { CommonList as factory } from '../../../../layouts/CommonList';

const Report = factory({
  config: [
    { key: 're_0', name: '首页', to: '/home' },
    { key: 're_1', name: '中心动态', to: '/centerDynamic/report/1' },
    { key: 're_2', name: '媒体报道' },
  ],
  title: '媒体报道',
  store: 'dynamicReport',
});

export default Report;
