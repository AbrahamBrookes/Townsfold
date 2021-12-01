import Vue from "vue"

import Vuex from "vuex"
Vue.use(Vuex)

import store from './store'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import App from './App.vue'

import Character from '@Character'
import WeaponType from '@WeaponType'
import DamageType from '@DamageType'
import Weapon from '@Weapon'
import ArmourType from '@ArmourType'
import Armour from '@Armour'
import Skillbook from '@Skillbook'
import Skill from '@Skill'
import Deck from '@Deck'
import Item from '@Item'
import Spell from '@Spell'

Vue.mixin({
	methods: {
		clone: obj => JSON.parse(JSON.stringify(obj))
	}
})

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
    mounted(){
        // load stuff from the database
        Promise.all([
            WeaponType.api().get('/api/weapon-type'),
            DamageType.api().get('/api/damage-type'),
            Weapon.api().get('/api/weapon'),
            ArmourType.api().get('/api/armour-type'),
            Armour.api().get('/api/armour'),
            Skill.api().get('/api/skill'),
            Skillbook.api().get('/api/skillbook'),
            Character.api().get('/api/character'),
            Deck.api().get('/api/deck'),
            Item.api().get('/api/item'),
            Spell.api().get('/api/spell'),
        ]).then(() => this.$root.$emit('init-data-loaded'))
    }
})
