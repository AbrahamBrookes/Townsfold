import Vue from "vue"

// import Vuex from "vuex"
// Vue.use(Vuex)

// import store from './store'

// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// import router from './router'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import App from './App.vue'

// import Character from '@Character'
// import WeaponType from '@WeaponType'
// import DamageType from '@DamageType'
// import Weapon from '@Weapon'
// import ArmourType from '@ArmourType'
// import Armour from '@Armour'
// import Skillbook from '@Skillbook'
// import Skill from '@Skill'
// import Deck from '@Deck'
// import Item from '@Item'
// import Spell from '@Spell'

// Vue.mixin({
// 	methods: {
// 		clone: obj => JSON.parse(JSON.stringify(obj))
// 	}
// })

new Vue({
	el: '#app',
	// store,
	// router,
	components: {
		App
	},
})
