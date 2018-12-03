import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Helmet from 'react-helmet';
import AppState from '../../store/app.state';

@inject('appState')
@observer
export default class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  };

  componentDidMount() {
    this.bootstrapper();
  }

  changeName = (e) => {
    const { appState } = this.props;
    appState.changeName(e.target.value);
  };

  bootstrapper = () => new Promise(resolve => setTimeout(() => {
    const { appState } = this.props;
    appState.changeCount(3);
    resolve(true);
  }));

  render() {
    const { appState } = this.props;
    const { msg } = appState;
    return (
      <div>
        <Helmet>
          <meta name="description" content="话题列表" />
          <title>this is TopicList</title>
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <span>{msg}</span>
      </div>
    );
  }
}
