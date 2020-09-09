<template>
  <div class="front-end full pos-ab">
    <div class="main">
      <div class="center">
        
        <header>
          <div class="header-mask">
            <div class="header-con">
              <div class="header-title">
                <h1>前端</h1>
                <div class="title-sign">
                  <img src="../../../assets/images/logo.png" alt="">
                </div> 
              </div> 
              <div class="typewrite">
                <p> 前端负责界面与业务逻辑实现，以优化用户体验为核心目的，囊括PC，移动端。凡是有界面的地方，就有前端发挥的空间。</p>
              </div>            
            </div>
          </div>
        </header>

        <section class="section-categroy">
          <div class="section-intro">
            根据
            <h2>W3C</h2>
            标准<hr>
            一个网页分为3个层次
          </div>

          <div class="category">
            <div class="html">
              <img src="../../../assets/img/html.svg" alt="">
            </div>
            <div class="js">
              <img src="../../../assets/img/js.svg" alt="">
            </div>
            <div class="css">
              <img src="../../../assets/img/css.svg" alt="">
            </div>
          </div>
        </section>

        <section class="section-prospect">
          <div class="pro-title">
            <h2>前端的未来</h2>
          </div>
          <div class="pro-con">
            <div class="pro-bg">
              <span></span>
              <span></span>
            </div>
            <div class="pro-text">
              自2005年起,前端不断的飞速发展<hr>
              <h2>2009年Node的诞生，让前端也能做后端的事情，大前端时代来临</h2> <hr>
              在中国，前端工程师的缺口一直存在
              <div class="pro-data">
                <div class="data-info">
                  <span>人均工资</span>
                  <span>10~25k</span>
                </div>
                <div class="data-info">
                  <span>小程序日活</span>
                  <span>2亿</span>
                </div>
                <div class="data-info">
                  <span>NPM 模块</span>
                  <span>40万</span>
                </div>
              </div>
              <h2>只要有界面的地方，就有前端</h2>
            </div>
          </div>
        </section>

        <footer>
          你想展示出惊人的设计，那么，前端将是你的选择!
          <div class="text-roll">
            <span>欢</span>
            <span>迎</span>
            <span>加</span>
            <span>入</span>
            <span>我</span>
            <span>们</span> 
            <span>!</span>          
          </div>
        </footer>
       

      </div>

      <!--下面 固定图标 -->
      <div class="sign">
        <img src="../../../assets/images/frontEnd.webp" alt="">
      </div>
      <returnBtn></returnBtn>
    </div>
  </div>
</template>

<script>
import returnBtn from '@/views/intro/return-btn'

export default {
  name: 'front-end',
  components:{
    returnBtn
  }
}
</script>

<style scoped>
@import url(../../../assets/css/base.css);

.front-end {
    overflow: hidden;
    background: linear-gradient(to bottom right,#ffefba,#ffffff);
    padding: 0 16vw;
}

.main {
  width: 100%;
  height: 100%;
  background:  #ffcf5d;
  border-bottom:130px solid #fff;
  padding:10.6vh 3vw 0px;
  box-shadow: 1px 1px 20px rgba(0,0,0,.09);
}

.center {
  width:100%;
  height: 100%;
  background:#fff;
  overflow: auto;
}

.center::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}

/* 头部 */
header {
  position:relative;
  width:100%;
  height:90%;
  background:url(../../../assets/img/front-end-bg.jpg) no-repeat center;
  background-size:cover;
  box-shadow:1px 1px 20px rgba(0,0,0,.01)
}

header .header-mask {
  position: relative;
  width: 100%;
  height: 100%;
  background:rgba(255,255,255,0.7);
  color:#fff
}

header .header-mask .header-con {
  background: rgba(0,0,0,0.3);
  
}

header .header-mask .header-con .typewrite p { 
  overflow: hidden;
  margin: auto;
  white-space: nowrap;
  text-align: center;
  letter-spacing:1px;
  font-size: 2.1vh;
  overflow-x: auto;
  animation: typewrite 4s steps(44) 1s normal both;
}

.typewrite p::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}

/* 打印机动画 */
@keyframes typewrite {
  from {
    width:0;
    border-right:2px solid #eee;
  }
  to {
    width:100%;
    border-right:none
  }
}

/* 右上角图标 */
.center .title-sign {
  position: absolute;
  left: 70%;
  top: 8%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.center .title-sign::before {
  content: '';
  position: absolute;
  right: -2px;
  bottom: 5px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: rgba(145, 23, 23, 0.01);
}

.center .title-sign img{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 50;
}

.center h1{
  position:relative;
  letter-spacing:1em;
  font-size:8em;
  text-align:center;
}

/* w3c标准 */
.section-categroy {
  position: relative;
  height: 500px;
  margin-top: 100px;
  background: url(../../../assets/img/front-end-bg2.png) no-repeat center;
  background-size:cover;
  box-shadow: 0 0 10px 0px rgb(110, 110, 10,.4);
  text-align: center;
}

.section-categroy .section-intro {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-20%);
  font-size: 20px;
}

.section-categroy h2 {
  background: url(../../../assets/img/front-end-textbg.jpg) top left;
  -webkit-background-clip: text;
  font-size:100px;
  color:rgba(255,255,255,0.3);
  animation: move 20s linear alternate infinite;
}

.category {
  padding-top:80px
}

.category div{
  width: 100px;
  height: 100px;
  border-radius: 10%;
  box-shadow: 0 10px 10px 0px rgb(110, 110, 10,.3);
  margin-top:90px;
  cursor: pointer;
  animation: jumping 2s infinite cubic-bezier(0.280, 0.840, 0.420, 1);
}

.category div img {
width:100%;
height: 100%;
}

.category .js {
  margin: auto;
}

.category .css{
  position: absolute;
  left:20%;
  top:150px;
}
.category .html{
  position: absolute;
  right:20%;
  top:150px;
}

/* 文字背景晃动 */
@keyframes move {
  to {
    background-position: top right;
  }
}

/* 跳动动画 */
@keyframes jumping {
  0% {
      transform: translateY(0);     
  }
  10% {
      transform: translateY(0);
      box-shadow: 0 10px 10px 0px rgba(110,110,10,.3)
  }
  30% {
      transform: translateY(-50px);
      box-shadow: 0 80px 10px 0px rgba(110,110,10,.1)
  }
  50% {
      transform:  translateY(0);     
  }
  57% {
      transform:  translateY(-7px);
  }
  100% {
      transform:  translateY(0);     
  }  
}

/* 前端未来 */
.section-prospect {
  display: flex;
  position: relative;
  height: 450px;
  margin-top: 100px;
  background:#ebf4fd;
  overflow: hidden;
  color: #666666;
}

.section-prospect .pro-title {
  position: relative;
  width: 20%;
  height: 100%;
  background: url(../../../assets/img/pro-bg.jpg) no-repeat center;
  background-size: cover;
  text-align: center;
}

.section-prospect .pro-title h2 {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
  /* width: 100%;
  height: 100%; */
  background: rgba(255,255,255,0.7);
  font-size:25px;
}
.section-prospect .pro-con {
  width: 80%;
  padding:50px 30px;
  line-height: 50px;
}
.section-prospect .pro-con .pro-bg {
  position: absolute;
  right:-100px;
  top:-120px;
  width: 250px;
  height: 250px;
  border-radius: 45%;
  border: 2px solid #ffcf5d;
  /* z-index: -1; */
}
.section-prospect .pro-con .pro-bg span:nth-child(1) {
  position: absolute;
  right: -5px;
  width: 200px;
  height: 200px;
  border-radius: 45%;
  border: 2px solid #ffcf5d;
}
.section-prospect .pro-con .pro-bg span:nth-child(2) {
  position: absolute;
  right: -5px;
  width: 150px;
  height: 150px;
  border-radius: 45%;
  /* border: 2px solid #ffcf5d; */
  background: #33c0fb;
}

/* 前端工作数据统计 */ 
.section-prospect .pro-con .pro-data {
  display: flex;
  margin-top: 20px;
}
.section-prospect .pro-con .pro-data .data-info {
  min-width: 100px;
  height: 80px;
  border-right: 2px solid #fff;
  padding-right: 50px;
  margin: 30px;
  text-align: center;
  transform: skewX(-20deg);
  box-sizing:content-box
}
.section-prospect .pro-con .pro-data .data-info:nth-child(3) {
  border-right: none;
}
.section-prospect .pro-con .pro-data .data-info span {
  display: block;
  /* 保证文字不倾斜 */
  transform: skewX(20deg);
  height: 30%;
  text-align: center;
}
.section-prospect .pro-con .pro-data .data-info span:nth-child(2) {
  font-size:28px;
  margin-top:5px;
  height: 70%;
}
/* 底部欢迎栏 */
footer {
  margin-top:150px;
  text-align: center;
}

footer .text-roll {
  position: relative;
  left: 50%;
  transform:translate(-50%,50%);
  width:300px;
  height:36px;
  margin-top: 20px;
  font-size:20px;
  letter-spacing:1em;
  text-align:center;
  color:#ffeaa7;
}

footer .text-roll span {
  animation: rolling 1s linear infinite;
}

footer .text-roll span:nth-child(2){
  animation-delay:.4s
}
footer .text-roll span:nth-child(3){
  animation-delay:.8s
}
footer .text-roll span:nth-child(4){
  animation-delay:1.2s
}
footer .text-roll span:nth-child(5){
  animation-delay:1.4s
}
footer .text-roll span:nth-child(6){
  animation-delay:1.8s
}

/* 文字闪烁动画 */
@keyframes rolling {
  0% {
    opacity: 0;
  }
  35% {
  opacity: 1;
}
  65% {
  opacity: 1;
}
  100% {
  opacity: 0;
}
}

/* 左下动态图标 */
.sign{
  position: fixed;
  bottom: 18px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #9aa15a;
  overflow: hidden;
}
.sign img{
  width: 100%;
  height: 100%;
}

/* 返回首页 */
.returnBtn {
  position: fixed;
  bottom: 13.3vh;
  right: 19.4vw;
}
</style>
