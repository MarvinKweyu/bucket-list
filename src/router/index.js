import Vue from 'vue'
import VueRouter from 'vue-router'

// import user from '../store/modules/user'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('@/views/Login.vue')
  // },
  { path: '/', redirect: { name: 'todoItems' } }, // redirect to all todo items for now

  {
    path: '/todos',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'todoItems',
        component: () => import('@/views/ListTodoItems.vue')
      },

      {
        path: 'tags',
        name: 'tags',
        component: () => import('@/views/Tags.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
