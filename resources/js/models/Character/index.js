// User Model

import { Model } from '@vuex-orm/core'

export default class Character extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'characters'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			backstory: this.attr(''),
			attack: this.number(''),
			defense: this.number(''),
			life: this.number(''),
			mana: this.number(''),
			remaining: this.number(''),
		}
	}
}
