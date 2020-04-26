import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		referenceTab: '',
		lastPlayedAudio: null
	},
	mutations: {
		setReferenceTab (state, tab) {
			state.referenceTab = tab
		},
		playAudio (state, url) {
			const isChangingUrl = this.lastPlayedAudio && (
				new URL(this.lastPlayedAudio.src).pathname !== url
			)
			if (isChangingUrl) {
				this.lastPlayedAudio.pause()
				this.lastPlayedAudio.currentTime = 0
			} else {
				this.lastPlayedAudio = new Audio(url)
			}
			if (this.lastPlayedAudio.paused) {
				this.lastPlayedAudio.play()
			}
		}
	}
})
