import referenceTabs from '@/consts/reference-tabs'

export default {
	name: 'HeaderExtensionReference',
	computed: {
		activeTab: {
			set (tab) {
				this.$store.commit('setActiveTab', tab)
			},
			get () {
				return this.$store.state.activeTab
			}
		}
	},
	data: () => ({
		tabs: referenceTabs
	})
}
