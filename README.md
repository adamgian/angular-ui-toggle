Angular-UI-Toggle
=================
An Apple iOS inspired toggle switch input control for [Angular 1](https://angularjs.org) applications. This angular directive is extremely lightweight, not requiring a ton of dependencies (only Angular). Options to easily adjust the styling are provided via Bootstrap-like classes.

![iOS 7/8 Toggle switch](https://cloud.githubusercontent.com/assets/8142632/21925053/6f450396-d9c7-11e6-850a-73ca3b50bc42.gif)

*A recreation of the toggle switch in iOS 7/8. Source: [angular-ui-toggle screenshot](https://dribbble.com/shots/1109255--GIF-iOS-7-switch-3)*


Installation
------------
1. Grab the NPM

```shell
npm install --save @momsfriendlydevco/angular-ui-toggle
```


2. Install the required script + CSS somewhere in your build chain or include it in a HTML header:

```html
<script src="/libs/angular-ui-toggle/dist/angular-ui-toggle.min.js"/>
<link href="/libs/angular-ui-toggle/dist/angular-ui-toggle.min.css" rel="stylesheet" type="text/css"/>
```

3. Include the module in your main `angular.module()` call:

```javascript
var app = angular.module('app', ['uiToggle'])
```


4. Use somewhere in your template:

```html
<ui-toggle ng-model="$ctrl.something"></ui-toggle>
```


A demo is also available. To use this [follow the instructions in the demo directory](./demo/README.md).


API
===

Toggle styles
-------------

```html
<!-- Success (green) -->
<ui-toggle class="toggle-success"></ui-toggle>

<!-- Primary (deep blue) -->
<ui-toggle class="toggle-primary"></ui-toggle>

<!-- Info (light blue) -->
<ui-toggle class="toggle-info"></ui-toggle>

<!-- Warning (orange) -->
<ui-toggle class="toggle-warning"></ui-toggle>

<!-- Danger (red) -->
<ui-toggle class="toggle-danger"></ui-toggle>
```


Toggle sizes
------------

```html
<!-- Extra small -->
<ui-toggle class="toggle-xs"></ui-toggle>

<!-- Small -->
<ui-toggle class="toggle-sm"></ui-toggle>

<!-- Large -->
<ui-toggle class="toggle-lg"></ui-toggle>
```
