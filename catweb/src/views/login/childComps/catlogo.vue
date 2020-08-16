<template>
  <div class="logo" :class="{logoMoveToRight:logoMoveToRight,logoMoveToLeft:logoMoveToLeft}">
    <div class="welcometocat">
      <div class="welcome">WELCOME</div>
      <div class="tocat">
          <div class="to">TO</div>
          <div class="cat">C.A.T</div>
      </div>
    </div>
    <div class="sentence">
      <div class="aside1">Do you want to be stronger?</div>
      <div class="aside2">It's a wise choice for you to come here</div>
      <div class="show">SHOW OUR YOU</div>
      <div class="code">
        <div class="letterC">C</div>
        <div class="letterO">O</div>
        <div class="letterD">D</div>
        <div class="letterE">E</div>
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
  font-size: 6vh;
  color: #69739a;
}
.tocat{
  display: flex;
  font-weight: bold;
  font-size: 4vh;
  color: #69739a;
}
.to{
  margin: 0 3vh 0 1.5vh;
}
.sentence{
  position: absolute;
  bottom: 12vh;
  left: 3.5vw;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2.2vh;
  color: #ffffff;
  line-height: 3vh;
}
.show{
  font-size: 2.5vh;
}
.code{
  display: flex;
  font-size: 6vh;
  font-weight: bolder;
  margin-top: 3vh;
}
.code div{
  margin-right: 1vh;
}
.letterC{
  color: #ea3834;
}
.letterO{
  color: #fbff04;
}
.letterD{
  color: #4fc47e;
}
.letterE{
  color: #43a9e7;
}
</style>