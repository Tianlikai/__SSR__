# 项目描述

## 项目规范

问题： 是否需要代码开发时预检测 eslint

- js 规范 eslint 继承 airbnb
- style 规范
- .editorconfig 处理不同操作系统之间编辑差异
- git pre-commit 提交代码强制检测钩子

## webpack

采用 webpack 进行工程构建

### webpack.base.config.js

抽离公共 webpack 配置

### favicon 在服务端配置 html 小图标

## nodemon

配置 nodemon.json,只在更改 指定 js 代码时 兼听监听并重启代码

## 路由

html5 中有一个 history API，让我们能够让我们控制页面跳转

### React-router

> react-router

## 数据流解决方案

简单实用的 mobxJs

## React 16

特性

- Error Boundaries 错误边界，componentDidCatch 生命周期方法捕获更详细的错误内容（直接以组件的形式展示在页面中）
- new render types 允许 react 返回数组和字符串（不需要一定需要根结点 div，去掉不必要的 div）
- Portals 将组件插入到指定的 dom 节点中（应用场景浮层，modal）
- better server-side-render

## 已经完成的问题

- eslint editConfig 限制代码格式
- webpack 基础配置
- 基础服务端渲染
- 开发技术栈引入
- router 配置
- 页面编写

## 目前解决问题

上下优先级

- 实现服务端数据代理
- 优化 axios 请求
- 服务端实现异步加载组件
- 实现 css lint（pre-commit-hock）
- router 权限配置
- 三方库分离
- css 提取，公共 css 提取
