/**
 * Angular-UI-Toggle
 * Display a simple UI-Toggle control
 *
 * @param {boolean} [ngModel] Model to bind to
 * @param {string} [class] Optional class style to apply
 * @param {boolean} [disabled=false] Whether to disable the toggle
 * @param {boolean} [ngDisabled=false] Alternate binding for `disabled`
 * @param {function} [ngChange] Function to call as ({value}) on value change
 */
angular
	.module('uiToggle', [])
	.component('uiToggle', {
		bindings: {
			class: '@?',
			disabled: '<?',
			ngDisabled: '<?'
		},
		require: {
			ngModel: 'ngModel'
		},
		controller: function($scope, $attrs) {

			var $ctrl = this;

			$ctrl.$attrs = $attrs || {};
			$ctrl.value = null;

			$scope.$watch(()=> $ctrl.ngModel ? $ctrl.ngModel.$modelValue : undefined, val => {
				if (val !== $ctrl.value) $ctrl.value = val;
			});

			$scope.disabled = function () {
				return $ctrl.ngDisabled !== undefined
					? $ctrl.ngDisabled
					: $ctrl.$attrs.disabled !== undefined;
			};

			$ctrl.toggleState = function () {
				if ($scope.disabled()) return;
				$ctrl.value = !$ctrl.value;
				$ctrl.ngModel.$setViewValue($ctrl.value);
			};

		},
		template: `
			<span class="ui-toggle" ng-class="$ctrl.class" ng-click="$ctrl.toggleState()">
				<span class="ui-toggle-input" ng-class="{checked: $ctrl.value, disabled: disabled()}"></span>
				<div class="ui-toggle__track"></div>
				<div class="ui-toggle__thumb"></div>
			</span>
		`,
	});
