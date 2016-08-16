import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './pomowordo.html';
import { name as PomsList } from '../pomsList/pomsList';
import { name as PomWords } from '../pomWords/pomWords';
import { name as Navigation } from '../navigation/navigation';

class Pomowordo {}

const name = 'pomowordo';

//create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter,
	PomsList,
	PomWords,
	Navigation
]).component(name,{
	template,
	controllerAs: name,
	controller: Pomowordo
})
	.config(config);

function config($locationProvider, $urlRouterProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/poms');
}