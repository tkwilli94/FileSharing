angular.module('upload', [])
  .controller('uploadCtrl', [
    '$scope', '$http',
    function ($scope, $http) {

  $scope.groupsData = [
    {id : '0', name: 'CS360'},
    {id : '1', name: 'CS340'}
  ];

  $scope.files = [];

  $scope.uploadFile = function(){
    var file = $scope.fileToUpload;
    var data = JSON.stringify({"documentname" : $scope.documentName, "filename": $scope.fileName,
	 "location": $scope.location, "copies":$scope.copies, "description":$scope.description});
    console.log(data);
    $http.post('/createItem', data);
    $scope.getFiles();
  }

  $scope.getFiles = function(){
	return $http.get('/searchItems').success(function(data){
        angular.copy(data, $scope.files);
  })};

  $scope.getFiles();
}])
