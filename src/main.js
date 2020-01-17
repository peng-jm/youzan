import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router"
import store from "./store"
Vue.use(ElementUI)
Vue.config.productionTip = false


//将所有接口方法放在$http对象身上
import http from "@/utils/api.js"
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
