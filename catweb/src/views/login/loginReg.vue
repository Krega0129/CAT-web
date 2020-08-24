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
  width: 100vw;
  height: 100vh;
  background-image: url('.../../../../assets/img/point.png');
}
</style>