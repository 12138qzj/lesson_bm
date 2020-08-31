<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <p>导航 ：
        <router-link to="/" >首页</router-link>
        <router-link to="/Hi">Hi页面</router-link>
      </p>
    <router-view>
    </router-view >
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;">
    </router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;">
    </router-view>
    111
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Router from 'vue-router' //引入vue-router
// import Router from './router/index';

export default {
  name: 'App',
  components: {
    HelloWorld
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
