// User Model

import { Model } from '@vuex-orm/core'

export default class Deckable extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'deckables'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			deck_id: this.attr(''),
			deckable_id: this.attr(''),
			deckable_type: this.attr(''),
		}
	}
}
