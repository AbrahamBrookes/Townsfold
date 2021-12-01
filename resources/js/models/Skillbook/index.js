// User Model

import { Model } from '@vuex-orm/core'

import Deck from '@Deck'
import Deckable from '@Deckable'
import Skill from '@Skill'

export default class Skillbook extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'skillbooks'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			flavour_text: this.attr(''),
			skills: this.hasMany(Skill, 'skillbook_id'),
			decks: this.morphToMany(Deck, Deckable, 'deck_id', 'deckable_id', 'deckable_type'),
		}
	}
}
