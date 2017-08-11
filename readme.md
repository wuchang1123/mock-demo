# 本地开发环境的数据模拟

## JSON Server
- 功能比较多，比较适合拿来作活动、专题等页面的开发，快速搭建假数据服务器；
- 可以自由套入现有项目中，提供开发数据服务；
- 支持 Express 中间件方式，扩展性强；

### 全局安装
```bash
$ npm install -g json-server
```

- 项目目录下建立数据库 db.json
- 启动  
`$ json-server --watch db.json`

### 项目里使用
```bash
$ npm i json-server --save-dev
```

- 利用npm scripts
	```
	"scripts": {
	    "mock": "./node_modules/json-server/bin/index.js ./mock/db.json"
	}
	```
- 项目目录下建立数据库 db.json
- 启动服务

```bash
npm run mock
```

### 数据库格式

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

### 数据库结构
- 表：数组格式，表名使用复述如posts、comments
- 关系型数据：例如comments数据字段名使用postId进行关联

	[http://localhost:3000/posts/1?_embed=comments](http://localhost:3000/posts/1?_embed=comments "示范")   
	[http://localhost:3000/posts/2?_embed=comments](http://127.0.0.1:3000/posts/2?_embed=comments "示范")

### REST API
```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```
JSONP、CORS、https

### 数据库查询
- 分页
- 排序
- 过滤：指定条件，可以使用

### 如何随机数据
使用js生成数据，替换上面使用的db.json，数据格式一致；  
因为是使用js生成的，所以可以与任何随机的开源库搭配使用；

```
// index.js
module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }
  return data
}
```

### 自定义路由
**可以利用路由功能，解决后端提供的接口参数名跟JSON server不一致的问题；**

项目目录创建 routes.json

```
{
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id"
}
```

启动自定义路由

```
json-server db.json --routes routes.json
```

或者采用脚本方式rewrite

```
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))
```

[http://localhost:3000/blog/posts](http://localhost:3000/blog/posts "示范")   
[http://localhost:3000/blog/posts/1](http://localhost:3000/blog/posts/1 "示范")

把JSON Server挂在指定路径下，避免与现有项目路径冲突

```
server.use('/api', router)
```

### 自定义返回 JSON 数据对象
**稍微有点复杂，需要通过判断访问路径来进行判断是否需要自定义，之后才开始封装自己需要的数据对象**

```
// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data
  })
}
```

### 搭配Mock.js

## 如何模拟 TCP
俊杰、正凯采用触发、监听事件的方式，模拟实现下发；  
心愿礼物：模拟实现自动下发、请求后下发

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
	 - 前后端协议，文档方式记录；
	 - 根据文档自动生成 Mock 数据服务
	 - 也可以输出 json-schema，使用其它框架实现Mock
- json-schema-faker
    - 支持 Fake.js、chance.js；
    - 利用 json-schema 生成指定格式的假数据服务
