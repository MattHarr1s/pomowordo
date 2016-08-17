import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './pomAdd.html';
import { Poms } from '../../../api/poms/index';
class PomAdd {
	constructor(){
		this.pom = {};
	}

	submit(){
		this.pom.owner = Meteor.user()._id;
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