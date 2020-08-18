import Vue from 'vue'
import VueRouter from 'vue-router'
/* import { component } from 'vue/types/umd' */

const Entry = () =>
    import ('@/views/Wuchanghui/Entry')
const Home = () =>
    import ('@/views/Wuchanghui/home/Home')
const Intro = () =>
    import ('@/views/Intro')
const Profile = () =>
    import ('@/views/Profile')
const FrontEnd = () =>
    import ('@/views/Front-end')
const BackEnd = () =>
    import ('@/views/Back-end')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/start'
    },
    {
        path: '/start',
        component: Entry
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/intro',
        component: Intro
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/front-end',
        component: FrontEnd
    },
    {
        path: '/back-end',
        component: BackEnd
    },
    {
        path: '/loginReg',
        name: 'loginReg',
        component: resolve => (require(["../views/login/loginReg.vue"], resolve)),
    },
    {
        path: '/backEnd',
        name: 'backEnd',
        component: resolve => (require(["../views/backEndMGT/backEndMGT.vue"], resolve)),
        children: [{
                path: '/',
                redirect: 'home'
            },
            {
                path: 'home',
                name: 'home',
                component: resolve => (require(["../views/backEndMGT/home/home.vue"], resolve))
            },
            {
                path: 'info',
                name: 'info',
                component: resolve => (require(["../views/backEndMGT/info/info.vue"], resolve))
            },
            {
                path: 'setTime',
                name: 'setTime',
                component: resolve => (require(["../views/backEndMGT/setTime/setTime.vue"], resolve))
            },
            {
                path: 'detail',
                name: 'detail',
                component: resolve => (require(["../views/backEndMGT/detail/detail.vue"], resolve))
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

//解决路径重复报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}