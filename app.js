
angular.module('kolegator', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: 'views/list.html',
		controller: 'listController'
	}).when("/add", {
		templateUrl: 'views/add.html',
		controller: 'addController'
	});
}]);

