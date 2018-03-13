(function () {

	'use strict';

	function Shape(pointsArray, outline) {
		var center = null;
		var outlineColor = outline;
		var points = pointsArray;

		var draw = function () {
			throw 'AbstractMethodNotImplementedError';
		};

		var location = function () {
			throw 'AbstractMethodNotImplementedError';
		};

		var getCenter = function () {
			return center;
		};

		var setCenter = function(centerPoint) {
			center = centerPoint;
		};

		var getOutlineColor = function () {
			return outlineColor;
		};

		var setOutlineColor = function (outline) {
			outlineColor = outline;
		};

		var getPoints = function () {
			return points;
		};

		var setPoints = function(pointArray) {
			points = pointArray;
		};

		var transformCoordinates = function (pointArray) {
			return pointArray.reduce(function (prev, curr) {
				prev.push(curr.x, curr.y);
				return prev;
			}, []);
		};

		return {
			draw: draw,
			location: location,
			getCenter: getCenter,
			setCenter: setCenter,
			getOutlineColor: getOutlineColor,
			setOutlineColor: setOutlineColor,
			getPoints: getPoints,
			setPoints: setPoints,
			transformCoordinates: transformCoordinates
		};
	}

	exports.Shape = Shape;
})();