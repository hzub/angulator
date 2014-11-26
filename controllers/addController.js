angular.module('kolegator').controller("addController", function($scope, kolegaService, $rootScope) {
	$scope.dodaj = function() {
		var nowyKolega = {
			imie: $scope.imie,
			nazwisko: $scope.nazwisko,
			wiek: $scope.wiek,
			poziomKolezenskoski: $scope.poziomKolezenskosci,
			kolorMajtek: $scope.kolorMajtek
		};
		console.log("dodaj() sie wywolal");
		kolegaService.addKolega(nowyKolega);
		window.location = "/#/";

		$rootScope.$emit('koledzyUpdated');
	};
});
