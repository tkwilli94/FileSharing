angular.module('signUp', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope, $http) {
 
  $scope.user = {
  	user: $scope.username,
  	password: $scope.password,
  	confirm: $scope.confirm
  }

  $scope.register = function(){
  	if($scope.password != $scope.confirm){
  		alert("Passwords don't match");
  		return;
  	}
  	$http.get('/getUser')
  }

}