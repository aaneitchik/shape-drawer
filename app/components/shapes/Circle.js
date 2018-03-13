(function () {

	'use strict';

	var Ellipse = require('./Ellipse').Ellipse;

	function Circle(points, outline, fill) {
		var ellipse = Ellipse(points, outline, fill);
		var that = Ellipse(points, outline, fill);
		var pointArray = that.getPoints();

		var draw = function (stage) {
			var calcRadius = function(first, second) {
				var a = Math.abs(first.x - second.x);
				var b = Math.abs(first.y - second.y);
				return Math.sqrt(a*a + b*b);
			};
			var radius = calcRadius(pointArray[0], pointArray[1]);
			ellipse.draw(stage, radius, radius);
		};

		that.draw = draw;

		return that;
	}

	exports.Circle = Circle;
})();