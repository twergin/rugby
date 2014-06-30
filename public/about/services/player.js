angular.module('rugby')
  .factory('Player', ['$resource', function($resource) {
    return $resource('/about/players/:_id');
}]);