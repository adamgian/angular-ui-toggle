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
                var html =  '<span ';
                    html +=     'class="ui-toggle ' + (attrs.class ? attrs.class : '') + '"';
                    html +=     attrs.ngModel
                                    ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()"' : '"')
                                    : '';
                    html +=     'ng-class="{ checked:' + attrs.ngModel + ', disabled:' + attrs.disabled + '}"';
                    html +=     '>';
                    html +=     '<input type="checkbox" ';
                    html +=         attrs.id ? 'id="' + attrs.id + '"' : '';
                    html +=         attrs.name ? 'name="' + attrs.name + '"' : '';
                    html +=         attrs.ngModel ? 'ng-model="' + attrs.ngModel + '"' : '';
                    html +=         'style="display:none"';
                    html +=         '>';
                    html += '</span>';
                return html;
            }

        };

    });