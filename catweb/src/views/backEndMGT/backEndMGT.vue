<template>
  <div class="backEndMGT">
      <asideMenu></asideMenu>
      <router-view></router-view>
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
@import '.../../../../assets/css/base.css';
.backEndMGT{
  display: flex;
}
</style>