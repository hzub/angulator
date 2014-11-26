angular.module('kolegator').controller("menuController", function($scope, kolegaService, $rootScope) {
	$scope.liczbaKolegow = kolegaService.getKoledzy().length;

	$rootScope.$on('koledzyUpdated', function() {
		$scope.liczbaKolegow = kolegaService.getKoledzy().length;
	});
});