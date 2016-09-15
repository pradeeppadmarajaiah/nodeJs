/**
 * http://usejsdoc.org/
 */
// Class name starts with capital letter.
function Circle(radius, color) {
	// Instance variable
	this.radius = radius;
	this.color = color;

	// private internal variable
	var desc = "test";

	this.info = function() {
		console.log(this.radius);
		console.log(this.color);
		console.log(desc);
	};

	this.calcArea = function() {
		console.log("Area " + (this.radius * this.radius * Math.PI));
	};
}

exports.Circle = Circle;
exports.c = new Circle(23, "Blue");