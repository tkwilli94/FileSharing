var uploadModule = angular.module('upload', []);

uploadModule.controller('uploadCtrl', ['$scope', '$http', 'fileUpload', function ($scope, $http, fileUpload) {
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
		var file = $scope.myFile;
		console.dir(file);
		var uploadUrl = "I'm not using this. Maybe it will be useful later."
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

	$scope.getFiles = function(){
		return $http.get('/searchItems').success(function(data){
			angular.copy(data, $scope.files);
		})
	};
	
	$scope.submitFile = function() {
		//This is where we can take care of actually submitting the information about the file to the database
	}
		
	$scope.getFiles();
}]);

uploadModule.directive('fileModel', ['$parse', function ($parse) {
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

uploadModule.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
		fd.append('file', file);
		
		$http.post('/upload', fd, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		})
		
	   .success(function(){
		 console.log('upload succeeded');
	   })
	
	   .error(function(){ 
		 console.log('upload failed');
	   });
		
		
		
		/*
        for(var key in data){
          fd.append(key, data[key]);
        }
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })*/
    }
}]);
