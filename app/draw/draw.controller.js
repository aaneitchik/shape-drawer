(function () {

	'use strict';

	angular
		.module('shapeDrawer')
		.controller('DrawController', DrawController);

	/*@ngInject*/
	function DrawController($scope, shapeMenu, Stage) {
		var vm = this;
		vm.fillColor = '#9ccfea';
		vm.outlineColor = '#9ccfea';
		vm.vertexNumber = 3;

		//Links to popover templates
		vm.fillPopover = 'draw/popovers/fillPopover.html';
		vm.outlinePopover = 'draw/popovers/outlinePopover.html';

		//functions to select tab
		vm.shapeMenu = shapeMenu.shapes;
		vm.selectedShape = {
			name: ''
		};
		vm.selectShape = selectShape;
		vm.clearStage = clearStage;

		shapeMenu.drawShape();

		$scope.$watch('draw.fillColor', function () {
			shapeMenu.fillColor = vm.fillColor;
		});

		$scope.$watch('draw.outlineColor', function () {
			shapeMenu.outlineColor = vm.outlineColor;
		});

		$scope.$watch('draw.vertexNumber', function () {
			shapeMenu.vertexNumber = vm.vertexNumber;
		});

		function selectShape(shape) {
			if (shape.name !== vm.selectedShape.name) {
				vm.selectedShape.active = !vm.selectedShape.active;
				vm.selectedShape = shape;
				Stage.setShape(shape);
			}
			vm.selectedShape.active = !vm.selectedShape.active;
			Stage.clearPoints();
		}

		function clearStage() {
			Stage.clear();
		}

	}

})();