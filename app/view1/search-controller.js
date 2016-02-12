(function () {

    "use strict";


    var searchController = function ($scope, $rootScope, dataService) {

        $rootScope.items = [];
        $scope.showResults = function () {


            if($rootScope.items.length > 1) return true;

            return false;

        };
        var resultResponse = function (response) {

            $rootScope.items = response.items;
            $rootScope.title  = response.title;
        }


        $scope.getSearchTerm = function (searchTerm) {

            var isNumber = /^\d+$/;

            if(typeof searchTerm === "undefined" || searchTerm.length === 0 || isNumber.test(searchTerm)) return;

            dataService.get(searchTerm).success(resultResponse);
        };


        $scope.results = [5, 10, 15, 20];


    }

    searchController['$inject'] = [ '$scope', '$rootScope', 'dataService'];

    angular.module('myApp')
        .controller('searchController', searchController);

})();