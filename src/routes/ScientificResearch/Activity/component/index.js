import { CommonList as factory } from '../../../../layouts/CommonList';

const Activity = factory({
  config: [
    { key: 'ac_0', name: '首页', to: '/home' },
    { key: 'ac_1', name: '科学研究', to: '/scientificResearch/direction' },
    { key: 'ac_2', name: '研究活动' },
  ],
  title: '研究活动',
  store: 'scientificResearchActivity',
});

export default Activity;
