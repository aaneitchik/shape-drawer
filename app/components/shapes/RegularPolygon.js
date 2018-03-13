(function () {

	'use strict';

	var Polygon = require('./Polygon').Polygon;

	function RegularPolygon(points, outline, fill, verticesNumber) {
		var that = Polygon(points, outline, fill);
		var vertexNumber = verticesNumber;

		var draw = function (stage) {
			var points = that.getPoints();
			var layer = new Konva.Layer();
			var calcRadius = function (first, second) {
				var a = Math.abs(first.x - second.x);
				var b = Math.abs(first.y - second.y);
				return Math.sqrt(a*a + b*b);
			};
			var polygon = new Konva.RegularPolygon({
				x: points[0].x,
				y: points[0].y,
				sides: vertexNumber,
				radius: calcRadius(points[0], points[1]),
				fill: that.getFillColor(),
				stroke: that.getOutlineColor(),
				strokeWidth: 3,
				draggable: true
			});
			layer.add(polygon);
			stage.add(layer);
		};

		var getVertexNumber = function () {
			return vertexNumber;
		};

		var setVertexNumber  = function (verticesNumber) {
			vertexNumber = verticesNumber;
		};

		that.draw = draw;
		that.getVertexNumber = getVertexNumber;
		that.setVertexNumber = setVertexNumber;

		return that;
	}

	exports.RegularPolygon = RegularPolygon;
})();