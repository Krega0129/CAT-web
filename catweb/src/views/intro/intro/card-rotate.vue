<template>
  <div class="cardRotate">
      <!-- 正面 -->
    <div class="front">
        <h1>C.A.T工作室介绍</h1>
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
    <!-- 背面 -->
    <div class="back">
        <div class="content">
            <p>C.A.T工作室，成立于2017年，指导老师为梁祖红教授，分为前端和后台两个小组，致力于政府及企业级的大型项目开发，团队与玉兰集团、南方电网等公司建立了长期合作关系，近年来研发过广东省专家匹配系统、智能塑料回收瓶箱（与羊城通合作）等，同时组队参与App、小程序大赛并获得奖项，已有毕业师兄就职于一线互联网大厂。</p>
        </div>      
    </div>
  </div>
</template>

<script>
import ball from '@/views/Wuchanghui/home/ball'

export default {
  name: 'cardRotate',
   components: {
      ball
    }
}
</script>

<style scoped>
@import url(../../../assets/css/base.css);

.cardRotate {
  position: relative;
  height: 60vh;
  transform-style: preserve-3d;
  animation: rotate-reverse 1s cubic-bezier(.76,-0.51,.29,1.5) forwards;
}

.cardRotate:hover{
    animation: rotate 1s cubic-bezier(.76,-0.51,.29,1.5) forwards;
}

.front,
.back {  
    width: 100%;
    height: 100%;
    background: #f1f4fd;
    border-radius: 20px;
    box-shadow: 1px 1px 20px rgba(0,0,0,.25);
}

.front {
  position:absolute;
  background:url(../../../assets/images/logo.png) #f1f4fd center 50px no-repeat;
  background-size:100%;
  padding-top: 6.66vh;
  text-align: center;
}

.front h1 {
  font-size: 4.5vh;
}

.back {
  padding: 2.66vh 1.76vw;
  transform-style:preserve-3d;
  /* 背面翻转180deg */
  transform:rotateY(180deg)
}

.back .content {
    height: 100%;
    border: #8bdccf solid 2px;
    background: url(../../../assets/img/cat.gif) no-repeat 9vw 33.33vh;
}

.back .content p {
    height: 100%;
    padding: 4vh 0.88vw 0px;
    border: #8bdccf solid 2px;
    box-shadow: 1px 1px 20px rgba(0,0,0,.09);
    /* 段前间隔两个字 */
    font-size: 2vh;
    text-indent:2em;
    letter-spacing:2px;
    line-height:3.066vh;
    overflow: auto;
    transform: translate(2%,1%);
}

.back .content p::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}

/* 图片翻转动画 */
@keyframes rotate {
  0%{
    transform:rotateY(0deg)
  }
  100%{
    transform:rotateY(180deg)
  }
}

@keyframes rotate-reverse {
  100%{
    transform:rotateY(0deg)
  }
  0%{
    transform:rotateY(180deg)
  }
}

/* 跳动的小球 */
.balls {
  position: absolute;
  width: 146px;
  left: 50%;
  margin-left: -6.3vw;
  bottom:12vh;
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
</style>