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
    ngChange: '&?'
  },
  require: {
    ngModel: 'ngModel'
  },
  controller: ["$scope", "$attrs", function controller($scope, $attrs) {

    var $ctrl = this;

    $ctrl.$attrs = $attrs || {};
    $ctrl.value = null;

    $scope.$watch(function () {
      if ($ctrl.ngModel) return $ctrl.ngModel.$modelValue;
    }, function (val) {
      if (val !== $ctrl.value) {
        $ctrl.value = val;
      }
    });

    $scope.disabled = function () {
      return $ctrl.ngDisabled || $ctrl.$attrs.disabled !== undefined;
    };

    $ctrl.toggleState = function () {
      console.log('toggle');
      if ($scope.disabled()) return;
      $ctrl.value = !$ctrl.value;
      $ctrl.ngModel.$setViewValue($ctrl.value);
    };
  }],
  template: '\n    <span class="ui-toggle" ng-class="$ctrl.class" ng-click="$ctrl.toggleState()">\n    <span class="ui-toggle-input" ng-class="{checked: $ctrl.value, disabled: disabled()}"></span>\n    <div class="ui-toggle__track"></div>\n    <div class="ui-toggle__thumb"></div>\n    </span>\n    '
});