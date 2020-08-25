import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import bus from "./assets/js/eventBus.js";
import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.prototype.$bus = bus;
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')