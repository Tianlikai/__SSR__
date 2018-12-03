const axios = require('axios');
const queryString = require('query-string');

const baseUrl = 'https://cnodejs.org/api/v1';

const proxy = (req, res, next) => {
  const { path } = req;
  const { user } = req.session;
  const { needAccessToken } = req.query;

  console.log('----------');
  console.log(`${path}`);
  console.log('----------');

  if (needAccessToken && !user.needToken) {
    res.status(401).send({
      success: false,
      msg: 'need login!',
    });
  }

  const query = Object.assign({}, req.query, {
    accesstoken: needAccessToken && user && req.method === 'GET' ? user.accessToken : '',
  });
  if (query.needAccessToken) delete query.needAccessToken;

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: queryString.stringify(
      Object.assign({}, req.body, {
        accesstoken: needAccessToken && user && req.method === 'POST' ? user.accesstoken : '',
      }),
    ),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((resp) => {
      if (resp.status === 200) {
        res.send(resp.data);
      } else {
        res.status(resp.status).send(resp.data);
      }
    })
    .catch((err) => {
      if (err.response) {
        res.status(500).send(err.response.data);
      } else {
        res.status(500).send({
          success: false,
          msg: '未知错误',
        });
      }
    });
};

module.exports = proxy;
