'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.search',
  'myApp.view2',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {


  $routeProvider.otherwise({redirectTo: '/search'});


}])
    .constant("FLICKER_URL", "http://www.flickr.com/services/feeds/photos_public.gne?tags=");
