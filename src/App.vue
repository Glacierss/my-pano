<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header style="height:50px">
          <div class="header-left">
            <router-link to="/">
            <i class="el-icon-s-home"></i>
            首页</router-link>
            <router-link to="/roaming">
            <i class="el-icon-view"></i>
            全景漫游</router-link>
            <router-link to="/video">
            <i class="el-icon-video-camera"></i>
            全景视频</router-link>
            <router-link to="/contact">
            <i class="el-icon-message"></i>
            联系我们</router-link>
          </div>
          <div class="header-right">
            <router-link to="/login">
            <i class="el-icon-user-solid"></i>
            登录</router-link>
            <router-link to="/register">
             <i class="el-icon-user"></i>
             注册</router-link>
          </div>
        </el-header>
        <el-main></el-main>
      </el-container>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  background-color: rgb(150, 189, 196);
  color: #333;
  line-height: 50px;
  padding: 0 !important;
}
#nav a {
  text-align: center;
  display: inline-block;
  color: #2c3e50;
  text-decoration: none;
  /* font-weight: bolder; */
  font-size: 16px;
  width: 120px;
  height: 50px;
  line-height: 50px;
  background-color: rgb(150, 189, 196);
  border: none;
  transition: color 200ms;
}
#nav a:hover {
  color: #fff;
  transition: color 200ms;
  /* background-color: rgb(83, 139, 148); */
}
#nav a.router-link-exact-active {
  color: #fff;
}
#nav .header-right a{
  width: 100px;
}
.header-right,
.header-left {
  display: inline-block;
}
.header-right {
  float: right;
}
</style>
