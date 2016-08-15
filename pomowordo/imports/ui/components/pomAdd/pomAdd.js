import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomAdd.html';
import { Poms } from '../../../api/poms';
class PomAdd {
	constructor(){
		this.pom = {};
	}

	submit(){
		Poms.insert(this.pom);
		this.reset();
	}

	reset(){
		this.pom = {};
	}
}

const name = 'pomAdd';

//create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs:name,
	controller: PomAdd
});