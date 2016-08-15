import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomsList.html';
import { name as PomAdd } from '../pomAdd/pomAdd';

class PomsList {
	constructor ($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.helpers({
			poms() {
				return Poms.find({});
			}
		});
	}
}

const name ='pomsList';

//create a module
export default angular.module(name, [
	angularMeteor,
	PomAdd
]).component(name, {
	template,
	controllerAs: name,
	controller:PomsList
});