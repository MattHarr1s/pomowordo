import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('pomowordo',{
	angularMeteor
} )
	.controller('PomsListCtrl', function($scope, $reactive){
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			poms(){
				return Poms.find({});
			}
		});
	});