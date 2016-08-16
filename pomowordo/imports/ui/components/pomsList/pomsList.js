import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

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
	uiRouter,
	PomAdd,
	PomRemove
]).component(name, {
	template,
	controllerAs: name,
	controller:PomsList
})
	.config(config);

function config($stateProvider){
	'ngInject';
	$stateProvider
		.state('poms', {
			url:'/poms',
			template: '<poms-list></poms-list>'
		});
}