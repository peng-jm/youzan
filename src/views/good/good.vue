<template>
<div class="goods">
	<div style="margin-left:10px;">
		<el-button type="primary" @click="publish">发布商品</el-button>
	</div>

	<div>
		<TabFilter v-model='tabIdx'></TabFilter>
	</div>

	<div>
		<fromTable v-model="formParams"  @filter="filterHandle"></fromTable>
	</div>

	<div>
		<myFrom :list="list"></myFrom>
	</div>

	<div class="page">
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="currentSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
		</el-pagination>
	</div>
</div>
</template>

<script>
import myFrom from "./component/my-form"
import TabFilter from "./component/TabFilter"
import fromTable from "./component/fromTable"


// import { fetchGoodList } from "@/utils/api"
import { mapState } from "vuex"


export default {
	beforeRouteEnter(to, from, next){
		const islogin = localStorage.getItem('isLogin')
			if(islogin == 1){
				next()
			}else{
				alert('请先登录')
			}
	},
	components:{
		myFrom,
		TabFilter,
		fromTable
	},
	data:function(){
		return {
			tabIdx:	'-1',
			currentPage: 1,
			currentSize: 5,
			list: [],
			total: 0,
			formParams: {
				name: '',
				group_no:0,
				type_no:0,
				sale_min: 0,
				sale_max: '',
				price_min: 0,
				price_max: '',
				deduction_no: 0
			}
		}
	},
	computed:{
		...mapState('goods',['msg'])
	},
	watch:{
		tabIdx(){
			this.changeList()
		}
	},
	mounted(){
		this.changeList()
	},
	methods: {
		changeList(){
			const params = {
				status_no:this.tabIdx,
				page:this.currentPage,
				size:this.currentSize,
				// name:this.formParams.name,
				// group_no:this.formParams.group_no,
				// type_no:this.formParams.type_no,
				// sale_min:this.formParams.sale_min,
				// sale_max:this.formParams.sale_max,
				// price_min:this.formParams.price_min,
				// price_max:this.formParams.price_max,
				// deduction_no:this.formParams.deduction_no,
				...this.formParams
				
			}
			if(params.sale_max === 0 || params.sale_max > params.sale_min) delete params.sale_max
			if(params.price_max === 0 || params.price_max > params.price_min) delete params.price_max
			this.$http.fetchGoodList(params).then(res=>{
				this.list = res.list
				this.total = res.total
			})
		},    
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.currentSize = val
			this.changeList()
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
			this.changeList()
		},
		filterHandle(){
			this.changeList()
		},
		publish(){
			this.$router.push('/publish')
		},
	},
}
</script>

<style lang="scss" scoped>
	.goods{
		box-sizing: border-box;
		padding-top: 30px;
		padding-left: 10px;
		padding-right: 20px;
		.page{
			padding: 10px 0;
			text-align: right;
		}
	}
</style>