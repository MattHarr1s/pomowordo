import { Meteor } from 'meteor/meteor'
import { Poms } from '../imports/api/poms';

Meteor.startup(() =>{
	if (Poms.find().count() === 0) {
		const poms = [{
			'name': 'pom 1',
			'words': 500
		},{
			'name': 'pom 2',
			'words': '550'
		}];

	poms.forEach((pom) => {
			Poms.insert(pom)
	});
	}
});