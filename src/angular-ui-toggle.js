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
        ngModel: '='
    },

    controller: function($scope, $attrs) {
        var $ctrl = this;

        $ctrl.toggleState = function() {
            if ($ctrl.ngChange) $scope.$eval($ctrl.ngChange);
        };
    },

    template: function($attrs) {
        return `
            <span class="ui-toggle"
                ng-class="$ctrl.class"
                ng-click="$ctrl.toggleState()"
                >
                <input type="checkbox"
                    ${ 'id' in $attrs && 'id="' + $attrs.id + '"' }
                    ${ 'name' in $attrs && 'name="' + $attrs.name + '"' }
                    ng-model="$ctrl.ngModel"
                    ng-disabled="${ 'disabled' in $attrs }"
                    >
                <div class="ui-toggle__track"></div>
                <div class="ui-toggle__thumb"></div>
            </span>`;
    }

};

angular
    .module('uiToggle', [])
    .component('uiToggle', uiToggle);