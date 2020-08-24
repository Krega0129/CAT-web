<template>
  <div class="backEndMGT">
    <asideMenu></asideMenu>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import asideMenu from "./asideMenu/asideMenu";

export default {
  name: "backEndMGT",
  components: {
    asideMenu
  },
  beforeRouteEnter: (to, from, next) => {
    const data = localStorage.getItem("code");
    if (data == 1204) {
      next();
    } else {
      alert('请先登录')
      setTimeout(() => {
        next({ path: "/backLogin" });
      }, 1500);
    }
    /* console.log(to);
    console.log(from);
    console.log(next); */
  }
};
</script>
  
<style scoped>
@import ".../../../../assets/css/base.css";
.backEndMGT {
  display: flex;
}
</style>