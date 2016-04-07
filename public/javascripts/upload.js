angular.module('upload', [])
  .controller('uploadCtrl', [
    '$scope', '$http', 'fileUpload',
    function ($scope, $http, fileUpload) {

  $scope.files = [];
  $scope.file = {};

  $scope.uploadFileData = function(){
    var data = JSON.stringify({"documentname" : $scope.documentName, "filename": $scope.fileName,
	 "location": $scope.location, "copies":$scope.copies, "description":$scope.description});
    console.log(data);
    $http.post('/createItem', data);
    $scope.getFiles();
  }

$scope.uploadFile = function(){
        var uploadUrl = "/updateItem";
        fileUpload.uploadFileToUrl(uploadUrl, );
    };

  $scope.getFiles = function(){
	return $http.get('/searchItems').success(function(data){
        angular.copy(data, $scope.files);
  })};

  $scope.getFiles();
}]).directive('fileModel', ['$parse', function ($parse) {
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
}]).service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(uploadUrl, data){
        var fd = new FormData();
        for(var key in data){
          fd.append(key, data[key]);
        }
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
    }
}]);
