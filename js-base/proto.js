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