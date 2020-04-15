import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/reference',
		name: 'Reference Charts',
		// route level code-splitting
		// this generates a separate chunk (reference.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "reference" */ '../views/Reference/Reference.vue'),
		meta: { title: 'Reference' },
		children: [
			{
				path: '',
				redirect: 'consonants'
			},
			{
				path: 'consonants',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Consonants/Consonants.vue'),
				meta: { title: 'Reference' }
			},
			{
				path: 'vowels',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Vowels/Vowels.vue'),
				meta: { title: 'Reference' }
			},
			{
				path: 'tones',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Tones/Tones.vue'),
				meta: { title: 'Reference' }
			},
			{
				path: 'numbers',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Numbers/Numbers.vue'),
				meta: { title: 'Reference' }
			}
		]
	}
]

const router = new VueRouter({
	// mode: 'history', // uncommented for now, GitHub pages doesn't like it
	base: process.env.BASE_URL,
	routes
})

export default router
