import Vue from 'vue'
import VueRouter from 'vue-router'
/* import { component } from 'vue/types/umd' */

const Entry = () =>
    import ('@/views/Wuchanghui/Entry')
const Home = () =>
    import ('@/views/Wuchanghui/home/Home')
const Intro = () =>
    import ('@/views/intro/intro/Intro')
const Profile = () =>
    import ('@/views/Wuchanghui/profile/Profile')
const FrontEnd = () =>
    import ('@/views/intro/Front-end/Front-end')
const BackEnd = () =>
    import ('@/views/intro/Back-end/Back-end')

const UserInfo = () =>
    import ('@/views/Wuchanghui/profile/UserInfo')
const Progress = () =>
    import ('@/views/Wuchanghui/profile/Progress')
const MeetingAppoint = () =>
    import ('@/views/Wuchanghui/profile/MeetingAppoint')
const Groups = () =>
    import ('@/views/Wuchanghui/profile/Groups')

Vue.use(VueRouter)

const profChildren = [{
        path: '',
        redirect: 'userInfo'
    },
    {
        path: 'userInfo',
        component: UserInfo,
        meta: {
            title: '考核进度',
            requireAuth: true
        }
    },
    {
        path: 'progress',
        component: Progress,
        meta: {
            title: '考核进度'
        }
    },
    {
        path: 'meetingAppoint',
        component: MeetingAppoint,
        meta: {
            title: '预约面试'
        }
    },
    {
        path: 'groups',
        component: Groups,
        meta: {
            title: '我要进群'
        }
    }
]

const routes = [{
        path: '/',
        redirect: '/start'
    },
    {
        path: '/start',
        component: Entry,
        meta: {
            title: 'CAT'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/intro',
        component: Intro,
        meta: {
            title: '工作室介绍'
        }
    },
    {
        path: '/profile',
        component: Profile,
        children: profChildren,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/front-end',
        component: FrontEnd,
        meta: {
            title: '前端'
        }
    },
    {
        path: '/back-end',
        component: BackEnd,
        meta: {
            title: '后台'
        }
    },
    {
        path: '/loginReg',
        name: 'loginReg',
        component: resolve => (require(["../views/login/loginReg.vue"], resolve)),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/backLogin',
        name: 'backLogin',
        component: resolve => (require(["../views/backEndMGT/backLogin/backLogin.vue"], resolve)),
        meta: {
            title: '后台管理登录'
        }
    },
    {
        path: '/app',
        component: resolve => (require(["../views/kai/application-form.vue"], resolve)),
        meta: {
            title: '我要报名'
        }
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
                component: resolve => (require(["../views/backEndMGT/home/home.vue"], resolve)),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'info',
                name: 'info',
                component: resolve => (require(["../views/backEndMGT/info/info.vue"], resolve)),
                meta: {
                    title: '信息管理'
                }
            },
            {
                path: 'setTime',
                name: 'setTime',
                component: resolve => (require(["../views/backEndMGT/setTime/setTime.vue"], resolve)),
                meta: {
                    title: '设置时间'
                }
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
        /* mode: 'history', */
        routes
    })
    
const defaultTitle = 'CAT'; 
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

export default router

//解决路径重复报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}