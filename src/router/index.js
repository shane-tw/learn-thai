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
		children: [
			{
				path: '',
				redirect: 'consonants'
			},
			{
				path: 'consonants',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Consonants/Consonants.vue')
			},
			{
				path: 'vowels',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Vowels/Vowels.vue')
			},
			{
				path: 'tones',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Tones/Tones.vue')
			},
			{
				path: 'numbers',
				component: () => import(/* webpackChunkName: "reference" */ '../views/Numbers/Numbers.vue')
			}
		]
	}
]

const router = new VueRouter({
	// mode: 'history', // uncommented for now, GitHub pages doesn't like it
	base: process.env.BASE_URL,
	routes,
	scrollBehavior () {
		return { x: 0, y: 0 }
	}
})

export default router
