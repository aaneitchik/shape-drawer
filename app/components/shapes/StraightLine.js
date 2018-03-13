(function () {

	'use strict';

	var Ray = require('./Ray').Ray;

	function StraightLine(points, outline) {
		var that = Ray(points, outline);

		var draw = function (stage) {
			var points = that.getPoints();
			var layer = new Konva.Layer();
			var x1 = points[0].x,
				y1 = points[0].y,
				x2 = points[1].x,
				y2 = points[1].y;
			//Calculate second point coordinates
			var new_y1 = (y2 < y1) ? stage.width() : 0;
			var new_y2 = (y2 < y1) ? 0 : stage.width();
			var new_x1 = x1 + ((new_y1-y1)*(x1-x2)/(y1-y2));
			var new_x2 = x1 + ((new_y2-y1)*(x1-x2)/(y1-y2));
			var line = new Konva.Line({
				points: [new_x1, new_y1, new_x2, new_y2],
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

	exports.StraightLine = StraightLine;
})();