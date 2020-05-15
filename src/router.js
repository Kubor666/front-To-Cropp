import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            //lazy-loaded
            component: Profile
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./components/pages/BoardAdmin.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import ('./components/pages/BoardUser.vue') 
        }
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login,', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(authRequired && !loggedIn) {
        next('/login');
    }else {
        next();
    }
});