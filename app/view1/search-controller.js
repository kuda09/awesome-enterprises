(function () {

    "use strict";


    var searchController = function ($scope, dataService) {

        $scope.items = [];
        $scope.showResults = function () {


            if($scope.items.length > 1) return true;

            return false;

        };
        var resultResponse = function (response) {

            $scope.items = response.items;
        }


        $scope.getSearchTerm = function (searchTerm) {

            if(typeof searchTerm === "undefined") return;

            dataService.get(searchTerm).success(resultResponse);
        };


        $scope.results = [10, 20, 30, 40];


    }

    searchController['$inject'] = [ '$scope', 'dataService'];

    angular.module('myApp')
        .controller('searchController', searchController);

})();