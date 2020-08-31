<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <p>导航 ：
        <router-link :to="{name:'Hi1',params:{key:'value'}}" >hi1页面</router-link>
        <router-link to="/Hi2">hi2页面</router-link>
      </p>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi, I am JSPang'
    }
  }
}
</script>


<style scoped>

</style>