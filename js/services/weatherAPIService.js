angular.module("weatherApp").factory("weatherAPI", function ($http, config) {
	var _getDataByGeo = function (latitude, longitude) {
		return $http.get(config.apiUrl + "weather?lat="+latitude+"&lon="+longitude+"&APPID="+config.apiKey);
	};

	return {
		getDataByGeo: _getDataByGeo
	};
});
