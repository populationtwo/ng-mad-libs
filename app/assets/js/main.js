angular.module('ngMadLibs', [])
	.controller('formController', function($scope){
		$scope.formData = {},
		$scope.gender = {
			pronoun: 'she',
			possessive: 'her'
		};
	})



