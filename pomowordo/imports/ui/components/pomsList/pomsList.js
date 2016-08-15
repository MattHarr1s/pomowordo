import angular from 'angular';
import angularMeteor from 'angular-meteor';

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
	angularMeteor
]).component(name, {
	templateUrl: 'imports/ui/components/${name}/${name}.html',
	controllerAs: name,
	controller:PomsList
});