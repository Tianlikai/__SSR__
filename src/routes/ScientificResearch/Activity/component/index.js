import { CommonList as factory } from '../../../../layouts/CommonList';

const Activity = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '科学研究', to: '/scientificResearch/direction' },
    { name: '研究活动' },
  ],
  title: '研究活动',
  store: 'scientificResearchActivity',
});

export default Activity;
