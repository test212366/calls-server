require('dotenv').config()

const express = require('express'),
	app = express(),
	cors = require('cors'),
	routers = require('./routes/index')

app.use(cors())
app.use(express.json({extended: true}))
app.use('/api', routers)



;(async () => {
	try {
		const server = await app.listen(5000, () => console.log('server start'))
	} catch(e) {
		console.log(e)
	}
})()