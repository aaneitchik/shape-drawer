(function () {

	'use strict';

	var LineSegment = require('./LineSegment').LineSegment;

	function Ray(points, outline) {
		var that = LineSegment(points, outline);

		var draw = function (stage) {
			var points = that.getPoints();
			var layer = new Konva.Layer();
			var x1 = points[0].x,
				y1 = points[0].y,
				x2 = points[1].x,
				y2 = points[1].y;
			//Calculate second point coordinates
			var y = (y2 < y1) ? 0 : stage.width();
			var x = x1 + ((y - y1) * (x1 - x2) / (y1 - y2));
			var ray = new Konva.Line({
				points: [x1, y1, x, y],
				stroke: that.getOutlineColor(),
				strokeWidth: 3,
				draggable: true
			});
			layer.add(ray);
			stage.add(layer);
		};

		that.draw = draw;

		return that;
	}

	exports.Ray = Ray;
})();