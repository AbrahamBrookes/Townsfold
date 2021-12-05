// Culture Model

import { Model } from '@vuex-orm/core'

import Town from '@Town'

export default class Culture extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'culture'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			nation_name: this.attr(''),
			language: this.attr(''),
			towns: this.hasMany(Town, 'culture_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/culture',
	}
}
