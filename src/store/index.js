import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		activeTab: ''
	},
	mutations: {
		setActiveTab (state, tab) {
			state.activeTab = tab
		}
	}
})
