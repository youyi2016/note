var obj = new Object();
Object.prototype.name = 'Kevin'

function Person() {

}

Person.prototype.titile = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
console.log(person.__proto__)
console.log(obj.__proto__)

//检查chrome的表现
function Foo(params) {
	
}
var a1 = new Foo()
console.log(a1)

Foo.prototype.constructor = function Foo2() {}
console.log(a1.constructor)
console.log(a1.constructor.name)
console.log(a1)

