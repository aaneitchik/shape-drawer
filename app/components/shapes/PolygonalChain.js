(function () {

	'use strict';

	var Shape = require('./Shape').Shape;

	function PolygonalChain(points, outline) {
		var that = Shape(points, outline);

		var draw = function (stage) {
			var layer = new Konva.Layer();
			var chain = new Konva.Line({
				points: that.transformCoordinates(that.getPoints()),
				stroke: that.getOutlineColor(),
				strokeWidth: 3,
				closed: false,
				draggable: true
			});
			layer.add(chain);
			stage.add(layer);
		};

		that.draw = draw;

		return that;
	}

	exports.PolygonalChain = PolygonalChain;
})();