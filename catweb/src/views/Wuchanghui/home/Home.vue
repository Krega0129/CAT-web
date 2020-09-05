<template>
  <div class="home full pos-ab">
    <snowBG></snowBG>
    <div class="banner pos-ab">
      <img src="../../../assets/images/cat.jpg" class="pic pos-ab" slot="pic" alt="" ref="cat" :style="{left: posList[0] + 'vw'}" @click="picClick($event, '/intro')">
      <img src="../../../assets/images/profile.jpg" class="pic pos-ab" slot="pic" alt="" ref="pro" :style="{left: posList[1] + 'vw'}" @click="picClick($event, '/profile')">
      <img src="../../../assets/images/front-end.jpg" class="pic pos-ab" slot="pic" alt="" ref="front" :style="{left: posList[2] + 'vw'}" @click="picClick($event, '/front-end')">
      <img src="../../../assets/images/back-end.jpg" class="pic pos-ab" slot="pic" alt="" ref="back" :style="{left: posList[3] + 'vw'}" @click="picClick($event, '/back-end')">
      <div class="pos-ab t-al-cent btn lBtn" @click="pre">◀</div>
      <div class="pos-ab t-al-cent btn rBtn" @click="after">▶</div>
    </div>
    <!-- 工作室logo -->
    <div class="pos-ab logoBox">
      <circleScale v-show="isShowCir" class="scaleBG" :Wid="Wid" :Hei="Hei" :cirX="cirX" :cirY="cirY" transOri="center" :rList="rList" :Left="Left" :Top="Top" fillColor="lightcoral"></circleScale>
      <div class="title pos-ab t-al-cent">
        <h3 v-if="index === 0">工作室介绍</h3>
        <h3 v-else-if="index === 1">个人主页</h3>
        <h3 v-else-if="index === 2">前端</h3>
        <h3 v-else-if="index === 3">后台</h3>
        <h3 v-else></h3>
      </div>
    </div>
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
    <div @click="loginClick" v-if="!isLogin" class="btn login pos-ab t-al-cent">登录</div>
    <div @click="logOutClick" v-else class="btn login pos-ab t-al-cent">退出登录</div>
  </div>
</template>

<script>
  import homeMod from './homeMod'
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
        posList: [-7.8, 7.8, 70.3, 86],
        isFirst: true,
        index: null,
        imgs: null,
        Wid: '51.1vh',
        Hei: '51.1vh',
        cirX: '25.5vh',
        cirY: '25.5vh',
        rList: ['20.4vh'],
        Left: '',
        Top: '',
        isShowCir: false
      }
    },
    components: {
      homeMod,
      ball,
      snowBG,
      circleScale,
    },
    methods: {
      /* 点击模块后向中间移动，2s后跳转 */
      picClick(ev, path) {
        const e = ev || window.event;
        const target = e.target;
        console.log(target, this.imgs[this.index]);
        if(target === this.imgs[this.index]) {
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
        this.isLogin = false;
        // history.go(0)
        this.$message ({
          message: '您已安全退出！',
          type: 'success'
        })
        
      },
      pre() {
        this.isShowCir = false
        if(this.isFirst) {
          this.$refs.logo.style.transform = 'scale(.2) translateY(-144.8vh)'
          this.$refs.logo.style.boxShadow = '.1vw 0 10vw rgb(164, 241, 237)'
          this.posList = [15.6, 39, 62.5, 78.1]
          this.$refs.pro.style.transform = 'scale(3)'
          this.index = 1;
          this.isFirst = false
        } else {
          if(this.index > 0) {
            this.index--;
            this.imgs[this.index].style.transform = 'scale(3)'
            this.imgs[this.index + 1].style.transform = 'scale(1)'
          }
            
          switch(this.index) {
            case 0: this.posList = [39, 62.5, 78.1, 93.75]; break;
            case 1: this.posList = [15.6, 39, 62.5, 78.1]; break;
            case 2: this.posList = [0, 15.6, 39, 62.5]; break;
          }
        }
        setTimeout(() => {
          this.isShowCir = true
        }, 500)
      },
      after() {
        this.isShowCir = false;
        if(this.isFirst) {
          this.$refs.logo.style.transform = 'scale(.2) translateY(-144.8vh)'
          this.$refs.logo.style.boxShadow = '.1vw 0 10vw rgb(164, 241, 237)'
          this.posList = [0, 15.6, 39, 62.5]
          this.$refs.front.style.transform = 'scale(3)'
          this.index = 2
          this.isFirst = false;
        } else {
          if(this.index < 3) {
            this.index++;
            this.imgs[this.index].style.transform = 'scale(3)'
            this.imgs[this.index - 1].style.transform = 'scale(1)'
          }
          switch(this.index) {
            case 1: this.posList = [15.6, 39, 62.5, 78.1]; break;
            case 2: this.posList = [0, 15.6, 39, 62.5]; break;
            case 3: this.posList = [-15.6, 0, 15.6, 39]; break;
          }
        }
        setTimeout(() => {
          this.isShowCir = true
        }, 500)
      }
    },
    mounted() {
      this.imgs = document.getElementsByClassName('home')[0].getElementsByTagName('img')
      getUserInfo().then(res => {
        if(res && res.data && res.data.head){
          this.imgSrc = 'http://192.168.1.106:8080/cat_registration_war_exploded' + res.data.head
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import url(../../../assets/css/base.css);

  .home {
    overflow: hidden;
    // background: url(../../../assets/images/bg.jpg);
    background-size: cover;
    color: white;
  }

  .home .scaleBG {
    margin: 8.5vh 0 0 5.1vh;
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
    top: 20vh;
    width: 8.5vh;
    height: 8.5vh;
  }

  

  /* 四个模块图片的样式 */
  .home img {
    transition: .5s;
    z-index: 2;
    transform-origin: center;
    width: 8.5vh;
    height: 8.5vh;
  }
  
  /* 工作室logo */
  .home .logo {
    transition: .5s;
    transform-origin: center;
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

  // .home .login {
  //   right: 10vw;
  //   top: 3.4vh;
  //   width: 6vw;
  //   height: 5vh;
  //   font-size: 3vh;
  //   line-height: 5vh;
  //   background: lightcoral;
  //   z-index: 2;
  // }

  @import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');

  $text: white;
  $light-pink: #bee2f3;
  $pink: #9edcf5;
  $dark-pink: #75afca;
  $pink-border: #5da9cc;
  $pink-shadow: #6e95af;

  * {
    box-sizing: border-box;
    &::before, &::after {
      box-sizing: border-box;
    }
  }

  .home .btn {
    cursor: pointer;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    &.btn {
      font-weight: 600;
      color: $text;
      text-transform: uppercase;
      background: $light-pink;
      border: 2px solid $pink-border;
      border-radius: 0.75em;
      transform-style: preserve-3d;
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $dark-pink;
        border-radius: inherit;
        box-shadow: 0 0 0 2px $pink-border, 0 0.625em 0 0 $pink-shadow;
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
      }
      &:hover {
        background: $pink;
        transform: translate(0, 0.25em);
        &::before {
          box-shadow: 0 0 0 2px $pink-border, 0 0.5em 0 0 $pink-shadow;
          transform: translate3d(0, 0.5em, -1em);
        }
      }
      &:active {
        background: $pink;
        transform: translate(0em, 0.75em);
        &::before {
          box-shadow: 0 0 0 2px $pink-border, 0 0 $pink-shadow;
          transform: translate3d(0, 0, -1em);
        }
      }
    }
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

  .home div[class$="Btn"] {
    width: 5vw;
    height: 8vh;
    font-size: 4vh;
    border-radius: 50%;
    line-height: 8vh;
  }

  .home .lBtn {
    left: 5vw;
  }
  .home .rBtn {
    right: 5vw;
  }
</style>
