import Vue from 'vue'
import VueRouter from 'vue-router'
import inProgress from '../components/inProgress'
// import user from '../store/modules/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/account-recovery',
    name: 'Recovery',
    component: () => import('@/views/AccountRecovery.vue')
  },
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
        path: '/new',
        name: 'newToDoItem',
        component: () => import('@/views/NewToDoItem.vue')
      },
      {
        // path: ':projectId', // optional parameter
        path: '/details/:todoItemId',
        name: 'todoItemDetail',
        component: () => import('@/views/TodoItemDetail.vue')
      },
      {
        path: '/in-progress',
        name: 'inProgress,',
        component: inProgress
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
