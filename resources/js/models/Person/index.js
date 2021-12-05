// Person Model

import { Model } from '@vuex-orm/core'

import Family from '@Family'

export default class Person extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'person'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			family_id: this.attr(''),
			family: this.belongsTo(Family, 'family_id'),
			spouse_id: this.attr(''),
			spouse: this.belongsTo(Person, 'spouse_id'),
			mother_id: this.attr(''),
			mother: this.belongsTo(Person, 'mother_id'),
			father_id: this.attr(''),
			father: this.belongsTo(Person, 'father_id'),
			gender: this.attr(''),
			age: this.attr(''),
		}
	}

	static apiConfig = {
		baseURL: '/api/person',
	}
}
