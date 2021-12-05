// Noticeboard Model

import { Model } from '@vuex-orm/core'

import Town from '@Town'
import Job from '@Job'

export default class Noticeboard extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'noticeboard'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			town_id: this.attr(''),
			town: this.belongsTo(Town, 'town_id'),
			jobs: this.hasMany(Job, 'noticeboard_id'),
		}
	}

	static apiConfig = {
		baseURL: '/api/noticeboard',
	}
}
