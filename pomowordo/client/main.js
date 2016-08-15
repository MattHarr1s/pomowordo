import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('pomowordo',[
	angularMeteor
])
	.component('pomsList', {
		templateUrl: 'client/pomsList.html',
		controllerAs: 'pomsList',
		controller($scope, $reactive){
			'ngInject';

			$reactive(this).attach($scope);

			this.helpers({
				poms(){
					return Poms.find({});
				}
			});
		}
	});