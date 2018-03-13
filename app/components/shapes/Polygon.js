(function () {

	'use strict';

	var WithArea = require('./WithArea').WithArea;

	function Polygon(points, outline, fillColor) {
		var that = WithArea(points, outline, fillColor);

		var draw = function (stage) {
			var layer = new Konva.Layer();
			var polygon = new Konva.Line({
				points: that.transformCoordinates(that.getPoints()),
				stroke: that.getOutlineColor(),
				fill: that.getFillColor(),
				closed: true,
				draggable: true
			});
			layer.add(polygon);
			stage.add(layer);
		};

		that.draw = draw;

		return that;
	}

	exports.Polygon = Polygon;
})();