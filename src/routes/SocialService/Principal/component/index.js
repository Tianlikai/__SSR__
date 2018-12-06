import { CommonListCard as factory } from '../../../../layouts/CommonList';

const Direction = factory({
  config: [
    { name: '首页', to: '/home' },
    { name: '社会服务', to: '/socialService/teacher/1' },
    { name: '校长示范' },
  ],
  title: '校长示范',
  store: 'socialServicePrincipalReport',
});

export default Direction;
