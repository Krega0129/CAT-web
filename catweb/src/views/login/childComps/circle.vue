<template>
  <div class="circle">
    <div class="left">
      <div class="green-circle">
        <div class="left-circle">
          <div class="fourcolorrotate">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
    <div class="right" >
      <img src="@/assets/img/goback.png" alt="" @click="gohome" >
      <div class="right-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gohome(){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
.circle {
  /* position: absolute; */
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
}
.left {
  width: 65vw;
  height: 100vh;
}
.right {
  overflow: hidden;
  position: relative;
  width: 35vw;
  height: 100vh;
}
.green-circle {
  position: relative;
  width: 100%;
  height: 30vh;
}
.left-circle {
  position: absolute;
  top: 0;
  width: 25vw;
  height: 40vh;
  border-radius: 0 0 100% 0;
  background-color: rgba(69, 184, 134, 0.835);
  z-index: 10;
  animation: leftcircle 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}
.left-circle::before {
  content: "";
  position: absolute;
  top: -3vh;
  width: 100%;
  height: 100%;
  border-radius: 0 0 100% 0;
  background-color: rgba(67, 153, 117, 0.5);
  z-index: -11;
}
@keyframes leftcircle {
  0% {
    top: -40vh;
  }
  85% {
    top: 0vh;
  }
  95% {
    top: -5vh;
  }
  100% {
    top: 0vh;
  }
}
.fourcolorrotate {
  position: absolute;
  top: 13vh;
  left: 9vw;
  width: 5vw;
  height: 5vw;
  transform: translate(-50%, -50%) rotate(45deg);
  animation-name: turnBig;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.fourcolorrotate span {
  position: absolute;
  width: 2.5vw;
  height: 2.5vw;
  animation-name: rotate;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;
}
.fourcolorrotate span::after {
  content: "";
  position: absolute;
  top: -1vh;
  left: 1vw;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.123);
  transform: translateZ(-2px);
}
.fourcolorrotate span:nth-child(1) {
  top: 0;
  left: 0;
  background-color: #f79f1f;
}
.fourcolorrotate span:nth-child(2) {
  top: 0;
  right: 0;
  background-color: #12cbc4;
}
.fourcolorrotate span:nth-child(3) {
  bottom: 0;
  left: 0;
  background-color: #ed4c67;
}
.fourcolorrotate span:nth-child(4) {
  bottom: 0;
  right: 0;
  background-color: #0ef30e;
}
@keyframes turnBig {
  0% {
    width: 5vw;
    height: 5vw;
  }
  10% {
    width: 5vw;
    height: 5vw;
  }
  50% {
    width: 7vw;
    height: 7vw;
  }
  90% {
    width: 5vw;
    height: 5vw;
  }
  100% {
    width: 5vw;
    height: 5vw;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(deg);
  }
}
.lines {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 70vh;
}
.line1 {
  position: absolute;
  top: 20vh;
  left: -10vw;
  width: 50vw;
  height: 25vh;
  background-color: #fcc568;
  transform: rotate(-30deg);
}
.line2 {
  position: absolute;
  top: 37vh;
  left: -7vw;
  width: 50vw;
  height: 20vh;
  background-color: #ff796e;
  transform: rotate(-30deg);
}
.line3 {
  position: absolute;
  top: 58vh;
  left: -12vw;
  width: 60vw;
  height: 20vh;
  background-color: #fd9666;
  transform: rotate(-30deg);
}
.right-circle {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30vw;
  height: 25vh;
  background-color: rgba(34, 171, 225, 0.835);
  border-radius: 100% 0 0 0;
  z-index: 1;
  animation: rightcircle 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}
@keyframes rightcircle {
  0% {
    right: -20vw;
    bottom: -25vh;
  }
  85%{
    bottom: 0vh;
  }
  95%{
    bottom: -2vh;
  }
  100% {
    right: 0vw;
    bottom: 0vh;
  }
}
.right img{
  margin: 5vh 2vh 0 0 ;
  float: right;
  max-width: 13vw;
  cursor: pointer;
}

</style>