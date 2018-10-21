const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('login', {
  })
})

router.post('/', function (req, res, next) {
	const paramsObj = req.body
	const name = paramsObj && paramsObj.username
	const password = paramsObj && paramsObj.password

	if(name == 'youyi2016@foxmail.com' && password == '3333') {
		res.cookie('token', '123456789')
		res.end('login success');
	} else {
		res.end('login fail');
	}
	console.log(name, password, JSON.stringify(req.body));
  
})
module.exports = router