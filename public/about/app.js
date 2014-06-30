angular.module('rugby', ['ngResource', 'ngMessages', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'TeamCtrl'
      })
      .when('/players/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('about/add', {
        templateUrl: 'ad/',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);