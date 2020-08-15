import Vue from 'vue'
import VueRouter from 'vue-router'
/* import { component } from 'vue/types/umd' */

Vue.use(VueRouter)

const routes = [{
    path: '/loginReg',
    name: 'loginReg',
    component: resolve => (require(["../views/login/loginReg.vue"], resolve)),

}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router