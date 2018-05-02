import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Game from '@/views/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }

  ]
})
