<template>
  <div class="entry pos-re full">
    <CircleScale Left="-300px" Top="-300px" fillColor="#89e1d3" :rList="[50,150,250,350,450]"></CircleScale>
    <CircleScale Left="0" Top="0px" fillColor="#fbaf51" :rList="[50,150,250,350,450]"></CircleScale>
    <CircleScale Left="500px" Top="-200px" fillColor="#31b9f7" :rList="[50,150,250,350,450]"></CircleScale>
    <div class="logo">
      <img src="../../assets/images/logo-c.png" alt="" class="logo-c logo-words">
      <img src="../../assets/images/logo-dot.png" alt="" class="logo-dot">
      <img src="../../assets/images/logo-a.png" alt="" class="logo-a logo-words">
      <img src="../../assets/images/logo-rect.png" alt="" class="logo-rect">
      <img src="../../assets/images/logo-t.png" alt="" class="logo-t logo-words">
      <img src="../../assets/images/logo-studio.png" alt="" class="logo-studio dp-bk logo-words">
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

  .logo {
    margin: 200px auto 0 auto;
    width: 420px;
    height: 200px;
  }

  .logo img {
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
      transform: translate(-800px,20px) rotate(-1200deg);
    }
    20%, 80% {
      transform: translate(0, 20px) rotate(0);
    }
  }

  @keyframes logo-rect-style {
    0%, 100% {
      transform: translate(800px,-143px);
    }
    16%{
      transform: translate(0,-143px);
      width: 32px;
      height: 32px;
    }
    18% {
      transform: translate(8px,-143px);
      width: 10px;
      height: 40px;
    }
    20% {
      transform: translate(8px,-143px);
      width: 32px;
      height: 32px;
    }
    80% {
      transform: translate(8px,-143px);
    }
  }

  /* cat三个字母 */
  .logo-words{
    transform: translateY(-300px);
    opacity: 0;
    animation: logostyle 8s;
  }

  /* 分别是cat中的a,t两个字母动画的延迟时间 */
  .logo-a {
    animation-delay: .2s;
  }
  .logo-t {
    animation-delay: .4s;
  }

  /* logo中的小圆点 */
  .logo-dot {
    transform: translate(-800px,20px);
    animation: logo-dot-style 8s cubic-bezier(.53,.51,.56,1.21) .5s;
  }

  /* logo中的小正方形 */
  .logo-rect {
    transform: translate(800px,-143px);
    animation: logo-rect-style 8s cubic-bezier(.53,.51,.48,1.38) .5s;
  }

  /* logo中的studio */
  .logo-studio {
    margin: 50px 0 0 200px;
    opacity: 0;
    animation: studioDisp 6s 2s;
  }

  @keyframes studioDisp {
    0%, 90% {
      opacity: 0;
      transform: translateY(20px);
    }
    40%, 60% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 开始按钮 */
  .entry .startBtn {
    width: 120px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    background: #87ddd0;
    color: white;
    left: 50%;
    margin-left: -60px;
    bottom: 100px;
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
    animation: showWords 8s -3s forwards;
  }

  @keyframes showWords {
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(-300px);
    }
  }
</style>