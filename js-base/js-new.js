function funa () {
	this.name = arguments[1];
	this.age = arguments[2];
  return null
}

funa.prototype.getName = function() {
	return this.name;
}

// console.log('name:', new funa(1, 'youyi', 'age').getName())

function newFun() {
	var fun = [].shift.call(arguments);
	var obj = Object.create(fun.prototype);
	var result = fun.apply(obj, arguments);
	console.log(obj,result)
	return typeof result !== 'object' ? fun : result;
}

var obj = newFun(funa, 'beibei', '24')
console.log('output:', obj.getName())

