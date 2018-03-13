(function () {

	'use strict';

	angular
		.module('shapeDrawer')
		.factory('shapeMenu', shapeMenu);

	var constructors = {
		LineSegment: require('./shapes/LineSegment').LineSegment,
		Ray: require('./shapes/Ray').Ray,
		StraightLine: require('./shapes/StraightLine').StraightLine,
		Polygon: require('./shapes/Polygon').Polygon,
		RegularPolygon: require('./shapes/RegularPolygon').RegularPolygon,
		PolygonalChain: require('./shapes/PolygonalChain').PolygonalChain,
		Circle: require('./shapes/Circle').Circle,
		Ellipse: require('./shapes/Ellipse').Ellipse,
		Rectangle: require('./shapes/Rectangle').Rectangle
	};

	/*@ngInject*/
	function shapeMenu($rootScope, Stage) {
		var service = {
			fillColor: '',
			outlineColor: '',
			vertexNumber: 3,
			drawShape: drawShape
		};

		service.shapes = [
			{
				name: 'Straight Line',
				className: 'StraightLine',
				toolbarTemplate: 'draw/toolbarTemplates/straightLine.template.html',
				active: false
			},
			{
				name: 'Ray',
				className: 'Ray',
				toolbarTemplate: 'draw/toolbarTemplates/ray.template.html',
				active: false
			},
			{
				name: 'Line Segment',
				className: 'LineSegment',
				toolbarTemplate: 'draw/toolbarTemplates/lineSegment.template.html',
				active: false
			},
			{
				name: 'Polygonal Line',
				className: 'PolygonalChain',
				toolbarTemplate: 'draw/toolbarTemplates/polygonalChain.template.html',
				active: false
			},
			{
				name: 'Polygon',
				className: 'Polygon',
				toolbarTemplate: 'draw/toolbarTemplates/polygon.template.html',
				active: false
			},
			{
				name: 'Regular Polygon',
				className: 'RegularPolygon',
				toolbarTemplate: 'draw/toolbarTemplates/regularPolygon.template.html',
				active: false
			},
			{
				name: 'Circle',
				className: 'Circle',
				toolbarTemplate: 'draw/toolbarTemplates/circle.template.html',
				active: false
			},
			{
				name: 'Ellipse',
				className: 'Ellipse',
				toolbarTemplate: 'draw/toolbarTemplates/ellipse.template.html',
				active: false
			},
			{
				name: 'Rectangle',
				className: 'Rectangle',
				toolbarTemplate: 'draw/toolbarTemplates/rectangle.template.html',
				active: false
			}
		];

		return service;

		function drawShape() {
			$rootScope.$on('STAGE_DBL_CLICKED', function (event, selectedShape) {
				var shape = constructors[selectedShape.className](Stage.clickedPoints, service.outlineColor, service.fillColor, service.vertexNumber);
				shape.draw(Stage.stage);
				Stage.clearPoints();
			});
		}
	}
})();