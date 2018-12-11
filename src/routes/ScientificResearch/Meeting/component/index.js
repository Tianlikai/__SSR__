import { CommonList as factory } from '../../../../layouts/CommonList';

const Meeting = factory({
  config: [
    { key: 'me_0', name: '首页', to: '/home' },
    { key: 'me_1', name: '科学研究', to: '/scientificResearch/direction' },
    { key: 'me_2', name: '行业会议' },
  ],
  title: '行业会议',
  store: 'scientificResearchMeeting',
});

export default Meeting;
