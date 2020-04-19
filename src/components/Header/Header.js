export default {
	name: 'Header',
	data: () => ({
		drawer: null,
		items: [
			{ title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
			{ title: 'Reference', icon: 'mdi-image', to: '/reference' },
			{ title: 'About', icon: 'mdi-help-box', to: '/about' }
		]
	})
}
