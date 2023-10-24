const TestController = require('../controllers/TestController')

const Router = require('express'),
	router = new Router()


router.post('/test', TestController.test)

module.exports = router