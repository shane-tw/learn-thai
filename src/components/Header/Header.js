export default {
	name: 'Header',
	data: () => ({
		drawer: null,
		items: [
			{ title: 'Reference', icon: 'mdi-image', to: '/reference' },
			{ title: 'Games', icon: 'mdi-view-dashboard', to: '/games' },
			{ title: 'About', icon: 'mdi-help-box', to: '/about' }
		]
	})
}
