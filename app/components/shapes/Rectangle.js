(function () {

	'use strict';

	var Polygon = require('./Polygon').Polygon;

	function Rectangle(points, outline, fill) {
		var that = Polygon(points, outline, fill);

		var draw = function (stage) {
			var points = that.getPoints();
			var layer = new Konva.Layer();
			//Calculating left corner coordinates depending on point's positions
			var x = (points[0].x > points[1].x) ? points[1].x : points[0].x;
			var y = (points[0].y > points[1].y) ? points[1].y : points[0].y;
			var rect = new Konva.Rect({
				x: x,
				y: y,
				width: Math.abs(points[0].x - points[1].x),
				height: Math.abs(points[0].y - points[1].y),
				stroke: that.getOutlineColor(),
				strokeWidth: 3,
				fill: that.getFillColor(),
				draggable: true
			});

			layer.add(rect);
			stage.add(layer);
		};

		that.draw = draw;

		return that;
	}

	exports.Rectangle = Rectangle;
})();