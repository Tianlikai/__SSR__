import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../routes/TopicList';
import TopicDetail from '../routes/TopicDetail';

const Routes = [
  <Route key="r_index" path="/" exact render={() => <Redirect to="/list" />} />,
  <Route key="r_list" path="/list" component={TopicList} />,
  <Route key="r_detail" path="/detail" component={TopicDetail} />,
];

export default () => Routes;
