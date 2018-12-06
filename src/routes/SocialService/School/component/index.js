import { CommonListCard as factory } from '../../../../layouts/CommonList';

const School = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '社会服务', to: '/socialService/teacher/1' },
    { name: '研究基地' },
  ],
  title: '研究基地',
  store: 'socialServiceSchool',
});

export default School;
