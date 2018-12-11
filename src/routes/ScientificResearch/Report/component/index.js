import { CommonList as factory } from '../../../../layouts/CommonList';

const Report = factory({
  config: [
    { key: 'res_0', name: '首页', to: '/home' },
    { key: 'res_1', name: '科学研究', to: '/scientificResearch/direction' },
    { key: 'res_2', name: '研究报告' },
  ],
  title: '研究报告',
  store: 'scientificResearchReport',
});

export default Report;
