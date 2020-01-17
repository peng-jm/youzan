<template>
<div>


<div class="header">
	<img src="//img.yzcdn.cn/public_files/2016/11/29/8fc4cd6f771897cbf9663166a63a5302.png" alt="有赞">
	<span>登录</span>
</div>
<div class="login">
  <div class="login1">
	<div>用户名:
		<el-input
		focus
		placeholder="请输入内容"
		v-model="username"
		>
		</el-input>
	</div>
	<div>密码:
		<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
	</div>
	<div>
		<el-button type="primary" @click="login">登录</el-button>
		<el-button type="primary" >注册</el-button>
	</div>
  </div>
  <div class="img">
	<img src="//b.yzcdn.cn/public_files/1e97c2268d18bd0231fb5b0a512b8d7f.png" alt="">
  </div>
</div>
</div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
	data:function(){
		return {
			username:'',
			password:'',
		}
	},
	methods:{
		// ...mapActions('user',['userLogin']),
		...mapMutations('user',['updateUserinfo']),
		login(){
			console.log(this.password)
			const data = {
				username:this.username,
				password:this.password,
			}
			this.$http.fetchLogin(data).then(res=>{
				this.updateUserinfo(res)
				console.log('res',res)
				localStorage.setItem('token',res.token)
				localStorage.setItem('isLogin',res.role)
				this.$router.replace('/')
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.header{
	border-bottom: 1px solid #e5e5e5;
	position: absolute;
    top: 70px;
    left: 220px;
	width: 850px;
	padding-bottom: 5px;
	img{
		vertical-align: bottom;
	}
	span{
		font-size: 15px;
		display: inline-block;
		height: 18px;
		padding-top: 4px;
		box-sizing: border-box;
		margin-left: 5px;
		color: #666666;
	}
}
.login{
	display: flex;
	.login1{
	width: 400px;
	height: 300px;
	border: 1px solid orange;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	box-sizing: border-box;
	padding: 20px 0;
	margin-top: 150px;
    margin-left: 150px;
}
.img{
	width: 400px;
	height: 300px;
	margin-top: 150px;
    margin-left: 50px;
	img{
		width: 400px;
		height: 300px;
	}
}
}

</style>