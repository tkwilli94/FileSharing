angular.module('upload', [])
  .controller('uploadCtrl', [
    '$scope', '$http',
    function ($scope, $http) {

  $scope.files = [];

  $scope.uploadFileData = function(){
    var file = $scope.fileToUpload;
    var data = JSON.stringify({"documentname" : $scope.documentName, "filename": $scope.fileName,
	 "location": $scope.location, "copies":$scope.copies, "description":$scope.description});
    console.log(data);
    $http.post('/createItem', data);
    $scope.getFiles();
  }

$scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/updateItem";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

  $scope.getFiles = function(){
	return $http.get('/searchItems').success(function(data){
        angular.copy(data, $scope.files);
  })};



  $scope.getFiles();
}])

upload.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

upload.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
          console.log("success");
        })
        .error(function(){
          console.log("failure");
        });
    }
}]);
