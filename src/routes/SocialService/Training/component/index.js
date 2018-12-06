import { CommonListCard as factory } from '../../../../layouts/CommonList';

const Training = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '社会服务', to: '/socialService/teacher/1' },
    { name: '教师培训' },
  ],
  title: '教师培训',
  store: 'socialServiceTraining',
});

export default Training;
