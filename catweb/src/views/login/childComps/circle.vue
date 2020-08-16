<template>
  <div class="circle">
    <div class="left-circle">
      <div class="fourcolorrotate">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="right-circle"></div>
    <div class="lines">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-circle {
  position: absolute;
  top: -15vh;
  width: 25%;
  height: 40%;
  border-radius: 0 0 100% 0;
  background-color: rgba(69, 184, 134, 0.835);
  z-index: -10;
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
    top: -50vh;
  }
  70% {
    top: -15vh;
  }
  85% {
    top: -20vh;
  }
  100% {
    top: -15vh;
  }
}
.right-circle {
  position: absolute;
  right: 0;
  bottom: -15vh;
  width: 35%;
  height: 40%;
  background-color: rgba(34, 171, 225, 0.835);
  border-radius: 75% 0 0 0;
  z-index: -10;
  animation: rightcircle 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}
@keyframes rightcircle {
  0% {
    bottom: -80vh;
  }
  70% {
    bottom: -15vh;
  }
  85% {
    bottom: -20vh;
  }
  100% {
    bottom: -15vh;
  }
}
.fourcolorrotate {
  position: absolute;
  top: 13vh;
  left: 9vw;
  width: 5vw;
  height: 5vw;
  transform: translate(-50%,-50%) rotate(45deg);
  animation-name: turnBig;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.fourcolorrotate span{
  position: absolute;
  width: 2.5vw;
  height: 2.5vw;
  animation-name: rotate;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;	
}
.fourcolorrotate span::after{
  content: '';
  position: absolute;
  top: -1vh;
  left: 1vw;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.123);
  transform: translateZ(-2px);  
}
.fourcolorrotate span:nth-child(1){
  top: 0;
  left: 0;
  background-color: #f79f1f;

}
.fourcolorrotate span:nth-child(2){
  top: 0;
  right: 0;
  background-color: #12cbc4;
}
.fourcolorrotate span:nth-child(3){
  bottom: 0;
  left: 0;
  background-color: #ed4c67;
}
.fourcolorrotate span:nth-child(4){
  bottom: 0;
  right: 0;
  background-color: #0ef30e;
}
@keyframes turnBig {
  0%{
    width: 5vw;
    height: 5vw;
  }
  10%{
    width: 5vw;
    height: 5vw;
  }
  50%{
    width: 7vw;
    height: 7vw;
  }
  90%{
    width: 5vw;
    height: 5vw;
  }
  100%{
    width: 5vw;
    height: 5vw;
  }
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  10%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(90deg);
  }
  90%{
    transform: rotate(90deg);
  }
  100%{
    transform: rotate(deg);
  }
}
.line1{
  position: absolute;
  top: 42vh;
  left: -12vh;
  width: 50vw;
  height: 20vh;
  background-color: #fcc568;
  transform: rotate(-30deg)
}
.line2{
  position: absolute;
  top: 65vh;
  left: -12vh;
  width: 50vw;
  height: 20vh;
  background-color: #ff796e;
  transform: rotate(-30deg)
}
.line3{
  position: absolute;
  top: 71vh;
  left: 5vh;
  width: 60vw;
  height: 20vh;
  background-color: #fd9666;
  transform: rotate(-30deg)
}
</style>