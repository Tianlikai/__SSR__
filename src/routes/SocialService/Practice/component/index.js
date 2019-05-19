import { CommonListCard as factory } from '../../../../layouts/CommonList';

const Practice = factory({
  config: [
    { key: 'p_0', name: '首页', to: '/home' },
    { key: 'p_1', name: '社会服务', to: '/socialService/teacher/1' },
    { key: 'p_2', name: '实习实训' },
  ],
  title: '实习实训',
  store: 'socialServicePractice',
});

export default Practice;
