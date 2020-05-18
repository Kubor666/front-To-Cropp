import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home'
import Register from './components/pages/register'


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
            component: () => import('./components/pages/Profile')
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
        },
        {
            path: '/buy',
            name: 'Buy',
            component: () => import ('./components/pages/buy.vue') 
        }
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login,', '/register', '/home', '/', '/buy'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(authRequired && !loggedIn) {
        next('/login');
    }else {
        next();
    }
});