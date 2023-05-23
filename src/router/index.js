import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import blog from '../views/blog/index.vue'
import resume from '../views/resume/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/blog',
    component: blog
  },
  {
    path: '/resume',
    component: resume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
