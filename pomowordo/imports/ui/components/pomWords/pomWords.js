import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './pomWords.html';
import { Poms } from '../../../api/poms';

class PomWords {
	constructor($stateParams, $scope, $reactive){
		'ngInject';

		$reactive(this).attach($scope);

		this.pomId = $stateParams.pomId;

		this.helpers({
			pom(){
				return Poms.findOne({
					_id: $stateParams.pomId
				});
			}
		});
	}

	save(){
		Poms.update({
			_id: this.pom._id
		},{
			$set:{
				name: this.pom.name,
				genre: this.pom.genre,
				words: this.pom.words
			}
		},(error) => {
			if (error){
				console.log('Oops, unable to update the pom...');
			} else {
				console.log('Done');
			}
		});
	}
}

const name = 'pomWords';

//create a module
export default angular.module(name,[
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: PomWords
})
	.config(config);

function config($stateProvider){
	'ngInject';

	$stateProvider.state('pomWords', {
		url: '/poms/:pomId',
		template: '<pom-words></pom-words>'
	});
}