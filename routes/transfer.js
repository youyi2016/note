const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('transfer', {

		})	
})

router.get('/pay', function(req, res) {
	const queryObj = req.query
	const userId = queryObj && queryObj.account
	const money = queryObj && queryObj.money
	console.log(JSON.stringify(queryObj))
	const referer = req.headers.referer
	// console.log(referer)
	if(!referer) {
		res.send('it is not reliable link')
    return
	}
	if(req.cookies.token === '123456789') {
		res.send('transfer to '+ ' '+ userId + ', success')
	}else {
		res.send('transfer fail')
	}
})

module.exports = router