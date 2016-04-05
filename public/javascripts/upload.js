angular.module('upload', [])
  .controller('uploadCtrl', [
    '$scope', '$http',
    function ($scope, $http) {

  $scope.groupsData = [
    {id : '0', name: 'CS360'},
    {id : '1', name: 'CS340'}
  ];

  $scope.uploadFile = function(){
    var file = $scope.fileToUpload;
    var data = JSON.stringify({"filename": $scope.fileName, "location": $scope.location, "copies":$scope.copies});
    console.log(data);
    $http.post('/createItem', data);
  }

}])
