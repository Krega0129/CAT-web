<template>
  <div id="app">
    <!-- <loginReg></loginReg> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import ApplicationForm from './views/kai/application-form.vue'
export default {
  name:'app',
  components:{
    ApplicationForm
  },
  
}
</script>

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
overflow-x: hidden;
  }
</style>
