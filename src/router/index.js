import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Detail',
            name: 'Detail',
            component: Detail,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
        },
    ],
    linkActiveClass: "active-router",
    linkExactActiveClass: "exact-router"
})