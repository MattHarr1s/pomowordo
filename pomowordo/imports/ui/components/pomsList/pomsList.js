import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import template from './pomsList.html';
import { Poms } from '../../../api/poms/index';
import { name as PomAdd } from '../pomAdd/pomAdd';
import { name as PomRemove } from '../pomRemove/pomRemove';


class PomsList {
	constructor ($scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.perPage = 3;
		this.page = 1;
		this.sort = {
			name: 1
		}

		this.subscribe('poms',()=> [{
			limit: parseInt(this.perPage),
			skip: parseInt((this.getReactively('page')- 1) * this.perPage),
			sort: this.getReactively('sort')}
		]);

		this.helpers({
			poms() {
				return Poms.find({}, {
					sort: this.getReactively('sort')
				});
			}
		});
	}
}

const name ='pomsList';

//create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter,
	utilsPagination,
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