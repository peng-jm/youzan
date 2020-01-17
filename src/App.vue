<template>
  <div class="app">
        <router-view name="login" v-if="$route.path === '/login'"></router-view>
      <el-container class="app-container" v-else>
        <el-aside style="width:92px;position:fixed;top: 0;left: 0;bottom: 0;z-index:99;">
          <myAside></myAside>
        </el-aside>
        <el-container>
          <el-header style="padding:0;">
            <myHeader></myHeader>
          </el-header>
          <el-main style="width:100%;height:100%;  background: rgb(247, 248, 250);
">
            <myMain></myMain>
            <myFooter></myFooter>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import myAside from "./components/layout/pjm-aside"
import myHeader from "./components/layout/pjm-header"
import myMain from "./components/layout/pjm-main"
import myFooter from "./components/layout/pjm-footer"


export default {
  name: 'app',
  components: {
    myAside,
    myHeader,
    myMain,
		myFooter

  }
}
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  
}
body{
  box-sizing: border-box;
  padding-left: 92px;
}
.app{
  height: 100%;
  min-width: 1220px;
  .app-container{
    height: 100%;
  }
}

</style>
