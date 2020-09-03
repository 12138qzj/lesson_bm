<template>
  <div class="hello">
    <id-badge :value="12" :max="10" class="item" :hidden="isHidden">
      <el-button size="small">评论</el-button>
    </id-badge>

    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
  </div>
</template>

<script>

import IdBadge from '@/components/IdBadge'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isHidden:false
    }
  },
  meunted(){
    setTimeout(()=>{
      this.isHidden=true;
    },2000)
  },
  components:{
    IdBadge
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
