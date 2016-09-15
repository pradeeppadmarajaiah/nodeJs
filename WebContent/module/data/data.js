/**
 * http://usejsdoc.org/
 */

var name = "Pradeep Padmarajaiah";
// Private variable
var city = "Bangalore"

// Creating object
var car = {
	vin : 100,
	model : 'X5',
	make : 'BMW',
	price : 65000.00
};

// Making variable public
exports.name = name;
// Or. This variable can not be in the data.js
exports.message = "Hello"
exports.carDetails = car;
exports.months = [ "Jan", "Feb", "Mar", "Apr" ]