import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
<<<<<<< HEAD
import '@/assets/css/base.css'
import Bus from './assets/js/bus'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.js'
import './assets/iconfont/icon.css'

Vue.use(ElementUI)
Vue.prototype.$bus = Bus;
=======
import bus from "./assets/js/eventBus.js";
import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.prototype.$bus = bus;
>>>>>>> c2799ceba2cd4ca48173a0ac3c5a439b9839dc3d
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
<<<<<<< HEAD
}).$mount('#app')

window.addEventListener('resize', () => {
  document.body.style.width = 100 + 'vw'
  document.body.style.height = 100 + 'vh'
}, false)
=======
}).$mount('#app')
>>>>>>> c2799ceba2cd4ca48173a0ac3c5a439b9839dc3d
