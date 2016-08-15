import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomsList.html';
import { Poms } from '../../../api/poms';
import { name as PomAdd } from '../pomAdd/pomAdd';
import { name as PomRemove } from '../pomRemove/pomRemove';


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
	PomAdd,
	PomRemove
]).component(name, {
	template,
	controllerAs: name,
	controller:PomsList
});