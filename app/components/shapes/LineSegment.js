(function () {

	'use strict';

	var Shape = require('./Shape').Shape;

	function LineSegment(points, outline) {
		var that = Shape(points, outline);

		var draw = function (stage) {
			var points = that.getPoints();
			var layer = new Konva.Layer();
			var line = new Konva.Line({
				points: [points[0].x, points[0].y, points[1].x, points[1].y],
				stroke: that.getOutlineColor(),
				strokeWidth: 3,
				draggable: true
			});
			layer.add(line);
			stage.add(layer);
		};

		that.draw = draw;

		return that;
	}

	exports.LineSegment = LineSegment;
})();