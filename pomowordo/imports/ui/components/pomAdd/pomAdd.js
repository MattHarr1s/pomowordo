import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomAdd.html';

class PomAdd {}

const name = 'pomAdd';

//create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs:name,
	controller: PartyAdd
});