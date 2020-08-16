<template>
  <div class="back-ground">
    <logo></logo>
    <div class="moveAni" :class="{tgmoveToLeft:tgmoveToLeft,tgmoveToRight:tgmoveToRight}">
      <login v-show="isLogin"></login>
      <register v-show="isReg"></register>
    </div>
  </div>
</template>


<script>
import logo from "./catlogo";
import login from "./login";
import register from "./register";

export default {
  data() {
    return {
      isLogin: true,
      isReg: false,
      tgmoveToLeft: false,
      tgmoveToRight: false
    };
  },
  components: {
    login,
    register,
    logo
  },
  mounted() {
    this.$bus.$on("toReg", () => {
      setTimeout(() => {
        this.isLogin = false;
        this.isReg = true;
      }, 750);
      this.tgmoveToLeft = true;
      this.tgmoveToRight = false;
    });
    this.$bus.$on("toLogin", () => {
      setTimeout(() => {
        this.isLogin = true;
        this.isReg = false;
      }, 750);
      this.tgmoveToLeft = false;
      this.tgmoveToRight = true;
    });
  }
};
</script>

<style scoped>
.back-ground {
  position: relative;
  width: 54.5vw;
  height: 75vh;
  margin: 15vh auto;
  border-radius: 1vw;
  box-shadow: -1vh 1.5vh 1vh   rgba(0, 0, 0, 0.205);
  /* background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%); */
}
.moveAni {
  position: absolute;
  top: 0;
  right: 0;
}
.tgmoveToLeft {
  animation-name: tgmoveToLeft;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes tgmoveToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-24.6vw);
  }
}
.tgmoveToRight {
  animation-name: tgmoveToRight;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes tgmoveToRight {
  0% {
    transform: translateX(-24.6vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>