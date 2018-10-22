// const port = process.env.PORT || config.port
const path = require('path')
const express = require('express')
const app = express()
let cookie= require('cookie-parser')
let bodyParser = require('body-parser')//解析,用req.body获取post参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookie())

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const transferRouter = require('./routes/transfer')
const cheatRouter = require('./routes/cheat')

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/transfer', transferRouter)
app.use('/cheat', cheatRouter)

app.listen(process.env.PORT || 3000);
// app.listen(port, function () {
//   console.log(`${pkg.name} listening on port ${port}`)
// })
