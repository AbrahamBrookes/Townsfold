// Family Model

import { Model } from '@vuex-orm/core'

import Town from '@Town'
import Person from '@Person'

export default class Family extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'family'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			surname: this.attr(''),
			town_id: this.attr(''),
			town: this.belongsTo(Town, 'town_id'),
			members: this.hasMany(Person, 'family_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/family',
	}
}
