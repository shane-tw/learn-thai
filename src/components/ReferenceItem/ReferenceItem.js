export default {
	name: 'ReferenceItem',
	props: {
		item: Object,
		index: Number,
		type: String
	},
	methods: {
		onClickItem () {
			const url = `/sounds/${this.type}s/${this.index + 1}.mp3`
			this.$store.commit('playAudio', url)
		}
	}
}
