const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mock/db.json')
const middlewares = jsonServer.defaults() // 可以传入 options 配置

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if (req.method === 'POST') {
		req.body.createdAt = Date.now()
	}
	// Continue to JSON Server router
	next()
})

// Add this before server.use(router)
server.use(jsonServer.rewriter({
	//'/api/*': '/$1',
	"/blog/:resource/:id/show": "/:resource/:id",
	"/blog/:category": "/posts?category=:category"
}))

// 把已经生成的数据再次封装
router.render = (req, res) => {
	res.jsonp({
		body: res.locals.data
	})
}

// Use default router
server.use(router)
// Mount the router on /api
// server.use('/api', router)
server.listen(3000, () => {
	console.log('JSON Server is running')
})
