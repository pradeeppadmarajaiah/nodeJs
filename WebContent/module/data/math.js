/**
 * http://usejsdoc.org/
 */
var util = require("./util");

function sum(a, b) {
	console.log("SUM of " + a + " and " + b + " is :" + (a + b));
}

function diff(a, b) {
	util.show("DIFF of " + a + " and " + b + " is :" + (a - b));
	// display("DIFF of " + a + " and " + b + " is :" + (a - b));
	// console.log("DIFF : " + (a - b));
}

function display(value) {
	console.log(value);
}

exports.add = sum;
exports.subtract = diff;
// Inline function
exports.multiply = function multiply(a, b) {
	console.log("MULTIPLY of " + a + " and " + b + " is :" + (a * b));
};
