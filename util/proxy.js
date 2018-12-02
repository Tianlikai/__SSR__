const axios = require('axios');

const baseUrl = 'https://cnodejs.org/api/v1';

const proxy = (req, res, next) => {
  const { path } = req;
  const { user } = req.session;
  const { needAccessToken } = req.query;

  if (needAccessToken && user.needToken) {
    res.status(401).send({
      success: false,
      msg: 'need login!',
    });
  }

  const query = Object.assign({}, req.query);
  if (query.needAccessToken) delete query.needAccessToken;

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, {
      accesstoken: user.accesstoken,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencode',
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
