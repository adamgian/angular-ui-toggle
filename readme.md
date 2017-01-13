# angular-ui-toggle

An Apple iOS inspired toggle switch input control for [Angular 1](https://angularjs.org/) applications. This angular directive is extremely lightweight, not requiring a ton of dependencies (only Angular). Options to easily adjust the styling are provided via Bootstrap-like classes.

![iOS 7/8 Toggle switch](https://cloud.githubusercontent.com/assets/8142632/21925053/6f450396-d9c7-11e6-850a-73ca3b50bc42.gif)

*A recreation of the toggle switch in iOS 7/8. Source: [Dribble](https://dribbble.com/shots/1109255--GIF-iOS-7-switch-3)*

## Install

Download package from [Github](https://github.com/adamgian/angular-ui-toggle/archive/master.zip). Package is also available on NPM - `npm install angular-ui-toggle`.

## Usage

```html
<!-- Absolute bare minimum -->
<ui-toggle ng-model="isEnabled"></ui-toggle>

<!-- Other attributes -->
class=""
disabled
id=""
name=""
```

### Toggle switch styles

```html
<!-- Success (green) -->
<ui-toggle class="btn-success"></ui-toggle>

<!-- Primary (deep blue) -->
<ui-toggle class="btn-primary"></ui-toggle>

<!-- Info (light blue) -->
<ui-toggle class="btn-info"></ui-toggle>

<!-- Warning (orange) -->
<ui-toggle class="btn-warning"></ui-toggle>

<!-- Danger (red) -->
<ui-toggle class="btn-danger"></ui-toggle>
```

### Toggle switch sizes

```html
<!-- Extra small -->
<ui-toggle class="toggle-xs"></ui-toggle>

<!-- Small -->
<ui-toggle class="toggle-sm"></ui-toggle>

<!-- Large -->
<ui-toggle class="toggle-lg"></ui-toggle>
```