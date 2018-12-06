import { CommonList as factory } from '../../../../layouts/CommonList';

const Report = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '科学研究', to: '/scientificResearch/direction' },
    { name: '研究报告' },
  ],
  title: '研究报告',
  store: 'scientificResearchReport',
});

export default Report;
