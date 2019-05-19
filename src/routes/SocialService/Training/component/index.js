import { CommonListCard as factory } from '../../../../layouts/CommonList';

const Training = factory({
  config: [
    { key: 'tr_0', name: '首页', to: '/home' },
    { key: 'tr_1', name: '社会服务', to: '/socialService/teacher/1' },
    { key: 'tr_2', name: '教师培训' },
  ],
  title: '教师培训',
  store: 'socialServiceTraining',
});

export default Training;
