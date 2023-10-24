const TestService = require("../service/TestService")

class TestController {
	test(req, res, next) {
		try {
			TestService.test()
			return res.json('all okey')
		} catch(e) {
			console.log(e)
		}
	}
}
module.exports = new TestController