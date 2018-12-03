const path = require('path');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

/* eslint-disable global-require */
module.exports = webpackMerge(baseConfig, {
  target: 'node',
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../src/server_entry.js'),
  },
  externals: Object.keys(require('../package').dependencies), // 不将下列依赖打包进入server_entry.js中
  output: {
    filename: 'server_entry.js',
    libraryTarget: 'commonjs2',
  },
});
