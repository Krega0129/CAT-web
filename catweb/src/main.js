import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import '@/assets/css/base.css'
import Bus from './assets/js/bus'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.js'
import './assets/iconfont/icon.css'

Vue.prototype.$bus = Bus;
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

window.addEventListener('resize', () => {
  document.body.style.width = 100 + 'vw'
  document.body.style.height = 100 + 'vh'
}, false)