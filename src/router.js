import Vue from 'vue'
import VueRouter from 'vue-router'

const shop = ()=>import("./views/shop/shop.vue")
const profile = ()=>import("./views/profile/profile.vue")
const good = ()=>import("./views/good/good.vue")
const publish = ()=>import("./views/good/publishShop.vue")
const login = ()=>import('./views/login/login.vue')

//注册路由
Vue.use(VueRouter)

//创建一个实例
const router = new VueRouter({
	mode:"hash",
	routes:[
		{path:"/shop",component:shop},
		{path:"/good",component:good},
		{path:"/publish",component:publish},
		{path:'/login',components:{login:login}},
		{path:"/",component:profile},
		{ path: '/*', redirect: '/'}
	]
})

//全局路由守卫
// router.beforeEach((to,from,next)=>{
// 	const islogin = localStorage.getItem('isLogin')
// 	if(to.path === '/login'){
// 		next()
// 	}else{
// 		if(islogin == 1){
// 			next()
// 		}else{
// 			next('/login')
// 		}
// 	}
// })
//把router抛出
export default router