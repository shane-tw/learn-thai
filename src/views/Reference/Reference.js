import ReferenceItem from '@/components/ReferenceItem/ReferenceItem.vue'
import referenceTabs from '@/consts/reference-tabs'

export default {
	name: 'Reference',
	components: {
		ReferenceItem
	},
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
	methods: {
		updateRouter (val) {
			this.$router.push(val)
		}
	},
	data: () => ({
		tabs: referenceTabs
	})
}
