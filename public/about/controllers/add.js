angular.module('rugby')
  .controller('AddCtrl', ['$scope', 'Player', function($scope, Player) {
    $scope.addPlayer = function() {
      
      Player.save({ playerName: $scope.playerName, playerPosition: $scope.playerPosition, playerMajor: $scope.playerMajor, playerTown: $scope.playerTown, 
        playerPicture: $scope.playerPicture},
        function() {
          $scope.playerName = '';
          $scope.playerPosition = '';
          $scope.playerMajor = '';
          $scope.playerTown = '';
          $scope.playerPicture = '';
          $scope.addForm.$setPristine();
         
        },
        function(response) {
          $scope.playerName = '';
          $scope.playerPosition = '';
          $scope.playerMajor = '';
          $scope.playerTown = '';
          $scope.playerPicture = '';
          $scope.addForm.$setPristine();
         
        });
    };
  }]);