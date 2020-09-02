import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import projectDetail from '../views/projectDetail'
import Project from '../components/Project'
import inProgress from '../components/inProgress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'allProjects',
        component: Project
      },
      {
        path: '/in-progress',
        name: 'inProgress,',
        component: inProgress
      },
      {
        path: ':projectId',
        name: 'projectDetail',
        component: projectDetail
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
