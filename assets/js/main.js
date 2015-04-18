angular.module('ngMadLibs', ['ngAnimate'])
	.controller('formController', function($scope){
		$scope.formData = {},
		$scope.gender = {
			pronoun: 'she',
			possessive: 'her'
		};

		$scope.submitForm = function(){
			console.log($scope.data);
			console.log($scope.myForm);
		}
	})



