// User Model

import { Model } from '@vuex-orm/core'

import Deck from '@Deck'
import Deckable from '@Deckable'

export default class Armour extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'armour'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			defense: this.attr(''),
			effect: this.attr(''),
			flavour_text: this.attr(''),
			armour_type_id: this.attr(''),
			decks: this.morphToMany(Deck, Deckable, 'deck_id', 'deckable_id', 'deckable_type'),
		}
	}
}
