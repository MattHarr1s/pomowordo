import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './pomWords.html';
import { Index } from '../../../api/poms/index';

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
				words: this.pom.words,
				public: this.pom.public
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
		template: '<pom-words></pom-words>',
		resolve: {
			currentUser($q){
				if (Meteor.userId() === null){
					return $q.reject('AUTH_REQUIRED');
				} else {
					return $q.resolve();
				}
			}
		}
	});
}