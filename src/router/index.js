import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import projectDetail from '../views/projectDetail'
import Project from '../components/Project'
import inProgress from '../components/inProgress'
import AccountRecovery from '../views/AccountRecovery'
// import user from '../store/modules/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/account-recovery',
    name: 'Recovery',
    component: AccountRecovery
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // protect home from navigation without login
    beforeEnter (to, from, next) {
      // console.log('token', user.state.idToken)
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/')
      }
    },
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
        // path: ':projectId', // optional parameter
        path: '/details',
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
