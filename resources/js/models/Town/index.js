// Town Model

import { Model } from '@vuex-orm/core'

import Culture from '@Culture'
import Family from '@Family'

export default class Town extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'town'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			culture_id: this.attr(''),
			culture: this.belongsTo(Culture, 'culture_id'),
			families: this.hasMany(Family, 'town_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/town',
	}
}
