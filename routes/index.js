const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
	res.send('Hello World');
  // res.render('users', {
  //   name: req.params.name
  // })
})

module.exports = router