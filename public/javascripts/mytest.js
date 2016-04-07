var myApp = angular.module('myApp', []);
 
 myApp.directive('fileModel', ['$parse', function ($parse) {
	return {
	   restrict: 'A',
	   link: function(scope, element, attrs) {
		  console.log("IM IN SOPT ONE");
		  var model = $parse(attrs.fileModel);
		  var modelSetter = model.assign;
		  
		  element.bind('change', function(){
				console.log("IM IN SOPT TWO");
				scope.$apply(function(){
				modelSetter(scope, element[0].files[0]);
			 });
		  });
	   }
	};
 }]);

 myApp.service('fileUpload', ['$http', function ($http) {
	this.uploadFileToUrl = function(file, uploadUrl){
	   console.log("IM IN SOPT FOUR");
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
	}
 }]);

 myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
	$scope.uploadFile = function(){
	    console.log("IM IN SOPT FIVE");
		var file = $scope.myFile;
	   
		console.log('file is ' );
		console.dir(file);
		var uploadUrl = "/fs-test/";
		fileUpload.uploadFileToUrl(file, uploadUrl);
	};
 }]);