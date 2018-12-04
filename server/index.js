const fs = require('fs');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const serverRender = require('../util/serverRender');

const isDev = process.env.NODE_ENV === 'development';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.use(
  session({
    maxAge: 10 * 60 * 1000,
    name: 'tid',
    resave: false,
    saveUninitialized: false,
    secret: 'jason react',
  }),
);

app.use('/api/user', require('../util/handleLogin'));
app.use('/api', require('../util/proxy'));

app.use(favicon(path.resolve(__dirname, '../favicon.ico')));

if (!isDev) {
  const serverEntry = require('../dist/server_entry.js'); // eslint-disable-line
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf-8');

  app.use('/public', express.static(path.resolve(__dirname, '../dist')));

  app.get('*', (req, res) => {
    serverRender(serverEntry, template, req, res);
  });
} else {
  const devRender = require('../util/devRender'); // eslint-disable-line
  devRender(app);
}

/* eslint-disable no-unused-vars */
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error);
});

app.listen(3333, () => {
  console.log('server is listening on 3333');
});
