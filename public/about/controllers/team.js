angular.module('rugby')
  .controller('TeamCtrl', ['$scope', 'Player', '$routeParams', function($scope, Player, $routeParams) {

    $scope.positions = ['Prop', 'Hooker', 'Lock', 'Flanker', 'Eight Man', 'Scrum Half', 'Fly half', 'Inside Center', 'Outside Center', 'Wing', 'Fullback'];

    $scope.players = Player.query();

    $scope.filtering = function(position) {
      $scope.filteredPosition = position;
      $scope.sidebarTitle = position;
    };
    

  }]);

