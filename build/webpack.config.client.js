const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const isDev = process.env.NODE_ENV === 'development';

/* eslint-disable global-require */
const config = webpackMerge(baseConfig, {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../src/app.js'),
  },
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              parser: 'postcss-scss',
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 10 version', 'ie >= 10'],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/template.html'),
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'server.ejs',
      template: `!!ejs-compiled-loader!${path.join(__dirname, '../src/server_template.ejs')}`,
      inject: true,
    }),
  ],
});

if (isDev) {
  config.devtool = 'cheap-module-eval-source-map';
  config.entry = {
    app: ['react-hot-loader/patch', path.join(__dirname, '../src/app.js')],
  };
  config.devServer = {
    contentBase: path.join(__dirname, '../dist'), // devServer先检查硬盘有没有该目录，所以启动devServer，需要先删除dist
    host: '0.0.0.0',
    port: '8888',
    hot: true, // 启动hot-replace
    overlay: {
      errors: true, // 错误信息提示
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html',
    },
    proxy: {
      '/api': 'http://localhost:3333',
    },
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
