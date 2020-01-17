<template lang="html">
  <div class="pjm-aside">
	<div class="img-box">
      <img src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg">
    </div>
	<div v-for="(item,idx) in navs" :key="idx" class="navs">
		<router-link :to="item.path" tag="div">
			<div class="nav">
				<i :class="item.icon"></i>
				<span v-text="item.text"></span>
			</div>
		</router-link>
	</div>
  </div>
</template>

<script>
export default {
	data:function(){
		return {
			navs:[
				{path:"/",text:"概况",icon:"el-icon-s-home"},
				{path:"/shop",text:"店铺",icon:"el-icon-s-shop"},
				{path:"/good",text:"商品",icon:"el-icon-s-goods"},
				{path:"/order",text:"订单",icon:"el-icon-s-order"},
				{path:"/user",text:"客户",icon:"el-icon-user"},
				{path:"/data",text:"数据",icon:"el-icon-s-data"},
				{path:"/building",text:"资产",icon:"el-icon-office-building"},
				{path:"/menu",text:"应用",icon:"el-icon-menu"},
				{path:"/setting",text:"设置",icon:"el-icon-setting"},
			]
		}
	}
}
</script>

<style lang="scss">
.pjm-aside{
	background: rgb(68,68, 68);
	height: 100%;
	box-sizing: border-box;
	padding-top: 15px;
	.img-box{
	cursor: pointer;
margin:0 auto;
	margin-bottom: 12px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 45px;
        height: 45px;
      }
	}
	.navs{
		color: rgb(200,201,204);
		height: 40px;
		box-sizing: border-box;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.router-link-exact-active{
		color: #000;
		background: white;
	}
}
</style>