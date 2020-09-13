<template>
  <div class="home full pos-ab">
    <snowBG></snowBG>
    <div class="astron pos-ab"></div>
    <!-- 工作室logo -->
    <div class="pos-ab logoBox">
      <circleScale v-show="isShowCir" class="scaleBG" :Wid="Wid" :Hei="Hei" :cirX="cirX" :cirY="cirY" transOri="center" :rList="rList" :Left="Left" :Top="Top" fillColor="steelblue"></circleScale>
      <svg class="pos-ab cir">
        <circle cx="30vh" cy="30vh" r="30vh" class="full" fill="none" stroke-width="3vh"></circle>
      </svg>
      <div class="title pos-ab t-al-cent">
        <h3 v-if="index === 0">工作室介绍</h3>
        <h3 v-else-if="index === 1">个人主页</h3>
        <h3 v-else-if="index === 3">前端</h3>
        <h3 v-else-if="index === 4">后台</h3>
        <h3 v-else></h3>
      </div>
    </div>
    <div class="banner pos-ab">
      <!-- <img src="../../../assets/images/cat.jpg" class="pic pos-ab" slot="pic" alt="" ref="cat" :style="{left: posList[0] + 'vw'}" @click="picClick($event, '/intro')">
      <img src="../../../assets/images/profile.jpg" class="pic pos-ab" slot="pic" alt="" ref="pro" :style="{left: posList[1] + 'vw'}" @click="picClick($event, '/profile')">
      <img src="../../../assets/images/front-end1.jpg" class="pic pos-ab" slot="pic" alt="" ref="front" :style="{left: posList[2] + 'vw'}" @click="picClick($event, '/front-end')">
      <img src="../../../assets/images/back-end1.jpg" class="pic pos-ab" slot="pic" alt="" ref="back" :style="{left: posList[3] + 'vw'}" @click="picClick($event, '/back-end')"> -->
      <img src="../../../assets/images/planet1.png" class="pic pos-ab" slot="pic" alt="" ref="cat" :style="{left: posList[0] + 'vw'}" @click="picClick($event, '/intro')">
      <img src="../../../assets/images/planet2.png" class="pic pos-ab" slot="pic" alt="" ref="pro" :style="{left: posList[1] + 'vw'}" @click="picClick($event, '/profile')">
      <img src="../../../assets/images/planet3.png" class="pic pos-ab" slot="pic" alt="" ref="front" :style="{left: posList[2] + 'vw'}" @click="picClick($event, '/front-end')">
      <img src="../../../assets/images/planet4.png" class="pic pos-ab" slot="pic" alt="" ref="back" :style="{left: posList[3] + 'vw'}" @click="picClick($event, '/back-end')">
      <div class="logo pos-ab" ref="logo">
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
      <div class="pos-ab lBtnBox">
        <div class="pos-ab t-al-cent lBtn" @click="pre">◀</div>
      </div>
      <div class="pos-ab rBtnBox">
        <div class="pos-ab t-al-cent rBtn" @click="after">▶</div>
      </div>
    </div>
    <div @click="loginClick" v-if="!isLogin" class="btn login pos-ab t-al-cent">登录</div>
    <div @click="logOutClick" v-else class="btn login pos-ab t-al-cent">退出登录</div>
  </div>
</template>

<script>
  import circleScale from './CircleScale'
  import ball from './ball'
  import {getUserInfo} from '../../../network/getUserInfo'
  import snowBG from '../snowBG'

  export default {
    name: 'home',
    data() {
      return {
        /* 判断登录状态 */
        isLogin: localStorage.getItem('token'),
        imgSrc: '',
        posList: [-8, 7.8, 70.3, 85],
        isShowLogo: true,
        index: 2,
        imgIndex: null,
        imgs: null,
        Wid: '51.1vh',
        Hei: '51.1vh',
        cirX: '25.5vh',
        cirY: '25.5vh',
        rList: ['10vh'],
        Left: '',
        Top: '',
        isShowCir: false
      }
    },
    components: {
      ball,
      snowBG,
      circleScale,
    },
    methods: {
      picClick(ev, path) {
        const e = ev || window.event;
        const target = e.target;
        if(target === this.imgs[this.imgIndex]) {
          this.rList = [2500];
          this.Wid = '500vw'
          this.Hei = '500vh'
          this.cirX = '250vw'
          this.cirY = '250vh'
          this.Left = '-235vw'
          this.Top = '-225vh'
          setTimeout(() => {
            if(path === '/profile' && !localStorage.getItem('token')) {
              this.$router.push('/loginReg')
            } else {
              this.$router.push(path)
            }
          }, 1000)
        }
      },
      loginClick() {
        this.$router.push('/loginReg')
      },
      logOutClick() {
        localStorage.removeItem('token');
        history.go(0)
      },
      pre() {
        this.isShowCir = false
        if(this.index > 0 && this.index <= 4) this.index--;
        switch(this.index) {
          case 0: 
            this.imgIndex = 0
            this.posList = [38.7, 62.5, 93.7, 108]; 
            this.$refs.logo.style.transform = 'translate(40vw, 2vh) scale(.1)'
            break;
          case 1: 
            this.imgIndex = 1
            this.posList = [15.6, 38.4, 78.1, 93]; 
            this.$refs.logo.style.transform = 'translate(24vw, 2vh) scale(.1)'
            break;
          case 2: 
            this.$refs.logo.style.boxShadow = 'none'
            this.posList = [-8, 7.8, 70.3, 85]
            this.$refs.logo.style.transform = 'translate(0, 0) scale(1)'
            break
          case 3: 
            this.imgIndex = 2
            this.posList = [-15, 0, 38.7, 62.5]; 
            this.$refs.logo.style.transform = 'translate(-23vw, 2vh) scale(.1)'
            break;
        }
        setTimeout(() => {
          this.isShowCir = true
        }, 500)
      },
      after() {
        this.isShowCir = false;
        if(this.index >= 0 && this.index < 4) this.index++;
        switch(this.index) {
          case 1: 
            this.imgIndex = 1
            this.posList = [15.6, 38.7, 78.1, 93];
            this.$refs.logo.style.transform = 'translate(23vw, 2vh) scale(.1)'
            break;
          case 2: 
            this.$refs.logo.style.transform = 'scale(1) translate(0, 0)'
            this.$refs.logo.style.boxShadow = 'none'
            this.posList = [-8, 7.8, 70.3, 85]
            break;
          case 3: 
            this.imgIndex = 2
            this.posList = [-15, 0, 38.7, 62.5]; 
            this.$refs.logo.style.transform = 'translate(-23vw, 2vh) scale(.1)'
            break;
          case 4: 
            this.posList = [-31, -15.6, 15.6, 38.7]; 
            this.imgIndex = 3
            this.$refs.logo.style.transform = 'translate(-38vw, 2vh) scale(.1)'
            break;
        }
        setTimeout(() => {
          this.isShowCir = true
        }, 500)
      }
    },
    mounted() {
      this.imgs = document.getElementsByClassName('home')[0].getElementsByTagName('img')
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .home {
    overflow: hidden;
    background-size: cover;
    color: white;
  }

  .home .scaleBG {
    margin: 6.5vh 0 0 5.1vh;
  }

  .home .banner {
    top: 30vh;
    width: 81.25vw;
    height: 60vh;
    left: 50%;
    margin-left: -40.625vw;
  }

  .home .banner .pic {
    border-radius: 50%;
    overflow: hidden;
    top: 17vh;
    width: 10vh;
    height: 10vh;
  }

  /* 四个模块图片的样式 */
  .home img {
    z-index: 2;
    transform-origin: center;
    width: 10vh;
    height: 10vh;
    animation: imgMove 3s infinite linear;
    transition: .5s;
  }

  @keyframes imgMove {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-1vh);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(1vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  /* 工作室logo */
  .home .logo {
    box-sizing: border-box;
    transition: .5s;
    transform-origin: center;
    width: 80vh;
    height: 80vh;
    border-radius: 50%;
    border: 4vh solid lightblue;
    overflow: hidden;
    left: 50%;
    top: 50%;
    margin-top: -50vh;
    margin-left: -40vh;
    background: url(../../../assets/images/logo.png);
    background-size: 100% 100%;
  }

  .home .imgMove {
    animation: imgMove 3s infinite linear;
  }

  /* 宇航员 */
  .home .astron {
    width: 30vh;
    height: 30vh;
    background: url(../../../assets/images/astronaut.png) no-repeat;
    background-size: 100%;
    top: 5vh;
    left: 5vw;
  }

  .home .logoBox {
    width: 60vh;
    height: 60vh;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    background: rgba(255,255,255,.5);
    margin-top: -30vh;
    margin-left: -30vh;
    box-shadow: .1vw 0 1vw rgb(164, 241, 237);
  }

  .home .cir {
    width: 70vh;
    height: 70vh;
    top: -5vh;
    left: -5vh;
    stroke: steelblue;
    animation: rotate 2s linear infinite;
  }

  .home .cir circle {
    stroke-linecap: round;
    transform: translate(5vh, 5vh);
    stroke-dasharray: 200vh;
    stroke-dashoffset: 200vh;
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      stroke-dashoffset: 200vh;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.01% {
      stroke-dashoffset: 400vh;
    }
    100% {
      stroke-dashoffset: 200vh;
    }
  }

  .home .logoBox .title {
    color: lightseagreen;
    font-size: 4vh;
    width: 20vw;
    left: 50%;
    margin-left: -10vw;
    bottom: -10vh;
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

  @import url("https://fonts.googleapis.com/css?family=Rubik:700&display=swap");
  * {
    box-sizing: border-box;
  }
  *::before, *::after {
    box-sizing: border-box;
  }
  
  .home .btn {
    vertical-align: middle;
    font-weight: 600;
    color: rgb(15, 206, 231);
    background: #f0f7ff;
    border: 2px solid #859cb1;
    border-radius: 0.75em;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  .home .btn::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #c4dff9;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #8598b1, .3em 0.325em 10px 0 #212325;
    -webkit-transform: translate3d(0, 0.75em, -1em);
            transform: translate3d(0, 0.75em, -1em);
    -webkit-transition: box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  .home .btn:hover {
    background: #e9f4ff;
    -webkit-transform: translate(0, 0.25em);
            transform: translate(0, 0.25em);
  }
  .home .btn:hover::before {
    box-shadow: 0 0 0 2px #8598b1, .2em 0.2em 5px 0 #1f2122;
    -webkit-transform: translate3d(0, 0.5em, -1em);
            transform: translate3d(0, 0.5em, -1em);
  }
  .home .btn:active {
    background: #e9f3ff;
    -webkit-transform: translate(0em, 0.75em);
            transform: translate(0em, 0.75em);
  }
  .home .btn:active::before {
    box-shadow: 0 0 0 2px #8599b1, 0 0 #54575a;
    -webkit-transform: translate3d(0, 0, -1em);
            transform: translate3d(0, 0, -1em);
  }

  .home .login {
    right: 10vw;
    top: 3.4vh;
    width: 8vw;
    height: 8vh;
    font-size: 3vh;
    line-height: 8vh;
    z-index: 2;
  }

  .home div[class$="BtnBox"] {
    width: 30vw;
    height: 80vh;
    top: -20vh;
    z-index: 4;
  }

  .home .lBtnBox {
    left: 0;
  }

  .home .lBtnBox:hover .lBtn  {
      display: block;
    }

  .home .rBtnBox {
    right: 0;
  }

  .home .rBtnBox:hover .rBtn  {
      display: block;
    }

  .home div[class$="Btn"] {
    width: 10vh;
    height: 10vh;
    font-size: 5vh;
    top: 25vh;
    display: none;
    background: rgba(0,0,0,0.3);
    border-radius: 50%;
    line-height: 10vh;
  }

  .home .lBtn {
    left: 10vw;
  }
  .home .rBtn {
    right: 10vw;
  }
</style>
