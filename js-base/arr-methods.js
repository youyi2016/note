/**
 * some遇到满足条件的就会退出遍历
 */
var array = [1, 2, 3, 4, 5];

var even = function(element) {
	// checks whether an element is even
	console.log(element)
  return element % 2 === 0;
};

console.log(array.some(even));


/**
 * slice 相当于浅复制，修改其中一个变量的值，都会影响另外一个变量的值
 */
 var a = [],
		 b = [{name: 'youyi'},{name: 'yi'},{name: 'bb'}];
		 

		 a = b.slice(1, b.length)
		 a[0].name = 'change'
		 console.log(b)
