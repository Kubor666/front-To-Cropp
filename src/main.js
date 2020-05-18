import Vue from 'vue'
import { router } from './router';
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
import store from './store/index'



Vue.config.productionTip = false

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

Vue.use(VeeValidate);


Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
