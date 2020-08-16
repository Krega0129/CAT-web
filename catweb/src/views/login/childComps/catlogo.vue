<template>
  <div class="logo" :class="{logoMoveToRight:logoMoveToRight,logoMoveToLeft:logoMoveToLeft}">
    <div class="talk">Talk is cheap</div>
    <div class="show">Show me the</div>
    <div class="code">Code</div>
    <img src="@/assets/img/plane.png" alt="" class="logoplane">
    <img src="@/assets/img/yellow.png" alt="" class="logoyellow">
  </div>
</template>

<script>

export default {
  name:'catlogo',
  data(){
    return {
      logoMoveToRight:false,
      logoMoveToLeft:false
    }
  },
  mounted(){
    this.$bus.$on('toReg',()=>{
      this.logoMoveToRight = true
      this.logoMoveToLeft = false
    })
    this.$bus.$on('toLogin',()=>{
      this.logoMoveToRight = false
      this.logoMoveToLeft = true
    })
  }
  
}
</script>

<style scoped>
.logo{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 24.69vw;
  height: 100%;
  background: #f0a416;
  border-radius: 1vw 0 0 1vw;
  z-index: 2;
}
.logoMoveToRight{
  border-radius: 0 1vw 1vw 0;
  animation-name: logoMoveToRight;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes logoMoveToRight {
  0%{
    transform: translateX(0)
  }
  100%{
    transform: translateX(29.9vw)
  }
}
.logoMoveToLeft{
  animation-name: logoMoveToLeft;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes logoMoveToLeft {
  0%{
    transform: translateX(29.9vw)
  }
  100%{
    transform: translateX(0)
  }
}
.logoyellow{
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: .3;
  width: 100%;
  border-radius: 1vw 1vw 1vw 1vw;
}
.logoplane{
  position: absolute;
  top: 0;
  left: 0;
  width:50%;
  opacity: .8;
}
</style>