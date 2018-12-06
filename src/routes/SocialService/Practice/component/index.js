import { CommonListCard as factory } from '../../../../layouts/CommonList';

const Practice = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '社会服务', to: '/socialService/teacher/1' },
    { name: '实习实训' },
  ],
  title: '实习实训',
  store: 'socialServicePractice',
});

export default Practice;
