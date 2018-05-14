import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
