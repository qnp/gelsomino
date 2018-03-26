import Vue from 'vue'
import Router from 'vue-router'
import Bonneteau from '@/components/Bonneteau'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/mon-bonneteau',
    name: 'Bonneteau',
    component: Bonneteau
  }]
})
