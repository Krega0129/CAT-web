<template>
  <div class="logo" :class="{logoMoveToRight:logoMoveToRight,logoMoveToLeft:logoMoveToLeft}">
    <div class="welcometocat">
      <div class="welcome">WELCOME</div>
      <div class="tocat">
          <div class="to">TO</div>
          <div class="cat">C.A.T</div>
      </div>
    </div>
    <img src="@/assets/img/plane.png" alt class="logoplane" />
  </div>
</template>

<script>
export default {
  name: "catlogo",
  data() {
    return {
      logoMoveToRight: false,
      logoMoveToLeft: false
    };
  },
  mounted() {
    this.$bus.$on("toReg", () => {
      this.logoMoveToRight = true;
      this.logoMoveToLeft = false;
    });
    this.$bus.$on("toLogin", () => {
      this.logoMoveToRight = false;
      this.logoMoveToLeft = true;
    });
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 24.69vw;
  height: 100%;
  background: linear-gradient(
    to right,
    #fcc467,
    #fcad68,
    #fca767,
    #fea468,
    #fd9c69
  );
  border-radius: 1vw 0 0 1vw;
  z-index: 2;
}
.logoMoveToRight {
  border-radius: 0 1vw 1vw 0;
  animation-name: logoMoveToRight;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes logoMoveToRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(29.9vw);
  }
}
.logoMoveToLeft {
  animation-name: logoMoveToLeft;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes logoMoveToLeft {
  0% {
    transform: translateX(29.9vw);
  }
  100% {
    transform: translateX(0);
  }
}
.logoplane {
  position: absolute;
  top: 0;
  right: 3vh;
  width: 50%;
  opacity: .8;
}
.welcometocat{
  position: absolute;
  top: 35vh;
  left: 3vw;
  font-family: Georgia, 'Times New Roman', Times, serif;
} 
.welcome{
  font-weight: bolder;
  font-size: 5vh;
  color: #69739a;
}
.tocat{
  display: flex;
  font-weight: bold;
  font-size: 4vh;
  color: #69739a;
}
.to{
  margin-right: 3vh;
}
</style>