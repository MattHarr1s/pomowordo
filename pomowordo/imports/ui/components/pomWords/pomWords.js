import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './pomWords.html';

class PomWords {
	constructor($stateParams){
		'ngInject';

		this.pomId = $stateParams.pomId;
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