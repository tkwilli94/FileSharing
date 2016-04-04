angular.module('upload', [])
  .controller('uploadCtrl', [
    '$scope', '$http',
    function ($scope, $http) {

  $scope.groupsData = [
    {id : '0', name: 'CS360'},
    {id : '1', name: 'CS340'}
  ];
  
  $scope.uploadFile = function(){
    console.log("hello world");
  }

}])