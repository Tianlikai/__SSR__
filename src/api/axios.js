import axios from 'axios';
import api from './api';

function getMathKeys(url, matchKeys) {
  const reg = /\{(\w+)\}/g;
  let urlReplaceKeys = reg.exec(url);
  while (urlReplaceKeys) {
    matchKeys.push(urlReplaceKeys[1]);
    urlReplaceKeys = reg.exec(url);
  }

  return matchKeys;
}

function replaceParams(url, urlParams) {
  const urlReplaceKeys = getMathKeys(url, []);
  let newUrl;
  for (let i = 0; i < urlReplaceKeys.length; i += 1) {
    const key = urlReplaceKeys[i];

    newUrl = url.replace(`{${key}}`, urlParams[key]);
  }

  return newUrl;
}

const Axios = axios.create({
  baseURL: '/api',
  timeout: 30000,
  withCredentials: false,
  responseType: '',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

Axios.interceptors.request.use(
  (config) => {
    // 此处有bug，之后再处理
    const { token } = {};
    const cfg = Object.assign({}, config);
    if (token) cfg.headers.Authorization = `Bearer ${token}`;

    return cfg;
  },
  (error) => {
    /* eslint-disable no-console */
    console.error(
      `【Axios.interceptors.request】error.data.error.message:${error.data.error.message}`,
      3,
    );
  },
);

function fetch(options, urlOptions) {
  const opts = Object.assign({}, options, urlOptions);
  if (opts.urlParams) {
    opts.url = replaceParams(opts.url, opts.urlParams);
  }
  return new Promise((resolve, reject) => {
    Axios(opts)
      .then((response) => {
        const { code, data } = response.data;
        if (code === '0' && data) {
          resolve(data);
        } else if (code && code !== '0') {
          reject(response.data);
        } else {
          resolve(response.data);
        }
        // console.log('axios data', data)
      })
      .catch((e) => {
        /* eslint-disable no-console */
        console.error('error', e);
        if (e.response && e.response.status === 401) {
          // Storage.del('token')
          //   G.gotoSignIn();
        }
        reject(e.response.data);
      });
  });
}

Object.keys(api).forEach((key) => {
  api[key] = fetch.bind(null, api[key]);
});

export default api;
