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

// app.listen(process.env.PORT || 3000);
// app.listen(port, function () {
//   console.log(`${pkg.name} listening on port ${port}`)
// })


//聊天相关
// let httpServer = require('http').createServer()
// let io = require('socket.io')(httpServer);
//路由
// const clientIndex = require('./routes/chat/client')
// app.use('/chat', clientIndex)
/**
*监听客户端连接
*io是我们定义的服务端的socket
*回调函数里面的socket是本次连接的客户端socket
*io与socket是一对多的关系
*/
// io.on('connection', function (socket) {
// 	/*所有的监听on，与发送emit都得写在连接里面，包括断开连接*/
// 	console.log(1111)
// })

let WebSocketServer = require('websocket').server;
let http = require('http');
let server = http.createServer(function(request, response) {
	console.log((new Date()) + ' Received request for ' + request.url);
	response.writeHead(404);
	response.end();
});

server.listen(8080, function() {
	console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({
	httpServer: server,
	// You should not use autoAcceptConnections for production
	// applications, as it defeats all standard cross-origin protection
	// facilities built into the protocol and the browser.  You should
	// *always* verify the connection's origin and decide whether or not
	// to accept it.
	autoAcceptConnections: false
});

function originIsAllowed(origin) {
	// put logic here to detect whether the specified origin is allowed.
	return true;
}

let connectionsArray = []

function addConnections(connection, id) {
  // this.connection.push({
	// 	id: id,
	// 	client: connection
	// })
}

function getClientConnection() {

}

function sendAllUser() {

}

function sendSpeicalUser() {

}

let count = 0

//客户端send时会触发request
wsServer.on('request', function(request) {
	if (!originIsAllowed(request.origin)) {
		// Make sure we only accept requests from an allowed origin
		request.reject();
		console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
		return;
	}
	// console.log('request....',request, request.origin)
	var connection = request.accept('', request.origin);
	addConnections(connection, count)
	console.log((new Date()) + ' Connection accepted.');
	connection.on('message', function(message) {
		  
			if (message.type === 'utf8') {
					console.log('Received Message: ' + message.utf8Data);
					console.log(message.utf8Data)
          // const client = this.getClientConnection(message)
					// client.sendUTF(message.utf8Data);
					count++
					let msg = "I can not understand"+ " "+ count
					connection.send(msg)
			}
			else if (message.type === 'binary') {
					console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
					const client = getClientConnection(message)
					client.sendBytes(message.binaryData);
			}
			
	});
	connection.on('close', function(reasonCode, description) {
			console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
	});
});



