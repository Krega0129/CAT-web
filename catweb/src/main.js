import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import Bus from './assets/js/bus'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.js'
import './assets/iconfont/icon.css'
import axios from 'axios'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$bus = Bus;
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// axios.interceptors.request.use(config => {
//     if(sessionStorage.getItem('token')) {
//         config.headers.Authorization = sessionStorage.getItem('token');
//     }
//     return config;
// }, err => {
//     console.log(err);
// })

window.addEventListener('resize', () => {
    document.body.style.width = 100 + 'vw'
    document.body.style.height = 100 + 'vh'
}, false)