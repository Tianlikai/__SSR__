import { CommonList as factory } from '../../../../layouts/CommonList';

const Meeting = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '科学研究', to: '/scientificResearch/direction' },
    { name: '行业会议' },
  ],
  title: '行业会议',
  store: 'scientificResearchMeeting',
});

export default Meeting;
