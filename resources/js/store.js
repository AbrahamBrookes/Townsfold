import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import axios from 'axios'
import VuexORMAxios from '@vuex-orm/plugin-axios'
VuexORM.use(VuexORMAxios, {
	axios,
	baseURL: 'https://cards.brookesy.dev/',
	dataKey: 'data'
})

import Character from '@Character'
import Skill from '@Skill'
import Skillbook from '@Skillbook'
import DamageType from '@DamageType'
import WeaponType from '@WeaponType'
import Weapon from '@Weapon'
import ArmourType from '@ArmourType'
import Armour from '@Armour'
import Deck from '@Deck'
import Deckable from '@Deckable'
import Item from '@Item'
import Spell from '@Spell'

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Character)
database.register(Skill)
database.register(Skillbook)
database.register(DamageType)
database.register(WeaponType)
database.register(Weapon)
database.register(ArmourType)
database.register(Armour)
database.register(Deck)
database.register(Deckable)
database.register(Item)
database.register(Spell)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
	plugins: [VuexORM.install(database)],
	state: {
		total_stat_points: 32
	}
})

export default store
