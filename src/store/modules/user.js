import { fetchLogin } from '@/utils/api.js' 

const userStore = {
	namespaced:true,
	state:{
		userinfo:{
			username:''
		}
	},
	mutations:{
		updateUserinfo(state,payload){
			console.log('state',state)
			console.log('payload',payload)
			state.userinfo = payload
		}
	},
	actions:{
		userLogin(data){
			console.log('data',data)
			return	fetchLogin(data)
		}
	}
} 
export default userStore