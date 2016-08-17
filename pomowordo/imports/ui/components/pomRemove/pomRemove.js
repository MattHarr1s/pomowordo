import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomRemove.html';
import { Index } from '../../../api/poms/index';

class PomRemove{
	remove(){
		if (this.pom){
			Poms.remove(this.pom._id);
		}
	}
}

const name = 'pomRemove';

//create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	bindings:{
		pom: '<'
	},
	controllerAs:name,
	controller: PomRemove
});