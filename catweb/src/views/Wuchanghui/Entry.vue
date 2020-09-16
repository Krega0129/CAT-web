<template>
  <div class="entry pos-re full"  ref="entry">
    <CircleScale Left="-20vw" Top="-50vh" fillColor="#89e1d3" :rList="rList"></CircleScale>
    <CircleScale Left="10vw" Top="0vh" fillColor="#fbaf51" :rList="rList"></CircleScale>
    <CircleScale Left="50vw" Top="-20vh" fillColor="#31b9f7" :rList="rList"></CircleScale>
    <div class="logo pos-ab">
      <img src="../../assets/images/logo-c.png" alt="" class="logo-c logo-words">
      <img src="../../assets/images/logo-dot.png" alt="" class="logo-dot">
      <img src="../../assets/images/logo-a.png" alt="" class="logo-a logo-words">
      <img src="../../assets/images/logo-rect.png" alt="" class="logo-rect">
      <img src="../../assets/images/logo-t.png" alt="" class="logo-t logo-words">
      <img src="../../assets/images/logo-studio.png" alt="" class="logo-studio dp-bk logo-words pos-ab">
    </div>
    <div class="loader pos-ab" ref="loader">
      <em style="width: 1%" ref="em"></em>
    </div>
    <div @click="pass" style="z-index: 10" class="pos-ab">跳过动画</div>
  </div>
</template>

<script>
  import CircleScale from '@/views/Wuchanghui/home/CircleScale'

  export default {
    name: 'entry',
    data() {
      return {
        // isShow: false,
        t: null,
        timer: null,
        tim: null,
        rList: ['8.5vh','25.5vh','42.6vh','59.6vh','76.7vh']
      }
    },
    components: {
      CircleScale,
    },
    methods: {
      async pass() {
        await clearInterval(this.timer);
        await clearTimeout(this.tim);
        await clearTimeout(this.t);
        this.$router.replace('/home')
      }
    },
    computed: {
      
    },
    mounted() {
      // 页面高度与窗口高度相同
      document.getElementsByTagName("body")[0].style.height  = window.innerHeight + "px"

      this.t = setTimeout(() => {
        this.$refs.entry.style.opacity = 0
      },5800)
      this.tim = setTimeout(() => {
        // this.isShow = true
        clearInterval(this.timer);
        this.$router.push('/home');
      },6000)

      this.timer = setInterval(() => {
        let w =  parseInt(this.$refs.em.style.width);
        this.$refs.em.style.width = (w + 1) + '%'
      }, 53);
    }
  }
</script>

<style scoped>
  @import url(../../assets/css/base.css);

  .entry {
    transition: .2s;
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
    0%{
      transform: translateY(-300px) rotate(120deg);
      opacity: 0;
    }
    20%, 100% {
      transform: translateY(0) rotate(0);
      opacity: 1;
    }
  }

  @keyframes logo-dot-style {
    0% {
      transform: translate(-50vw,3.4vh) rotate(-1200deg);
    }
    20%, 100% {
      transform: translate(0, 3.4vh) rotate(0);
    }
  }

  @keyframes logo-rect-style {
    0% {
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
    100% {
      transform: translate(1.4vh,-24.3vh);
    }
  }

  /* cat三个字母 */
  .logo-words{
    transform: translateY(-300px);
    opacity: 0;
    animation: logostyle 6s;
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
    animation: logo-dot-style 6s cubic-bezier(.53,.51,.56,1.21) .5s;
  }

  /* logo中的小正方形 */
  .logo-rect {
    width: 6vh;
    height: 6vh;
    transform: translate(50vw,-24.4vh);
    animation: logo-rect-style 6s cubic-bezier(.53,.51,.56,1.21) .5s;
  }

  /* logo中的studio */
  .logo-studio {
    width: 37.8vh;
    height: 8.7vh;
    bottom: -5vh;
    right: 2vh;
    opacity: 0;
    animation: studioDisp 4s 2s;
  }

  @keyframes studioDisp {
    0% {
      opacity: 0;
      transform: translateY(3.4vh);
    }
    40%, 100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 进度条 */
  .loader {
    display: inline-block;
    padding: .5vh;
    width: 50vw;
    /* border-bottom: .1vh solid linear-gradient(to right, #35bbf8, #fab142, #90e0da); */
    border-radius: 4px;
    bottom: 20vh;
    left: 25vw;
  }

  .loader > em {
    display: block;
    height: .5vh;
    background: #295188;
    border-radius: 2px;
    box-shadow: 0 0 1px rgba(255, 255, 255, .2);
    transition: all .5s;
  }
</style>