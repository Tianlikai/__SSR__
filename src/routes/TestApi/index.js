import React from 'react';
import axios from 'axios';

class TestApi extends React.Component {
  componentDidMount() {}

  getTopics = () => {
    axios
      .get('/api/topics')
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  login = () => {
    axios
      .post('/api/user/login')
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.getTopics}>
          getTopics
        </button>
      </div>
    );
  }
}

export default TestApi;
