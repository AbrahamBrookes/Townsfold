// User Model

import { Model } from '@vuex-orm/core'

import Deckable from '@Deckable'
import Weapon from '@Weapon'
import Armour from '@Armour'
import Item from '@Item'
import Spell from '@Spell'
import Skillbook from '@Skillbook'

export default class Deck extends Model {
	// This is the name used as module name of the Vuex Store.
	static entity = 'decks'

	// List of all fields (schema) of the post model. `this.attr` is used
	// for the generic field type. The argument is the default value.
	static fields () {
		return {
			id: this.attr(null),
			name: this.attr(''),
			description: this.attr(''),
			cards: this.attr([]),
			weapons: this.morphedByMany(
			  	Weapon, Deckable, 'deck_id', 'deckable_id', 'deckable_type'
			),
			armours: this.morphedByMany(
				Armour, Deckable, 'deck_id', 'deckable_id', 'deckable_type'
			),
			items: this.morphedByMany(
				Item, Deckable, 'deck_id', 'deckable_id', 'deckable_type'
			),
			spells: this.morphedByMany(
				Spell, Deckable, 'deck_id', 'deckable_id', 'deckable_type'
			),
			skillbooks: this.morphedByMany(
				Skillbook, Deckable, 'deck_id', 'deckable_id', 'deckable_type'
			),
		}
	}
}
