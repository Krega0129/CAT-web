<template>
  <div id="app">
    <!-- <loginReg></loginReg> -->
    <router-view></router-view>
  </div>
</template>

<script>
import loginReg from './views/login/loginReg'
export default {
  name: 'app',
  components:{
    loginReg
  }
}
</script>
<style scoped>
  @import './assets/css/base.css';
  @import './assets/css/normalize.css';
  #app{
    width: 100%;
    height: 100%;
  }
</style>
