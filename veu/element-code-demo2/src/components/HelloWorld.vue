<template>
  <div class="hello">
      <el-button type="primary" icon="el-icon-edit">主要按钮</el-button>
      <el-button type="primary" icon="el-icon-edit">主要按钮</el-button>
      <el-button type="primary" icon="el-icon-edit">主要按钮</el-button>
     
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import ElButton from './ElButton.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

import ElButtonGroup from '@/components/ElButtonGroup.vue'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
