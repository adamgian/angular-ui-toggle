var app = angular.module("app", [
	'uiToggle'
]);

app.controller("toggleExampleCtrl", function($scope) {
	$scope.data = {
		default: true,
		primary: true,
		info: true,
		warning: true,
		danger: true,
		linked: true,
	};
});
