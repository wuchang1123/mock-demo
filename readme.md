# 前后端分离：本地开发环境的模拟数据

## 目的：
- 可以与后端同时开始开发，不需要等待后端接口实现；
- 减少联调时出现过多的bug；

## 开发场景
后端API文档（doc、wiki）；
前端按文档编写生成假数据；
是否可以出文档的同时，自动生成假数据服务呢？

## Mock 的方式
- JS 内嵌
- Ajax 请求拦截
- 本地服务器

## 需要 Mock 的场景
- Ajax 数据
- JSONP 数据
- TCP
- 服务端模版渲染

## Mock 功能需求
- http|https 服务
- 静态文件服务
- RESTful API
- CORS
- 测试域名绑定
- 数据完全随机、指定范围随机

## 推荐开源工具、库
- JSON server
    - 分页、排序、过滤、全文搜索
    - 关系型数据
    - RESTful
    - CORS
    - 静态文件服务
    - 支持 Express 中间件方式，扩展性强；
    - 路由 rewrite；
    - 利用route.render 重新封装数据;
- swagger API 工具，Mock功能比较弱；
- json-schema-faker
    - 支持 Fake.js、chance.js；
    - 利用 json-schema 生成指定格式的假数据服务

## 如何模拟 TCP
- 俊杰、正凯采用触发、监听事件的方式
    - 等待