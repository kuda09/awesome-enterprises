'use strict';


var myLineBreakFilter = function () {

    return function (input) {

        var tags = input.split(' ');
        var buildList = "";

        angular.forEach(tags, function (tag, value) {

            buildList += '<li>' + tag.trim() + '.</li>';

        })

        return '<ol class="tags">' + buildList + '</ol>';
    }

}

angular.module('myApp.search', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

        $routeProvider.when('/search', {
            templateUrl: 'view1/search.html',
            controller: 'View1Ctrl'
        });

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";


    }])
    .controller('View1Ctrl', [function () {

    }])
    .filter('myLineBreakFilter', myLineBreakFilter)
    .filter("sanitize", ['$sce', function ($sce) {

        return function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    }]);