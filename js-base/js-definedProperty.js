var o = {}; // 创建一个新对象

// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(o, "a", {
	value: 37,
	writable: true,
	enumerable: true,
	configurable: true
});

// 对象o拥有了属性a，值为37

// 在对象中添加一个属性与存取描述符的示例
var bValue;
Object.defineProperty(o, "b", {
	get: function () {
		return bValue;
	},
	set: function (newValue) {
		bValue = newValue;
	},
	enumerable: true,
	configurable: true
});

o.b = 38;
// 对象o拥有了属性b，值为38

/**
 * configurable: false
 */
var o = {};
Object.defineProperty(o, "a", {
	get: function () {
		return 1;
	},
	configurable: false
});
Object.defineProperty(o, "a", {
	get: function () {
		return 1;
	},
	configurable: true
});

// throws a TypeError
// Object.defineProperty(o, "a", {
// 	configurable: true
// });
// // throws a TypeError
// Object.defineProperty(o, "a", {
// 	enumerable: true
// });
// // throws a TypeError (set was undefined previously) 
// Object.defineProperty(o, "a", {
// 	set: function () {}
// });
// // throws a TypeError (even though the new get does exactly the same thing) 
// Object.defineProperty(o, "a", {
// 	get: function () {
// 		return 1;
// 	}
// });
// // throws a TypeError
// Object.defineProperty(o, "a", {
// 	value: 12
// });

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
o.a = 89
console.log(o.a); // logs 1

/**
 * 直接定义对象属性时，属性默认为数据描述符，配置参数默认都为true
 * 通过defineProperty定义对象属性并且只配置value时，其他配置参数默认为false
*/
var o = {};

o.a = 1;
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : true,
  configurable : true,
  enumerable : true
});


// 另一方面，
Object.defineProperty(o, "a", { value : 1 });
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : false,
  configurable : false,
  enumerable : false
});

/**
 * set/get
 */
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      // return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature = "67"
console.log(arc.temperature); // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]

/**
 * 第二种写法
 */
var pattern = {
	get: function () {
			return 'I alway return this string,whatever you have assigned';
	},
	set: function () {
			this.myname = 'this is my name string';
	}
};


function TestDefineSetAndGet() {
	Object.defineProperty(this, 'myproperty', pattern);
}


var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';

// 'I alway return this string,whatever you have assigned'
console.log(instance.myproperty);
// 'this is my name string'
console.log(instance.myname);

/**
 * 对象文字语法写法
 */

 var myObject = {
	 get a() {
		 return 2
	 }
 }
 myObject.a = 3
 console.log(myObject.a)//2
 console.log(myObject.b)//undefined
