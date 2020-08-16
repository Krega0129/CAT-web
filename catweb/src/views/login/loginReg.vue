<template>
  <div class="loginReg">
    <color-circle/>
    <backGround/> 
  </div>
</template>

<script>
import colorCircle from "./childComps/circle";
import backGround from "./childComps/backGround";

export default {
  name: "loginReg",
  components: {
    backGround,
    colorCircle,
  }
};
</script>

<style scoped>
.loginReg {
  position: relative;
  width: 100%;
  /* height: 100%; */
}
</style>