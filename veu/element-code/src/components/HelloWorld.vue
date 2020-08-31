<template>
  <div class="hello">
      <el-button type="primary" round circle @click="doLogin"> 主要按钮</el-button>
      <el-button-group>
      <el-button type="primary"  icon="el-icon-edit"> 
        编辑
      </el-button>
        <el-button type="primary"  icon="el-icon-share"> 
        分享
      </el-button>
        <el-button type="primary"  icon="el-icon-delete"> 
        删除
      </el-button>
      </el-button-group>

    
  </div>
</template>

<script>
import ElButton from './ElButton.vue'
// import moduleName from 'module'
import ElButtonGroup from '@/components/ElButtonGroup.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  "components":{
    "el-button":ElButton,
    'el-button-group':ElButtonGroup
  },
  methods:{
    doLogin:function(evt){
      console.log("父组件的",evt)
    }
  }
  // components:{
  //   ElButton,
  //   'el-button-group':ElButtonGroup
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
