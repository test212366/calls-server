 

const Router = require('express'),
	router = new Router(),
	testRouter = require('./testRouter')

router.use('/test', testRouter)

module.exports = router