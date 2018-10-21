const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
	const queryObj = req.query
	const userId = queryObj && queryObj.account
	const money = queryObj && queryObj.money
	console.log(JSON.stringify(queryObj))
	if(req.cookies.token === '123456789') {
		res.send('transfer to '+ ' '+ userId + ', success')
	}else {
		res.send('transfer fail')
	}
	
})

module.exports = router