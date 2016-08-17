import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './pomsSort.html';

class PomsSort {
	constructor() {
		this.changed();
	}

	changed() {
		this.onChange({
			sort: {
				[this.property]: parseInt(this.order)
			}
		});
	}
}

const name = 'pomsSort';

// create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	bindings: {
		onChange: '&',
		property: '@',
		order: '@'
	},
	controllerAs: name,
	controller: PomsSort
});