<template>
  <div class="backEndMGT">
    <asideMenu></asideMenu>
    <keep-alive exclude="detail" class="keep">
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
import asideMenu from "./asideMenu/asideMenu";

export default {
  name: "backEndMGT",
  data(){
    return {
    }
  },
  components: {
    asideMenu
  },
  beforeRouteEnter: (to, from, next) => {
    const managerToken = localStorage.getItem("managerToken");
    if (managerToken) {
      next();
    } else {
      setTimeout(() => {
        
        next(vm=>{
          vm.$router.push('/backLogin')
        });
      }, 1000);
    }
  },
  methods: {
    
  },
  
};
</script>
  
<style scoped>
@import ".../../../../assets/css/base.css";
.backEndMGT {
  /* overflow: hidden; */
  display: flex;
}
</style>