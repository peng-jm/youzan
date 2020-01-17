<template>
  <div class="myFrom">
	<el-table
		:data="list"
		border
		style="width: 100%">
		<el-table-column
		type="selection"
		width="55">
		</el-table-column>
		<el-table-column
		fixed
		label="商品名"
		width="300"
		align="center">
			<template slot-scope="scope">
				<div class="page"><img :src="scope.row.src" ></div>
				<div style="margin-left: 10px" v-text="scope.row.name"></div>
			</template>
		</el-table-column>
		<el-table-column
		prop="price"
		sortable
		label="价格"
		width="120"
		align="center">
		</el-table-column>
		<el-table-column
		prop="visit_num"
		label="访问量"
		width="120"
		align="center">
		</el-table-column>
		<el-table-column
		prop="inventory_num"
		sortable
		label="库存"
		width="120"
		align="center">
		</el-table-column><el-table-column
		prop="sale_num"
		sortable
		label="销量"
		width="120"
		align="center">
		</el-table-column>
		<el-table-column
		prop="order"
		sortable
		label="序号"
		width="120"
		align="center">
		</el-table-column>
		<el-table-column
		prop="create_time"
		sortable
		label="创建时间"
		:formatter="timeHandle"
		width="120"
		align="center">
		</el-table-column>
		<el-table-column
		prop="status_no"
		label="销售状态"
		width="120"
		align="center">
		</el-table-column>
		<el-table-column
		fixed="right"
		label="操作"
		width="160"
		align="center">
		<template slot-scope="scope">
			<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			<el-button type="text" size="small">编辑</el-button>
		</template>
		
		</el-table-column>
		
	</el-table>
  </div>
</template>

<script>

import moment from 'moment'
export default {
	props:{
		list:{
			type:Array,
			required:true,
		},
	},
    data() {
		return {
			multipleSelection: [],
		}
    },
	methods:{
		handleClick(row) {
			console.log(row);
		},
		formatter(row) {
			return row.address;
		},
		timeHandle(row) {
			return moment(row.create_time).format('HH:mm:ss')
		}
	}
}
</script>

<style lang='scss' scoped>
.myFrom{
	.page{
		padding:10px 0;
		img{
		height: 30px;
		width: 20px;
		vertical-align: middle;
		}
	}
}
		

</style>