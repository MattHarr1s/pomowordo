import { name as PomRemove } from '../pomRemove';
import { Poms } from '../../../../api/poms';
import 'angular-mocks';

describe('PomRemove', () => {
	beforeEach(() =>{
	window.module(PomRemove);
});

describe('controller', () => {
	let controller;
	const pom = {
		_id: 'pomId'
	};

	beforeEach(() => {
		inject(($rootScope, $componentController) =>{
			controller = $componentController(PomRemove, {
				$scope: $rootScope.$new(true)
			}, {
			pom
			});
		});
	});

	describe('remove()', () => {
		beforeEach(() =>{
			spyOn(Poms, 'remove');
			controller.remove();
		});

		it('should remove a pom', () => {
			expect(Poms.remove).toHaveBeenCalledWith(pom._id);
		});
	});
	});
});