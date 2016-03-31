angular.module('signUp', [])
  .controller('MainCtrl', mainCtrl);

function mainCtrl ($scope, $http) {
 
/*  $scope.user = {
  	user: $scope.username,
  	password: $scope.password,
  	confirm: $scope.confirm
  }*/

  $scope.register = function(){
    console.log("I'm here!");
    console.log("Username: " + $scope.username);
    console.log("Password: " + $scope.password);
    console.log("Confirm: " + $scope.confirm);

    if($scope.username.indexOf('@') === -1) {
      alert("Invalid Email Address");
      return;
    }
    if(!$scope.username.indexOf('.com') === -1) {
      alert("Invalid Email Address");
      return;
    }

    if($scope.password !== $scope.confirm){
      alert("Passwords don't match");
      return;
    }
    else {
      $http.get('/getUser')
    }
  }
}