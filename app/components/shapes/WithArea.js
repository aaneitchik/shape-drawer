(function () {

	'use strict';

	var Shape = require('./Shape').Shape;

	function WithArea(points, outline, fill) {
		var that = Shape(points, outline, fill);

		if(fill) {
			var fillColor = fill;
		}

		var getFillColor = function () {
			return fillColor;
		};

		var setFillColor = function (fill) {
			fillColor = fill;
		};

		that.getFillColor = getFillColor;
		that.setFillColor = setFillColor;

		return that;
	}

	exports.WithArea = WithArea;
})();