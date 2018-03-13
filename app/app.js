(function() {

	'use strict';

	angular
		.module('shapeDrawer', [
			'ui.bootstrap',
			'ui.bootstrap.popover',
			'mp.colorPicker'
		])
		.run(run);

	/*@ngInject*/
	function run(Stage) {
		window.onload = Stage.init();
	}
})();