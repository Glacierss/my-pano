<template>
  <div class="welcome">
    <div class="enter-button">
      <router-link to="preview">立即预览</router-link>

      <router-link to="roaming">立即体验</router-link>
    </div>
  </div>
</template>
<style scoped>
.welcome {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.enter-button a.router-link-exact-active {
  color: #42b983;
}
.enter-button {
  margin: 511px 0 0 0;
}
a {
  display: inline-block;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 50px;
  font-weight: bolder;
  font-size: 18px;
  width: 150px;
  height: 66px;
  line-height: 66px;
  background-color: rgb(150, 189, 196);
  border: none;
}
a:hover {
  color: #fff;
  background-color: rgb(83, 139, 148);
  box-shadow: 0px 3px 10px 3px #ccc;
  transition: color 200ms, background-color 200ms, box-shadow 200ms;
}
</style>