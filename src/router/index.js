import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/formInput1',
    name: 'FormInput1',
    component: () => import('../views/FormInput1.vue')
  },
  {
    path: '/formInput2',
    name: 'FormInput2',
    component: () => import('../views/FormInput2.vue')
  },
  {
    path: '/formInput3',
    name: 'FormInput3',
    component: () => import('../views/FormInput3.vue')
  },
  {
    path: '/formInput4',
    name: 'FormInput4',
    component: () => import('../views/FormInput4.vue')
  },
  {
    path: '/formInput5',
    name: 'FormInput5',
    component: () => import('../views/FormInput5.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
