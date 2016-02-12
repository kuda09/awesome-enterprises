
var flickerDirective = function () {

    return {
        restrict: "E",
        templateUrl: "/view1/flicker-directive-template",
        controller: function($scope) {


        },
        link: function(scope, element, attrs, controller) {

        }
    };


}


angular.module('myApp')
    .directive('dataService', flickerDirective);