import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { AppState } from '../../store/app.state';

@inject('appState')
@observer
export default class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  };

  componentDidMount() {}

  changeName = (e) => {
    const { appState } = this.props;
    appState.changeName(e.target.value);
  };

  render() {
    const { appState } = this.props;
    const { msg } = appState;
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{msg}</span>
      </div>
    );
  }
}
