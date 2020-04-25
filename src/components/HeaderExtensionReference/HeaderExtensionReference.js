import referenceTabs from '@/consts/reference-tabs'

export default {
	name: 'HeaderExtensionReference',
	computed: {
		referenceTab: {
			set (tab) {
				this.$store.commit('setReferenceTab', tab)
			},
			get () {
				return this.$store.state.referenceTab
			}
		}
	},
	data: () => ({
		tabs: referenceTabs
	})
}
