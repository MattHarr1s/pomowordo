import { Mongo } from 'meteor/mongo';

export const Poms = new Mongo.Collection('poms');

Poms.allow({
	insert(userId, pom){
		return userId && pom.owner === userId;
	},
	update(userId, pom, fields, modifier){
		return userId && pom.owner === userId;
	},
	remove(userId, pom){
		return userId && pom.owner === userId;
	}
});