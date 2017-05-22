'use strict';

angular.module('uiToggle', []).component('uiToggle', {
	bindings: {
		class: '@?',
		disabled: '<?',
		ngChange: '&?',
		ngDisabled: '<',
		ngModel: '='
	},
	controller: ["$scope", "$attrs", function controller($scope, $attrs) {
		var $ctrl = this;
		$ctrl.$attrs = $attrs || {};

		$ctrl.toggleState = function () {
			if ($ctrl.ngChange) $ctrl.ngChange({ value: $ctrl.ngModel });
		};
	}],
	template: '\n\t\t\t<span class="ui-toggle" ng-class="$ctrl.class" ng-click="$ctrl.toggleState()">\n\t\t\t\t<input type="checkbox"\n\t\t\t\t\tng-model="$ctrl.ngModel"\n\t\t\t\t\tng-disabled="$ctrl.ngDisabled || $ctrl.$attrs.disabled !== undefined"\n\t\t\t\t/>\n\t\t\t\t<div class="ui-toggle__track"></div>\n\t\t\t\t<div class="ui-toggle__thumb"></div>\n\t\t\t</span>\n\t\t'
});