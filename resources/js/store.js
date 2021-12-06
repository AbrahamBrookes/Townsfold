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
import Household from '@Household'
import Person from '@Person'
import Building from '@Building'
import Job from '@Job'
import BuildingType from '@BuildingType'
import JobType from '@JobType'
import BuildingJob from '@BuildingJob'
import BuildingTypeJobType from '@BuildingTypeJobType'
import Noticeboard from '@Noticeboard'
import SkillType from '@SkillType'
import Skill from '@Skill'

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Town)
database.register(Culture)
database.register(Household)
database.register(Person)
database.register(Building)
database.register(Job)
database.register(BuildingType)
database.register(JobType)
database.register(BuildingJob)
database.register(BuildingTypeJobType)
database.register(Noticeboard)
database.register(SkillType)
database.register(Skill)




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
