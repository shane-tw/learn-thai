import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		referenceTab: ''
	},
	mutations: {
		setReferenceTab (state, tab) {
			state.referenceTab = tab
		}
	}
})
