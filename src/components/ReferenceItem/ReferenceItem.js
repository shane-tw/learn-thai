export default {
	name: 'ReferenceItem',
	props: {
		item: Object,
		index: Number,
		type: String
	},
	methods: {
		onClickItem: function () {
			const audio = new Audio(`/sounds/${this.type}s/${this.index + 1}.mp3`)
			audio.play()
		}
	}
}
