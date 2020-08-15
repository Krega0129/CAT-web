<template>
  <div class="home full pos-ab">
    <!-- 引入模块，L,T,R,B分别为绝对定位的位置，cL,cH,cR,cB分别为svg圆形的位置，cX,cY,cr分别是圆心位置和半径，fillColor为圆的填充颜色 -->
    <homeMod L="150px" T="80px" cL="-560px" cT="-780px" class="t-al-cent pos-re" fillColor="#89e1d3">
      <img src="../../../assets/images/cat.webp" slot="pic" alt="" @click="picClick($event, '/intro')">
      <p slot="title">工作室介绍</p>
    </homeMod>
    <homeMod R="150px" T="80px" cL="-330px" cT="-790px" class="t-al-cent" fillColor="#fbaf51">
      <img src="../../../assets/images/profile.gif" slot="pic" alt="" @click="picClick($event, '/profile')" class="special">
      <p slot="title">个人中心</p>
    </homeMod>
    <homeMod L="150px" B="80px" cL="-570px" cT="-110px" class="t-al-cent" fillColor="#31b9f7">
      <img src="../../../assets/images/front-end.webp" slot="pic" alt="" @click="picClick($event, '/front-end')" class="special">
      <p slot="title">前端</p>
    </homeMod>
    <homeMod R="150px" B="80px" cL="-320px" cT="-100px" class="t-al-cent" fillColor="lightcoral">
      <img src="../../../assets/images/back-end.gif" slot="pic" alt="" @click="picClick($event, '/back-end')">
      <p slot="title">后台</p>
    </homeMod>
    <!-- 工作室logo -->
    <div class="logo pos-ab">
      <!-- 跳动的小球 -->
      <div class="balls pos-ab dp-fx ju-btw">
        <ball fillColor="#89e1d3"></ball>
        <ball fillColor="#fbaf51"></ball>
        <ball fillColor="#31b9f7"></ball>
        <ball fillColor="lightcoral"></ball>
        <ball fillColor="#31b9f7"></ball>
        <ball fillColor="#fbaf51"></ball>
        <ball fillColor="#89e1d3"></ball>
      </div>
    </div>
  </div>
</template>

<script>
  import homeMod from './homeMod'
  import ball from './ball'

  export default {
    name: 'home',
    data() {
      return {
        /* 判断登录状态 */
        isLogin: true
      }
    },
    components: {
      homeMod,
      ball
    },
    methods: {
      /* 点击模块后向中间移动，2s后跳转 */
      picClick(ev, path) {
        const e = ev || window.event;
        const target = e.target;
        /* 要位移的距离 */
        const toLeft = (window.innerWidth / 2 - target.parentNode.parentNode.offsetLeft - target.width / 2) + 'px';
        const toTop = (window.innerHeight / 2 - target.parentNode.parentNode.offsetTop - target.height / 2) + 'px';
        target.style.transition = '2s'
        target.style.transform = 'translate(' + toLeft + ',' + toTop + ') scale(1.5)';
        target.style.borderRadius = '20% 20%'
        setTimeout(() => {
          this.$router.push(path)
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .home {
    overflow: hidden;
    background: url(../../../assets/images/bg.jpg);
    background-size: cover;
    color: white;
  }

  /* 四个模块图片的样式 */
  .home img {
    width: 120px;
    height: 120px;
    border-radius: 50% 20%;
  }
  
  /* 第二和第三个模块样式不同 */
  .home .special {
    border-radius: 20% 50%;
  }

  /* 工作室logo */
  .home .logo {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    border: 25px solid lightblue;
    overflow: hidden;
    left: 50%;
    top: 50%;
    margin-top: -275px;
    margin-left: -275px;
    background: url(../../../assets/images/logo.png);
    background-size: 100% 100%;
  }

  .home .logo img {
    width: 100%;
    height: 100%;
  }

  /* 跳动的小球 */
  .balls {
    width: 180px;
    height: 20px;
    left: 50%;
    margin-left: -90px;
    bottom: 60px;
  }

  .ball{
    animation: ballMove 1.2s cubic-bezier(.14,1.74,.78,-0.45) infinite;
  }
  .ball:nth-child(2) {
    animation-delay: .2s;
  }
  .ball:nth-child(3) {
    animation-delay: .4s;
  }
  .ball:nth-child(4) {
    animation-delay: .6s;
  }
  .ball:nth-child(5) {
    animation-delay: .8s;
  }
  .ball:nth-child(6) {
    animation-delay: 1s;
  }
  .ball:nth-child(7) {
    animation-delay: 1.2s;
  }

  @keyframes ballMove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>>
