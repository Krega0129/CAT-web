<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <loginReg></loginReg> -->
    <router-view></router-view>
=======
    <ApplicationForm></ApplicationForm>
>>>>>>> c2799ceba2cd4ca48173a0ac3c5a439b9839dc3d
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

<<<<<<< HEAD
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
=======
<style lang="scss" scoped>
>>>>>>> c2799ceba2cd4ca48173a0ac3c5a439b9839dc3d
</style>
