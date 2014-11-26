angular.module('kolegator').controller("listController", function($scope, kolegaService) {
	console.log("ODPALAM KONTROLER");
	$scope.koledzy = kolegaService.getKoledzy();
});