import { CommonListCard as factory } from '../../../../layouts/CommonList';

const Direction = factory({
  config: [
    { key: 'pri_0', name: '首页', to: '/home' },
    { key: 'pri_1', name: '社会服务', to: '/socialService/teacher/1' },
    { key: 'pri_2', name: '校长示范' },
  ],
  title: '校长示范',
  store: 'socialServicePrincipalReport',
});

export default Direction;
