import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomowordo.html';
import { name as PomsList } from '../pomsList/pomsList';

class Pomowordo {}

const name = 'pomowordo';

//create a module
export default angular.module(name, [
	angularMeteor,
	PomsList
]).component(name,{
	template,
	controllerAs: name,
	controller: Pomowordo
});