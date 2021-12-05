// Town Model

import { Model } from '@vuex-orm/core'

import Culture from '@Culture'
import Household from '@Household'
import Building from '@Building'
import Job from '@Job'
import Noticeboard from '@Noticeboard'

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
			households: this.hasMany(Household, 'town_id'),
			buildings: this.hasMany(Building, 'town_id'),
			noticeboard: this.hasOne(Noticeboard, 'town_id'),
			jobs: this.hasManyThrough(Job, Noticeboard, 'town_id', 'noticeboard_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/town',
	}
}
