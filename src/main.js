import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/home'
import Buy from './components/pages/buy'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/buy', component: Buy },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
