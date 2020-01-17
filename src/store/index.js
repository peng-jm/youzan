import Vue from "vue"  //引入vue插件
import Vuex from "vuex"//引入vuex插件
import goods from "./modules/goods"
import user from "./modules/user"
Vue.use(Vuex)//注册路由

const store = new Vuex.Store({
	modules:{
		goods,
		user
	}
})

//抛出store
export default store