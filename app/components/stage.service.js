(function() {

	'use strict';

	angular
		.module('shapeDrawer')
		.factory('Stage', Stage);

	/*@ngInject*/
	function Stage($rootScope) {
		var service = {
			clickedPoints: [],
			shapeToDraw: null,
			clearPoints: clearPoints,
			clear: clear,
			init: init,
			setShape: setShape
		};

		return service;

		function clearPoints() {
			service.clickedPoints = [];
		}

		function clear() {
			service.stage.clear();
		}

		function init() {
			var containerWidth = $('#drawPanel').width();
			var containerHeight = $('#drawPanel').height();
			service.stage = new Konva.Stage({
				container: 'drawPanel',
				width: containerWidth,
				height: containerHeight
			});

			service.stage.on('contentClick', function() {
				service.clickedPoints.push(service.stage.getPointerPosition());
			});

			service.stage.on('contentDblclick', function() {
				$rootScope.$broadcast('STAGE_DBL_CLICKED', service.shapeToDraw);
			});
		}

		function setShape(shape) {
			service.shapeToDraw = shape;
		}
	}

})();