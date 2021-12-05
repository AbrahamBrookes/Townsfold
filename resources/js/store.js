import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import axios from 'axios'
import VuexORMAxios from '@vuex-orm/plugin-axios'
VuexORM.use(VuexORMAxios, {
	axios,
	baseURL: 'https://townsfolk.brookesy.dev/',
	dataKey: 'data'
})

import Town from '@Town'
import Culture from '@Culture'
import Family from '@Family'
import Person from '@Person'

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Town)
database.register(Culture)
database.register(Family)
database.register(Person)



// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
	plugins: [VuexORM.install(database)],
	state: {
		encyclopediaVisible: false,
		currentEncyclopediaPage: {
			component: null,
			bind: {}
		},
	},
	mutations: {
		toggleEncyclopedia(state, data = null) {
			data === null ? state.encyclopediaVisible = !state.encyclopediaVisible : state.encyclopediaVisible = data
		},
		setCurrentEncyclopediaPage(state, data) {
			state.currentEncyclopediaPage = data
			state.encyclopediaVisible = true
		}
	}
})

export default store
