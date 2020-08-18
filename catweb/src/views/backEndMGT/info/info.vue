<template>
  <div class="info">
    <div class="header">用户信息管理</div>
    <search></search>
    <listShow></listShow>
  </div>
</template>

<script>
import search from './childComps/search'
import listShow from './childComps/listShow'
export default {
  name:'info',
  components:{
    search,
    listShow
  }
}
</script>

<style scoped>
.header{
  padding-left: 5vh;
  width: 87vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #ffffff;
}
</style>