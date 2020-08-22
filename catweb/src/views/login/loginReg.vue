<template>
  <div class="loginReg">
    <color-circle/>
    <backGround/>
    <div class="lines"></div>
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
  width: 100vw;
  height: 80vh;
}
.lines{
  position: absolute;
  bottom: -5vh;
  left: 0;
  width: 80vw;
  height: 85vh;
  background: url('../../assets/img/lines.png');
  z-index: -100;
}
</style>