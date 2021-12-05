import Vue from "vue"

import Vuex from "vuex"
Vue.use(Vuex)

import store from './store'

// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// import router from './router'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import App from './App.vue'


// Vue.mixin({
// 	methods: {
// 		clone: obj => JSON.parse(JSON.stringify(obj))
// 	}
// })

new Vue({
	el: '#app',
	store,
	// router,
	components: {
		App
	},
})
