import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bulma from 'bulma'

Vue.use(Router)
Vue.use(Bulma)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
