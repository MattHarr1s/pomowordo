import { Meteor } from 'meteor/meteor';
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
			words: 750,
			public: true
		};
		const user = {
			_id: 'userId'
		};

		beforeEach(() => {
			inject(($rootScope, $componentController) => {
				controller = $componentController(PomAdd, {
					$scope: $rootScope.$new(true)
				});
			});

			spyOn(Meteor, 'user').and.returnValue(user);
		});

		describe('reset()', () => {
			it('should clean up pom object',() => {
				controller.pom = pom;
				controller.reset();

				expect(controller.pom).toEqual({});
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
				expect(Poms.insert).toHaveBeenCalledWith({
					name: pom.name,
					genre: pom.genre,
					words: pom.words,
					public: pom.public,
					owner: user._id
				});
			});

			it('should call reset()', () => {
				expect(controller.reset).toHaveBeenCalled();
			});
		});
	});
});