angular.module('signUp', [])
  .controller('mainCtrl', [
    '$scope', '$http',
    function ($scope, $http) {
  $scope.username = "";
  $scope.password = "";
  $scope.confirm = "";
  $scope.user = {
  	name: $scope.username,
  	password: $scope.password
  }

  $scope.register = function(){
    console.log("Trying to register");
  };

}])