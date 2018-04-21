'use strict';

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
angular.module('uiToggle', []).component('uiToggle', {
  bindings: {
    class: '@?',
    disabled: '<?',
    ngChange: '&?',
    ngDisabled: '<'
  },
  require: {
    ngModel: 'ngModel'
  },
  controller: ["$scope", "$attrs", function controller($scope, $attrs) {

    var $ctrl = this;

    $ctrl.$attrs = $attrs || {};
    $ctrl.value = false;

    $scope.$watch(function () {
      return $ctrl.ngModel.$modelValue;
    }, function (val, prev) {
      if (val !== $ctrl.value) {
        $ctrl.value = val;
      }
    });

    $ctrl.toggleState = function () {
      $ctrl.value = !$ctrl.value;
      if ($ctrl.ngChange) $ctrl.ngChange({ value: $ctrl.value });
      $ctrl.ngModel.$setViewValue($ctrl.value);
    };
  }],
  template: '\n    <span class="ui-toggle" ng-class="$ctrl.class" ng-click="$ctrl.toggleState()">\n    <input type="checkbox"\n    ng-model="$ctrl.ngModel"\n    ng-disabled="$ctrl.ngDisabled"\n    />\n    <div class="ui-toggle__track"></div>\n    <div class="ui-toggle__thumb"></div>\n    </span>\n    '
});