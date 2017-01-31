angular.module("weatherApp").controller("weatherCtrl", function ($scope, weatherAPI) {

	$scope.previsao;
	$scope.data = [];
	navigator.geolocation.getCurrentPosition(function(position) {
		weatherAPI.getDataByGeo(position.coords.latitude, position.coords.longitude).then(function (data) {
			$scope.previsao = data.data;
			$scope.clima = data.data.weather[0];
		});
	});
});
