import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: () =>
        import(/* webpackChunkName: 'login' */ './views/Login.vue')
    },
    {
      path: '/register',
      component: () =>
        import(/* webpackChunkName: 'register' */ './views/Register.vue')
    },
    {
      path: '/application',
      component: () =>
        import(/* webpackChunkName: 'application' */ './views/Application.vue')
    },
    {
      path: '/search',
      component: () =>
        import(/* webpackChunkName: 'search' */ './views/Search.vue')
    },
    {
      path: '/forget',
      component: () =>
        import(/* webpackChunkName: 'forget' */ './views/Forget.vue')
    },
    {
      path: '/create',
      component: () =>
        import(/* webpackChunkName: 'create' */ './views/Create.vue')
    },
    {
      path: '/revise',
      component: () =>
        import(/* webpackChunkName: 'revise' */ './views/Revise.vue')
    },
    {
      path: '/enter',
      component: () =>
        import(/* webpackChunkName: 'enter' */ './views/Enter.vue')
    },
    {
      path: '/user',
      component: () => import(/* webpackChunkName: 'user' */ './views/User.vue')
    },
    {
      path: '/roommates',
      component: () =>
        import(/* webpackChunkName: 'roommates' */ './views/Roommates.vue')
    },
    {
      path: '/room/:id',
      component: () => import(/* webpackChunkName: 'room' */ './views/Room.vue')
    },
    {
      path: '/init',
      component: () => import(/* webpackChunkName: 'init' */ './views/Init.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
