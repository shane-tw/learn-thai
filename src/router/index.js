import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/reference'
	},
	{
		path: '/reference',
		// route level code-splitting
		// this generates a separate chunk (reference.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		components: {
			default: () => import(/* webpackChunkName: "reference" */ '../views/Reference/Reference.vue'),
			header_extension: () => import(/* webpackChunkName: "reference" */ '../components/HeaderExtensionReference/HeaderExtensionReference.vue')
		},
		meta: { title: 'Reference', header_extension: true },
		children: [
			{
				path: '',
				redirect: 'consonants'
			},
			{
				path: 'consonants',
				components: {
					default: () => import(/* webpackChunkName: "reference" */ '../views/Consonants/Consonants.vue')
				},
				meta: { title: 'Reference', header_extension: true }
			},
			{
				path: 'vowels',
				components: {
					default: () => import(/* webpackChunkName: "reference" */ '../views/Vowels/Vowels.vue')
				},
				meta: { title: 'Reference', header_extension: true }
			},
			{
				path: 'tones',
				components: {
					default: () => import(/* webpackChunkName: "reference" */ '../views/Tones/Tones.vue')
				},
				meta: { title: 'Reference', header_extension: true }
			},
			{
				path: 'numbers',
				components: {
					default: () => import(/* webpackChunkName: "reference" */ '../views/Numbers/Numbers.vue')
				},
				meta: { title: 'Reference', header_extension: true }
			}
		]
	},
	{
		path: '/games',
		component: () => import('../views/Games/Games.vue'),
		meta: { title: 'Games' }
	},
	{
		path: '/not-found',
		component: () => import('../views/NotFound/NotFound.vue'),
		meta: { title: 'Not Found' }
	},
	{
		path: '*',
		redirect: '/not-found'
	}
]

const router = new VueRouter({
	// mode: 'history', // commented for now, GitHub pages doesn't like it
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		return { x: 0, y: 0 }
	}
})

export default router
