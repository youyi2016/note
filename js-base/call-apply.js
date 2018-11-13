
//call: 指定的this，和若干个参数的前提下调用函数或方法

var foo = {
	value: 1
};

function bar() {
	console.log(this.value);
}

bar.call(foo); // 1

/*
*  模拟实现call
*  关键是改变对象的this指向
*/

//1、怎么改变函数this指向呢？
//2、回顾下this，有一条是this指向函数的直接调用者
//3、我们如果把bar函数放在foo对象里面，就可以实现在调用bar时，this指向foo对象

var foo = {
	value: 1,
	bar: function() {
		console.log(this.value);
	}
}

foo.bar()//1
//4、但是我们不能给foo添加新对象啊，所以删除
delete foo.bar
// console.log(foo)//{value:1}

//我们有了这个思路，
//1、给一个函数添加call属性，传递一个对象作为参数，
//2、给这个参数添加一个值为函数的属性，然后调用这个函数，然后删除，就可以模拟call的实现了
Function.prototype.call2 = function(context) {
	//获取调用call2的对象，这个对象是个函数
	context.fn = this
	context.fn()
	delete context.fn
}

var foo = {
	value: 1
};

function bar() {
	console.log(this.value);
}

// bar.call2(foo); // 1

//3、实现call传递参数
Function.prototype.call2 = function(context) {
	//获取调用call2的对象，这个对象是个函数
	context.fn = this
	var args = []
	for(var i = 1, len=arguments.length; i<len; i++) {
		args.push(arguments[i])
	}
	
	context.fn(...args)
	// eval('context.fn(' + args +')');
	delete context.fn
}

var foo = {
	value: 1
};

function bar(name, age) {
	console.log(arguments)
	console.log("name:"+name+ " age:"+ age);
}

bar.call2(foo,'youyi','24'); // 1

//4、实现第一参数为null时，this指向window
Function.prototype.call2 = function(cxt) {
	var context = cxt || window
	//获取调用call2的对象，这个对象是个函数
	context.fn = this
	var args = []
	for(var i = 1, len=arguments.length; i<len; i++) {
		args.push(arguments[i])
	}
	
	context.fn(...args)
	// eval('context.fn(' + args +')');
	delete context.fn
}

var value = 7
var foo = {
	value: 1
};

function bar(name, age) {
	console.log(this.value)
	console.log("name:"+name+ " age:"+ age);
}

bar.call2(null,'youyi','24'); // 1




