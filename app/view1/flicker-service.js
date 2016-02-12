(function () {

    "use strict";

    var dataService = function ($http, $q, FLICKER_URL) {

        var get = function (searchTerm) {

            var headers = {
                'Access-Control-Allow-Origin': 'http://localhost:8080/',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
            }

            return $http.jsonp(FLICKER_URL + searchTerm + "&format=json&jsoncallback=JSON_CALLBACK");

        }

        return {

            get: get
        }

    }

    dataService['$inject'] = ['$http', '$q', 'FLICKER_URL'];

    angular.module('myApp')
        .factory('dataService', dataService);

})();