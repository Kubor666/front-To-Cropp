import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VeeValidate from 'vee-validate';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';


import Home from './components/home'
import Buy from './components/pages/buy'
import register from './components/pages/register'
import store from './store/index'

Vue.config.productionTip = false

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

Vue.use(VeeValidate);
Vue.use(VueRouter)

Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/buy', component: Buy },
    { path: '/auth/register', component: register}
  ]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
