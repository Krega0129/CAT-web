<template>
  <div class="back-end full pos-ab">
    <div class="left">
      <h2>后台</h2>
      <div class="left-sign">
          <img src="../../../assets/images/logo.png" alt="">
      </div>
    </div>
    <div class="right">
      <backEndBg></backEndBg>    
    </div>
    <!-- <h2>后台</h2>
    <p>后台开发，通常也称服务器端开发。主要负责业务逻辑功能模块，工作中处理前端的请求，进行逻辑处理和数据交互，现阶段的Web端、移动端等都需要后台技术的支持。C.A.T工作室后台组基于Java语言开发，如果你具备基本的C语言基础，对Java编程感兴趣，有出色的学习能力以及良好的团队协作能力，那么后台组绝对是你的不二选择。</p> -->
    <returnBtn></returnBtn>
  </div>
</template>

<script>

import returnBtn from '@/views/intro/return-btn'
import backEndBg from './Back-end-bg'

export default {
  name: 'back-end',
  components:{
    returnBtn,
    backEndBg
  }
}

</script>
<style>
@import url(../../../assets/css/base.css);
/* 左边 */
.left {
  position: relative;
  display:flex;
  width: 35%;
  height: 100%;
  background: url(../../../assets/img/back-end-bg2.jpg);
  background-size: cover;
  place-items: center;
  
}
.left h2 {
  margin: auto;
  color:transparent;
  font-size: 5.3vh;
  letter-spacing: 1em;
  background: url(../../../assets/img/back-end-testbg.jpg) left;
  -webkit-background-clip: text;
  animation: move 20s linear alternate infinite;
}

@keyframes move {
  to {
    background-position: top right;
  }
}

/* 左边图标 */
 .left .left-sign {
  position: absolute;
  left: 40%;
  top: 25%;
  width: 13.4vh;
  height: 13.4vh;
  border-radius: 50%;
  border: 2px solid #31b1ec;
}

.left .left-sign::before {
  content:'';
  position: absolute;
  right: 10%;
  bottom: 0;
  width:16vh;
  height:16vh;
  background: #a9edec;
  border-radius: 50%;
  
}

.left .left-sign img{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* 右边 */
.right {
  width: 65%;
  height: 100%;
  background: #ffffff;
}

/* 背景 */
.backEndBg {
  background: red;
  position: absolute;
  width:100%;
  height: 100%;
  z-index: 20;
  overflow: hidden;
}

/* 书本 */
.book {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 53.3vh;
    height: 53.3vh;
    background: #fff;
    transform: translateY(-50%) perspective(2000px);
    /* 该属性不会继承 */
    transform-style: preserve-3d;
    transition: 1s;
    box-shadow: 0 20px 150px rgba(0, 0, 0, .4), inset 200px 0 50px rgba(0, 0, 0, .4);
    z-index: 50;
}

.book:hover {
    transform: translateY(-50%) perspective(2000px) rotate(-5deg);
    box-shadow: 0 10px 100px rgba(0, 0, 0, .4), inset 20px 0 50px rgba(0, 0, 0, .4)
}

/* 制造书本的厚度 */
.book::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgb(182, 163, 163);
    /* 拉伸 */
    transform: skewX(-45deg);
    transform-origin: bottom;
}

.book::after {
    content: '';
    position: absolute;
    top: 0px;
    right: -8px;
    height: 100%;
    width: 8px;
    background: rgb(182, 163, 163);
    transform: skewY(-45deg);
    transform-origin: left;
}

.book-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: left;
    transition: 1s;
}

/* 书本翻页 */
.book:hover .book-cover {
    transform: rotateY(-100deg);
}

.book-cover img {
    width: 100%;
    height: 100%;
}

.book-cover h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #e9322f;
    font-size:4vh
}

/* 书本内容 */
.book-con {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.book-con::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}


.book-con p {
    position: absolute;
    padding: 20px 30px;
    box-sizing: border-box;
    text-indent: 2em;
    letter-spacing: 2px;
    line-height: 28px;
    z-index: -1;
}
/* 返回首页 */
.returnBtn {
  position: fixed;
  bottom: 13.3vh;
  right: 13.8vw;
}
</style>

