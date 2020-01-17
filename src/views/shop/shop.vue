<template>
  <div class="shop">
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="店铺主页" name="first"><tabContent1></tabContent1></el-tab-pane>
		<el-tab-pane label="店铺导航" name="second"><tabContent2></tabContent2></el-tab-pane>
		<el-tab-pane label="个人中心" name="third"><tabContent3></tabContent3></el-tab-pane>
	</el-tabs>
  </div>
</template>

<script>
import tabContent1 from "./component/tabContent1"
import tabContent2 from "./component/tabContent2"
import tabContent3 from "./component/tabContent3"

export default {
	data() {
      return {
        activeName: 'first'
      };
    },
	components:{
		tabContent1,
		tabContent2,
		tabContent3
	},
    methods: {
      handleClick(tab) {
        console.log(tab);
      }
    }
}
</script>

<style lang="scss" scoped>
	.shop{
		padding: 20px 15px 0 15px;
		box-sizing: border-box;
	}
</style>