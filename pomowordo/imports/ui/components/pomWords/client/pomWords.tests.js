import { name as PomWords } from '../pomWords';
import { Poms } from '../../../../api/poms/index';
import 'angular-mocks';

describe('PomWords', () => {
	beforeEach(() => {
	window.module(PomWords);
});

describe('controller', () => {
	let controller;
const pom = {
	_id: 'pomId',
	name: 'Foo',
	genre: 'Birthday of Foo',
	words: 500,
	public: true
};

beforeEach(() => {
	inject(($rootScope, $componentController) => {
	controller = $componentController(PomWords, {
		$scope: $rootScope.$new(true)
	});
});
});

describe('save()', () => {
	beforeEach(() => {
	spyOn(Poms, 'update');
	controller.pom = pom;
	controller.save();
});

it('should update a proper pom', () => {
	expect(Poms.update.calls.mostRecent().args[0]).toEqual({
	_id: pom._id
});
});

it('should update with proper modifier', () => {
	expect(Poms.update.calls.mostRecent().args[1]).toEqual({
	$set: {
		name: pom.name,
		genre: pom.genre,
		words :pom.words,
		public: pom.public
	}
});
});
});
});
});