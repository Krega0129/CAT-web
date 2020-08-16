<template>
  <div class="entry pos-re full">
    <CircleScale Left="-20vw" Top="-50vh" fillColor="#89e1d3" :rList="[50,150,250,350,450]"></CircleScale>
    <CircleScale Left="10vw" Top="0vh" fillColor="#fbaf51" :rList="[50,150,250,350,450]"></CircleScale>
    <CircleScale Left="50vw" Top="-20vh" fillColor="#31b9f7" :rList="[50,150,250,350,450]"></CircleScale>
    <div class="logo pos-ab">
      <img src="../../assets/images/logo-c.png" alt="" class="logo-c logo-words">
      <img src="../../assets/images/logo-dot.png" alt="" class="logo-dot">
      <img src="../../assets/images/logo-a.png" alt="" class="logo-a logo-words">
      <img src="../../assets/images/logo-rect.png" alt="" class="logo-rect">
      <img src="../../assets/images/logo-t.png" alt="" class="logo-t logo-words">
      <img src="../../assets/images/logo-studio.png" alt="" class="logo-studio dp-bk logo-words pos-ab">
    </div>
    <div class="words t-al-cent" v-if="isShow">
      <h2>想要变强吗</h2>
      <h3>想要变强吗</h3>
      <h3>想要变强吗</h3>
      <h3>想要变强吗</h3>
      <h3>想要变强吗</h3>
      <h3>想要变强吗</h3>
      <h3>想要变强吗</h3>
      <h2>想要变强吗</h2>
    </div>
    <div class="startBtn pos-ab" v-if="isShow">
      <router-link to='/home' class="dp-bk">
        START
      </router-link>
      <img class="pos-ab" src="../../assets/images/hand.png" alt="">
    </div>
  </div>
</template>

<script>
  import CircleScale from '@/views/Wuchanghui/home/CircleScale'

  export default {
    name: 'entry',
    data() {
      return {
        isShow: false
      }
    },
    components: {
      CircleScale,
    },
    methods: {

    },
    computed: {
      
    },
    mounted() {
      // 页面高度与窗口高度相同
      document.getElementsByTagName("body")[0].style.height  = window.innerHeight+"px"

      // 7秒后显示 start 按钮
      setTimeout(() => {
        this.isShow = true
      },7000)
    }
  }
</script>

<style scoped>
  @import url(../../assets/css/base.css);

  .entry {
    overflow: hidden;
    background: #f1f4fd;
  }

  .entry .logo {
    left: 50%;
    top: 50%;
    margin-left: -35.5vh;
    margin-top: -17vh;
    width: 71vh;
    height: 34vh;
  }

  .logo img {
    padding: 0;
    margin: 0;
    display: inline-block;
  }

  @keyframes logostyle {
    0%, 100% {
      transform: translateY(-300px) rotate(120deg);
      opacity: 0;
    }
    20%, 80% {
      transform: translateY(0) rotate(0);
      opacity: 1;
    }
  }

  @keyframes logo-dot-style {
    0%, 100% {
      transform: translate(-50vw,3.4vh) rotate(-1200deg);
    }
    20%, 80% {
      transform: translate(0, 3.4vh) rotate(0);
    }
  }

  @keyframes logo-rect-style {
    0%, 100% {
      transform: translate(50vw,-24.3vh);
    }
    16%{
      transform: translate(0,-24.3vh);
      width: 6vh;
      height: 6vh;
    }
    18% {
      transform: translate(1.4vh,-24.3vh);
      width: 2vh;
      height: 8vh;
    }
    20% {
      transform: translate(1.4vh,-24.3vh);
      width: 6vh;
      height: 6vh;
    }
    80% {
      transform: translate(1.4vh,-24.3vh);
    }
  }

  /* cat三个字母 */
  .logo-words{
    transform: translateY(-300px);
    opacity: 0;
    animation: logostyle 8s;
  }

  .logo-c {
    width: 20.6vh;
    height: 21.3vh;
  }

  /* 分别是cat中的a,t两个字母动画的延迟时间 */
  .logo-a {
    width: 21.3vh;
    height: 21.3vh;
    animation-delay: .2s;
  }
  .logo-t {
    width: 15.2vh;
    height: 25.4vh;
    animation-delay: .4s;
  }

  /* logo中的小圆点 */
  .logo-dot {
    width: 6vh;
    height: 6vh;
    transform: translate(-50vw,20px);
    animation: logo-dot-style 8s cubic-bezier(.53,.51,.56,1.21) .5s;
  }

  /* logo中的小正方形 */
  .logo-rect {
    width: 6vh;
    height: 6vh;
    transform: translate(50vw,-24.4vh);
    animation: logo-rect-style 8s cubic-bezier(.42,1.3,.93,1.06) .5s;
  }

  /* logo中的studio */
  .logo-studio {
    width: 37.8vh;
    height: 8.7vh;
    bottom: -5vh;
    right: 0;
    opacity: 0;
    animation: studioDisp 6s 2s;
  }

  @keyframes studioDisp {
    0%, 90% {
      opacity: 0;
      transform: translateY(3.4vh);
    }
    40%, 60% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 开始按钮 */
  .entry .startBtn {
    width: 20.4vh;
    height: 8.5vh;
    text-align: center;
    line-height: 8.5vh;
    font-size: 3.4vh;
    background: #87ddd0;
    color: white;
    left: 50%;
    margin-left: -10.2vh;
    bottom: 17vh;
  }

  /* 开始按钮旁的手 */
  .entry .startBtn img {
    width: 50px;
    height: 50px;
    transform: rotate(-80deg);
    left: -50px;
    top: -20px;
    animation: handMove 6s infinite;
  }

  @keyframes handMove {
    0%, 40%, 60%, 75%, 85%, 100% {
      transform: translate(0,0);
    }
    20%, 50%, 70%, 80%, 90%{
      transform: translate(-50px, -50px);
    }
  }

  /* 按钮字体白色 */
  .entry .startBtn a {
    color: white;
    width: 100%;
    height: 100%;
  }

  /* 聚焦按钮产生阴影 */
  .entry .startBtn:hover {
    box-shadow: 3px 3px yellow;
  }

  /* 介绍语句 */
  .words {
    font-size: 2.7vh;
    animation: showWords 8s -3s forwards;
  }

  @keyframes showWords {
    0%{
      transform: translateY(50vh);
    }
    100%{
      transform: translateY(20vh);
    }
  }
</style>