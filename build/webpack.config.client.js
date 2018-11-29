const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = (process.env.NODE_ENV = "development");

const config = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "../src/app.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "/public"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [path.join(__dirname, "../node_modules")]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/template.html"),
      inject: true
    })
  ]
};

if (isDev) {
  config.entry = {
    app: ["react-hot-loader/patch", path.join(__dirname, "../src/app.js")]
  };
  config.devServer = {
    contentBase: path.join(__dirname, "../dist"), // devServer先检查硬盘有没有该目录，所以启动devServer，需要先删除dist
    host: "0.0.0.0",
    port: "8888",
    hot: true, // 启动hot-replace
    overlay: {
      errors: true // 错误信息提示
    },
    publicPath: "/public",
    historyApiFallback: {
      index: "/public/index.html"
    }
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
