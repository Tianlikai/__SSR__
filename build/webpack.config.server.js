const path = require('path');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../src/server_entry.js'),
  },
  output: {
    filename: 'server_entry.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')],
      },
    ],
  },
});
