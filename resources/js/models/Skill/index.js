// User Model

import { Model } from '@vuex-orm/core'
import Skillbook from '@Skillbook'

export default class Skill extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'skills'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			cost: this.attr(''),
			effect: this.attr(''),
			flavour_text: this.attr(''),
			skillbook: this.belongsTo(Skillbook, 'skillbook_id'),
			skillbook_id: this.attr(''),
		}
	}
}
