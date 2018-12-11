import { CommonListCard as factory } from '../../../../layouts/CommonList';

const School = factory({
  config: [
    { key: 'sc_0', name: '首页', to: '/home' },
    { key: 'sc_1', name: '社会服务', to: '/socialService/teacher/1' },
    { key: 'sc_2', name: '研究基地' },
  ],
  title: '研究基地',
  store: 'socialServiceSchool',
});

export default School;
