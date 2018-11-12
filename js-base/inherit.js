//寄生继承
function Vehicle() {
	this.engine = 1
	this.wheels = 2
}

Vehicle.prototype.ignition = function() {
	console.log("turning on engine"+ this.wheels+'wheels')
}

Vehicle.prototype.drive = function() {
	this.ignition();
	console.log('steering and moving forward')
}

function Car() {
	var car = new Vehicle()
	car.wheels = 4
	var vehicle= car.drive
	car.drive = function() {
		vehicle.call(this)
		console.log('rolling on '+ this.wheels  + 'wheels')
	}

	return car;
}

var mycar = new Car()
mycar.drive()

