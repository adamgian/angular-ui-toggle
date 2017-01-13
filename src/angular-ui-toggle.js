/*
* Toggle switch directive.
*
*
*/

angular
    .module('uiToggle', [])
    .directive('uiToggle', function() {

        return {

            replace: true,
            restrict: 'AE',

            template: function(element, attrs) {
                return `
                    <span class="ui-toggle ${ attrs.class ? attrs.class : '' }"
                        ${ attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()" ' : '" ') : ' ' }
                        ng-class="{ checked: ${ attrs.ngModel }, disabled: ${ attrs.disabled } }"
                        >
                        <input type="checkbox"
                            ${ attrs.id ? ' id="' + attrs.id + '"' : ' ' }
                            ${ attrs.name ? ' name="' + attrs.name + '"' : ' ' }
                            ${ attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : ' ' }
                            >
                    </span>`;
            }

        };

    });