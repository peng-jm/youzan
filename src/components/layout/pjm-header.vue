<template>
  <div class="header">
	<el-container >
		<el-header>
		<h1><a href="#" v-text="userinfo.username"></a></h1>
		<div class="tag-group">
			<el-tag
			v-for="item in items"
			:key="item.label"
			:type="item.type"
			effect="plain"
			size="mini"
			>
			<span v-text="item.label"></span>
			</el-tag>
		</div>
		<div class="header-right">
		<i class="el-icon-s-custom"></i><span>13421836750</span> <i class="el-icon-arrow-right"></i>
		</div>
		</el-header>
	</el-container>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data() {
      return {
        items: [
          { type: '', label: '试用期' },
          { type: 'info', label: 'SVIP' },
          { type: 'info', label: '有赞担保' },
        ]
      }
    },
    computed:{
      ...mapState('user',['userinfo'])
    }
}
</script>

<style lang="scss" scoped>
a{
	text-decoration:none;
	cursor:pointer;
}

.tag-group{
 float: left;
 span{
	margin: 0 3px
 }

}
.header-right{
  float: right;
  cursor:pointer;
  span{
    margin:0 5px;
  }
}
.el-header {
    background-color:white;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    h1{
      font-size: 20px;
      float: left;
	margin: 0;
      a{
        color: #000;
      }
     }
  }

</style>