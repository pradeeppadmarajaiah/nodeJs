/**
 * http://usejsdoc.org/
 */

// Module reference
var test = require("./data");
var math = require("./math");
var circle = require("./Circle");

console.log("data module is imported sucessfully")
console.log("\n-------------XXXXXXXXXXXXXXXXXXXXXXXXX--------------\n")
console.log(test.name);
console.log(test.message);

console.log("\n-------------Object--------------\n")
console.log(test.carDetails)
console.log(test.carDetails.vin)
console.log(test.carDetails.make)

console.log("\n-------------Arrays--------------\n")
console.log(test.months)
for (var i = 0; i < test.months.length; i++) {
	console.log(test.months[i]);
}

console.log("\n-------------Calling Math--------------\n")
math.add(8, 6);
math.subtract(13, 4);
math.multiply(4, 5);

console.log("\n-------------Calling class--------------\n")
var cl = new circle.Circle(23, "red");
cl.info();
console.log(cl.radius);
cl.calcArea();
console.log("\n---Default class value-----\n");
circle.c.info();
