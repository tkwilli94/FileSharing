angular.module('upload', [])
  .controller('uploadCtrl', [
    '$scope', '$http',
    function ($scope, $http) {
  $scope.uploadFile = function(){
    console.log("hello world");
  }

}])