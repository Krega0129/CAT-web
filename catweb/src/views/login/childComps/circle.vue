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
.fourcolorrotate{
  position: absolute;
  top: 7vh;
  left: 7vw;
  width: 5vw;
  height: 5vw;
  background-color: yellowgreen;
  transform: rotate(45deg);
  animation: name duration timing-function delay iteration-count direction fill-mode;
}
</style>