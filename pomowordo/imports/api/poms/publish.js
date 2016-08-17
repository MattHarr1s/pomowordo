import { Meteor } from 'meteor/meteor';

import { Poms } from './collection';

if (Meteor.isServer){
	Meteor.publish('poms', function () {
		const selector = {
			$or: [{
				// the public poms
				$and: [{
					public: true
				}, {
					public: {
						$exists: true
					}
				}]
			}, {
				$and: [{
					owner: this.userId
				}, {
					owner : {
						$exists: true
					}
				}]
			}]
		};
		return Poms.find(selector);
	});
}