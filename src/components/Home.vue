<template>
  <div>
    <el-container>
      <el-header>
        <div>
          <div class="header-left">
              <span>首页</span>
              <span>全景漫游</span>
              <span>全景视频</span>
              <span>联系我们</span>
          </div>
          <div class="header-right">
            <span>登录</span>
            <span>注册</span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="350px">案例展示</el-aside>
        <el-main>
            
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
span{
    color: white;
    display: inline-block;
    font-weight: bolder;
    width: 100px;
    text-align: center;
    height: 60px;
}
span:hover{
    background-color: rgb(166, 136, 173);
}
.el-button{
    border: none;
    background-color: rgba(255, 255, 255, 0);
}
.el-header {
  background-color: #c3b3d1;
  color: #333;
  line-height: 0px;
  padding: 0 !important;
}

.el-aside {
  background-color: #e0d3e6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f3e9f3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.header-right,.header-left{
    display: inline-block;
}
.header-right{
    float: right;
}

</style>