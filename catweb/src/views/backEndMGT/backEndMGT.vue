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
  }
};
</script>
  
<style scoped>
@import ".../../../../assets/css/base.css";
.backEndMGT {
  display: flex;
}
</style>