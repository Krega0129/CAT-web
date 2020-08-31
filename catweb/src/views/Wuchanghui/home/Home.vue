<template>
  <div class="home full pos-ab">
    <!-- 引入模块，L,T,R,B分别为绝对定位的位置，cL,cH,cR,cB分别为svg圆形的位置，cX,cY,cr分别是圆心位置和半径，fillColor为圆的填充颜色 -->
    <homeMod L="10vw" T="13vh" cL="-44vw" cT="-129vh" class="t-al-cent pos-re" fillColor="#89e1d3">
      <img src="../../../assets/images/cat.jpg" slot="pic" alt="" @click="picClick($event, '/intro')">
      <p slot="title">工作室介绍</p>
    </homeMod>
    <homeMod R="12vw" T="13vh" cL="-24vw" cT="-133vh" class="t-al-cent" fillColor="#fbaf51">
      <img src="../../../assets/images/profile.jpg" slot="pic" alt="" @click="picClick($event, '/profile')" class="special">
      <p slot="title">个人中心</p>
    </homeMod>
    <homeMod L="10vw" B="13vh" cL="-44vw" cT="-20vh" class="t-al-cent" fillColor="#31b9f7">
      <img src="../../../assets/images/front-end.jpg"  slot="pic" alt="" @click="picClick($event, '/front-end')" class="special">
      <p slot="title">前端</p>
    </homeMod>
    <homeMod R="12vw" B="14vh " cL="-22vw" cT="-21vh" class="t-al-cent" fillColor="lightcoral">
      <img src="../../../assets/images/back-end.jpg" slot="pic" alt="" @click="picClick($event, '/back-end')">
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
    <div @click="loginClick" v-if="!isLogin" class="login pos-ab">登录</div>
  </div>
</template>

<script>
  import homeMod from './homeMod'
  import ball from './ball'
  import {getUserInfo} from '../../../network/getUserInfo'

  export default {
    name: 'home',
    data() {
      return {
        /* 判断登录状态 */
        isLogin: sessionStorage.getItem('token'),
        imgSrc: ''
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
          if(path === '/profile' && !sessionStorage.getItem('token')) {
            this.$router.push('/loginReg')
          } else {
            this.$router.push(path)
          }
        }, 2000)
      },
      loginClick() {
        this.$router.push('/loginReg')
      }
    },
    mounted() {
      getUserInfo().then(res => {
        console.log(res);
        this.imgSrc = 'http://192.168.1.106:8080/cat_registration_war_exploded' + res.data.head
      })
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .home {
    overflow: hidden;
    /* min-width: 800px;
    min-height: 500px; */
    background: url(../../../assets/images/bg.jpg);
    background-size: cover;
    color: white;
    font-size: 2.7vh;
  }

  /* 四个模块图片的样式 */
  .home img {
    width: 10vw;
    height: 8vw;
    border-radius: 50% 20%;
  }
  
  /* 工作室logo */
  .home .logo {
    width: 85vh;
    height: 85vh;
    border-radius: 50%;
    border: 4vh solid lightblue;
    overflow: hidden;
    left: 50%;
    top: 50%;
    margin-top: -42.5vh;
    margin-left: -42.5vh;
    background: url(../../../assets/images/logo.png);
    background-size: 100% 100%;
  }

  /* @media screen and (max-height: 400px){
    .home img {
      width: 100px;
      height: 90px;
      border-radius: 50% 20%;
    }

    .home .logo {
      width: 400px;
      height: 400px;
      left: 50%;
      top: 50%;
      margin-top: -200px;
      margin-left: -200px;
    }
  }

  @media screen and (max-width: 800px){
    .home img {
      width: 100px;
      height: 90px;
      border-radius: 50% 20%;
    }
  }
  
  @media screen and (max-width: 800px) and (max-height: 400px){
    .home img {
      width: 100px;
      height: 90px;
      border-radius: 50% 20%;
    }

    .home .logo {
      width: 400px;
      height: 400px;
    }
  } */

  /* @media screen and (min-width: 800px){
    .home img {
      width: 10vw;
      height: 20vh;
      border-radius: 50% 20%;
    }
  } */

  /* 第二和第三个模块样式不同 */
  .home .special {
    border-radius: 20% 50%;
  }

  .home .logo img {
    width: 100%;
    height: 100%;
  }

  /* 跳动的小球 */
  .balls {
    width: 30vh;
    height: 9vh;
    left: 50%;
    margin-left: -15vh;
    bottom: 5vh;
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

  .home .login {
    left: 50%;
    bottom: 3.4vh;
    z-index: 2;
  }
</style>
