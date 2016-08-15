import { name as PomAdd } from '../pomAdd';
import { Poms } from '../../../../api/poms';
import 'angular-mocks';

describe('PomAdd', () => {
	beforeEach(() => {
		window.module(PomAdd);
	});

	describe('controller', () => {
		let controller;
		const pom = {
			name: 'Foo Pom',
			genre: 'foo',
			words: 750
		};

		beforeEach(() => {
			inject(($rootScope, $componentController) => {
				controller = $componentController(PomAdd, {
					$scope: $rootScope.$new(true)
				});
			});
		});

		describe('reset()', () => {
			it('should clean up pom object',() => {
				controller.pom = pom;
				controller.reset();

				expect(controller.party).toEqual({});
			});
		});

		describe('submit()', () => {
			beforeEach(() => {
				spyOn(Poms, 'insert');
				spyOn(controller, 'reset').and.callThrough();

				controller.pom = pom;

				controller.submit();
			});

			it('should insert a new pom', () => {
				expect(Poms.insert).toHaveBeenCalledWith(pom);
			});

			it('should call reset()', () => {
				expect(controller.reset).toHaveBeenCalled();
			});
		});
	});
});