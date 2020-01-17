import fetch from "./fetch"

//用于获取商品列表的接口
export function fetchGoodList(params){
	//返回Promise对象
	return fetch({
		method:"GET",
		params:params,
		url:"/youzan/getGoodList"
	})
}

//登录接口
export function fetchLogin(data){
	return fetch({
		method:'POST',
		data:data,
		url:'/youzan/login'
	})
}
export default {
	fetchGoodList,
	fetchLogin
}