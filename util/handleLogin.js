const axios = require('axios');
const router = require('express').Router();

const baseUrl = 'https://cnodejs.org/api/v1';

router.post('/login', (req, res, next) => {
  axios
    .post(`${baseUrl}/accesstoken`, {
      accesstoken: req.body.accessToken,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data.success) {
        req.session.user = {
          id: resp.data.id,
          loginName: resp.data.loginname,
          avatarUrl: resp.data.avatar_url,
          accessToken: req.body.accessToken,
        };
        res.json({
          success: true,
          data: resp.data,
        });
      }
    })
    .catch((err) => {
      if (err.response) {
        res.json({
          success: false,
          data: err.response.data,
        });
      } else {
        next(err); // 全局错误处理器，处理
      }
    });
});

module.exports = router;
