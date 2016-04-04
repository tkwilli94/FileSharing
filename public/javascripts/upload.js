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
    console.dir(file);
    console.log("hello world");
    var fd = new FormData();
    fd.append('file', file);
    $http.post('/createItem', fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
    }).success(function(e){
        console.log(e);
    }).error(function(e){
        console.log(e);
    });
  }

}])
