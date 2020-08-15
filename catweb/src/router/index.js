import Vue from 'vue'
import VueRouter from 'vue-router'

const Entry = () => import('@/views/Wuchanghui/Entry')
const Home = () => import('@/views/Wuchanghui/home/Home')
const Intro = () => import('@/views/Intro')
const Profile = () => import('@/views/Profile')
const FrontEnd = () => import('@/views/Front-end')
const BackEnd = () => import('@/views/Back-end')

Vue.use(VueRouter)

  const routes = [
    {
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
  ]

const router = new VueRouter({
  routes
})

export default router

//解决路径重复报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

