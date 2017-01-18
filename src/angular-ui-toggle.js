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
            $ctrl.ngModel = !$ctrl.ngModel;
            if ($ctrl.ngChange) $scope.$eval($ctrl.ngChange);
        };
    },

    template: function($attrs) {
        return `
            <span class="ui-toggle"
                ng-class="[$ctrl.class, { 'is-active': $ctrl.ngModel }]"
                ng-click="$ctrl.toggleState()"
                >
                <input type="checkbox"
                    ${ 'id' in $attrs && 'id="' + $attrs.id + '"' }
                    ${ 'name' in $attrs && 'name="' + $attrs.name + '"' }
                    >
            </span>`;
    }

};

angular
    .module('uiToggle', [])
    .component('uiToggle', uiToggle);