<template>
<div class="from">
	<div class="from-son">
		<div style="margin-bottom:20px;box-szing:border-box;margin-left:-45px">
		<!-- 第一行 -->
			<el-row :gutter="24" type="flex" align="middle" justify="center">
				<!-- 第一列 -->
				<el-col :span="2"><div class="grid-content bg-purple">
					<span>商品名称:</span>
				</div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple">
					<el-input v-model="value.name"  placeholder="请输入内容" size="small"></el-input>
				</div></el-col>	
				<!-- 第二列 -->
				<el-col :span="2"><div class="grid-content bg-purple">
					<span>商品分组:</span>
				</div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple">
					<el-select size="small"   placeholder="请选择" v-model="value.group_no">
						<el-option
						v-for="item in goodGroupList"
						:key="item.id"
						:label="item.label"
						:value="item.id" 
						>
						</el-option>
					</el-select>
				</div></el-col>	
				<!-- 第三列 -->
				<el-col :span="2"><div class="grid-content bg-purple">
					<span>商品类型:</span>
				</div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple">
					<el-select size="small"    placeholder="请选择" v-model="value.type_no">
						<el-option
						v-for="item in goodTypeList"
						:key="item.id"
						:label="item.label"
						:value="item.id">						
						</el-option>
					</el-select>
				</div></el-col>						
			</el-row>
		</div>
		<!-- 第二行 -->
		<el-row :gutter="24" type="flex" align="middle" justify="center" >
			<!-- 第一列 -->
			<el-col :span="2" ><div class="grid-content bg-purple">
					<span>销量:</span>
				</div></el-col>
				<el-col :span="2" ><div class="grid-content bg-purple">
					<el-input     placeholder="请输入内容" size="small" v-model="value.sale_min"></el-input>			
				</div></el-col>	
				<span>-</span>
				<el-col :span="2" ><div class="grid-content bg-purple">
					<el-input   placeholder="请输入内容" size="small"  v-model="value.sale_max"></el-input>
			</div></el-col>	
			<!-- 第二列 -->
			<el-col :span="2" ><div class="grid-content bg-purple">
					<span>价格(元):</span>
				</div></el-col>
				<el-col :span="2" ><div class="grid-content bg-purple">
					<el-input   placeholder="请输入内容" size="small"  v-model="value.price_min"></el-input>				
				</div></el-col>	
				<span>-</span>
				<el-col :span="2" ><div class="grid-content bg-purple">
					<el-input   placeholder="请输入内容" size="small" v-model="value.price_max"></el-input>
			</div></el-col>	
			<!-- 第三列 -->
			<el-col :span="3" ><div class="grid-content bg-purple">
				<span>库存扣减方式:</span>
			</div></el-col>
			<el-col :span="4" ><div class="grid-content bg-purple">
				<el-select   size="small" placeholder="请选择" v-model="value.deduction_no">
					<el-option
					v-for="item in goodRepertory"
					:key="item.id"
					:label="item.label"
					:value="item.id">
					</el-option>
				</el-select>
			</div></el-col>	
		</el-row>
		<div style="margin-top:15px;text-align:left;padding-left:254px">				
			<el-button type="primary" @click="filter">筛选</el-button>
			<el-button >导出</el-button>
		</div>
	</div>
</div>
</template>

<script>

import { goodGroupList, goodTypeList, goodRepertory} from "../../../utils/map"


export default {
	props:{
		value:{
			type:Object,
			required:true
		}
	},
	data() {
      return {
		goodGroupList,
		goodTypeList,
		goodRepertory
      }
    },
	methods: {
      handleClick(tab) {
        console.log(tab.index);
      },
	filter(){
		this.$emit('filter')
	}
    }
}
</script>

<style lang="scss" scoped>
.from{
	width: 100%;
	height: 176px;
	margin-bottom: 16px;
	padding: 24px 0 16px 8px;
	.from-son{
		background: #f2f3f5;
		height: 100%;
		box-sizing: border-box;
		padding-top: 15px;
		text-align: center;
	}
}

</style>