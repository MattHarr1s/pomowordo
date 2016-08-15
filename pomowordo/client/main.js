import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('pomowordo',{
	angularMeteor
} )
	.controller('PomsListCtrl', function($scope){
		'ngInject';

		$scope.helpers({
			poms(){
				return Poms.find({});
			}
		});
	});