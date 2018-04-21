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
      ngChange: '&?',
      ngDisabled: '<',
    },
    require: {
      ngModel: 'ngModel'
    },
    controller: function($scope, $attrs) {

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

    },
    template: `
    <span class="ui-toggle" ng-class="$ctrl.class" ng-click="$ctrl.toggleState()">
    <input type="checkbox"
    ng-model="$ctrl.ngModel"
    ng-disabled="$ctrl.ngDisabled"
    />
    <div class="ui-toggle__track"></div>
    <div class="ui-toggle__thumb"></div>
    </span>
    `,
  });
