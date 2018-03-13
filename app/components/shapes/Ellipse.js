(function () {

	'use strict';

	var WithArea = require('./WithArea').WithArea;

	function Ellipse(points, outline, fill) {
		var that = WithArea(points, outline, fill);

		var draw = function (stage, radiusX, radiusY) {
			var points = that.getPoints();
			var layer = new Konva.Layer();
			//If it's the Ellipse we're drawing
			var x = radiusX ? points[0].x : (points[1].x + points[0].x) / 2;
			var y = radiusY ? points[0].y : (points[1].y + points[0].y) / 2;

			var radX = radiusX || Math.abs(points[1].x - points[0].x) / 2;
			var radY = radiusY || Math.abs(points[1].y - points[0].y) / 2;

			var ellipse = new Konva.Ellipse({
				x: x,
				y: y,
				radius: {
					x: radX,
					y: radY
				},
				stroke: that.getOutlineColor(),
				fill: that.getFillColor(),
				draggable: true
			});
			layer.add(ellipse);
			stage.add(layer);
		};

		that.draw = draw;

		return that;
	}

	exports.Ellipse = Ellipse;
})();