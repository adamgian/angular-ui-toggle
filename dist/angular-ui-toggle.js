'use strict';

/*
* Toggle switch directive.
*
*
*/

var uiToggle = {

    bindings: {
        class: '@?',
        disabled: '<?',
        id: '@?',
        name: '<?',
        ngChange: '&?',
        ngDisabled: '=?',
        ngModel: '='
    },

    controller: function controller($scope, $attrs) {
        var $ctrl = this;

        $ctrl.toggleState = function () {
            if ($ctrl.ngChange) $scope.$eval($ctrl.ngChange);
        };
    },

    template: function template($attrs) {
        return '\n            <span class="ui-toggle"\n                ng-class="$ctrl.class"\n                ng-click="$ctrl.toggleState()"\n                >\n                <input type="checkbox"\n                    ' + ('id' in $attrs && 'id="' + $attrs.id + '"') + '\n                    ' + ('name' in $attrs && 'name="' + $attrs.name + '"') + '\n                    ng-model="$ctrl.ngModel"\n                    ng-disabled="$ctrl.ngDisabled || ' + ('disabled' in $attrs) + '"\n                    >\n                <div class="ui-toggle__track"></div>\n                <div class="ui-toggle__thumb"></div>\n            </span>';
    }

};

angular.module('uiToggle', []).component('uiToggle', uiToggle);