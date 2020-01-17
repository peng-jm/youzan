<template>
<div>
  <el-container>
      <el-aside width="240px">
          <el-row>
            <el-col  :span="24"><div style="height:160px;cursor:pointer;" class="grid-content bg-purple-dark">
                <img src="https://img.yzcdn.cn/upload_files/2020/01/02/Fk5J_idUAGh46QizUd-XOzCl1lJv.png" srcset="https://img.yzcdn.cn/upload_files/2020/01/02/FlGswUr037Q35VMHDnjU29JBp5fu.png 2x" alt="海景房">
              </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div style="height:80px;cursor:pointer;display:flex;padding:18px;box-sizing: border-box;" class="grid-content bg-purple-dark">
                <img style="width:44px;height:43px;margin-right: 15px;" src="https://img.yzcdn.cn/v4/imgs/dashboard/headset.png" alt="">
                <div>
                    <h4 class="title">在线客服</h4>
                    <p style="color: #646566;font-size: 12px;margin-top:5px" class="desc">电话：0571 - 8998 8848</p>
                </div>
              </div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div style="height:80px;cursor:pointer;display:flex;padding:18px;box-sizing: border-box;" class="grid-content bg-purple-dark">
                <img style="width:44px;height:43px;margin-right: 15px;" src="https://img.yzcdn.cn/upload_files/2019/12/09/FlxaMvBVrh4fFC202IgfkSZ-8YAl.png" alt="">
                <div>
                    <h4 class="title">请给有赞打分</h4>
                    <p style="color: #646566;font-size: 12px;margin-top:5px" class="desc">填写反馈赢取有赞币</p>
                </div>
              </div></el-col>
          </el-row>
          <!-- <el-row>
            <el-col :span="24"><div style="height:157px" class="grid-content bg-purple-dark">4</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div style="height:195px" class="grid-content bg-purple-dark">5</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><div style="height:195px" class="grid-content bg-purple-dark">6</div></el-col>
          </el-row> -->
      </el-aside>    
  </el-container>
</div>
</template>

<script>
export default {
  data() {
      return {
        items: [
          { type: '', label: '试用期' },
          { type: 'info', label: 'SVIP' },
          { type: 'info', label: '有赞担保' },
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,input{
	margin:0;
	padding:0;
}
a{cursor:pointer;}  
body,html{
	font:12px "微软雅黑",Arial;
  background: #f7f8fa
}
h1,h2,h3,h4,h5,h6,b,strong{
	font-weight:normal;
	font-size:100%;
}
i,em{
	font-style:normal;
}
a{
	text-decoration:none;
	color:#606060;
  cursor:pointer;
}
.el-container{
  background: #f7f8fa;
}
.el-aside {
  background-color:  #f7f8fa;
  padding-top: 20px;
  float: right;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  height: 290px;
}
</style>