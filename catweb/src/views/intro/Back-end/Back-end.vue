<template>
  <div class="back-end full pos-ab">
    <div class="left">
      <div class="left-sign pos-ab">
          <img src="../../../assets/img/java.png" alt="">
          <div class="bg pos-ab"></div>
      </div>
    </div>
    <barBox Wid="26vw" Color="lightblue" Bottom="30vh" zIndex="5">
      <span slot="title">Java基础</span>
      <i slot="num">1</i>
    </barBox>
    <barBox Wid="20vw" Color="lightsteelblue" Bottom="25vh" zIndex="4">
      <span slot="title">数据库</span>
      <i slot="num">2</i>
    </barBox>
    <barBox Wid="28vw" Color="lightcoral" Bottom="20vh" zIndex="3">
      <span slot="title">前端技术</span>
      <i slot="num">3</i>
    </barBox>
    <barBox Wid="22vw" Color="lightgreen" Bottom="15vh" zIndex="2">
      <span slot="title">动态网页</span>
      <i slot="num">4</i>
    </barBox>
    <barBox Wid="30vw" Color="lightsalmon" Bottom="10vh" zIndex="1">
      <span slot="title">编程强化</span>
      <i slot="num">5</i>
    </barBox>
    <div class="right">
      <div class="book">
        <!-- 书本封面 -->
        <div class="book-cover t-al-cent">
            <img src="../../../assets/img/book.jpg" alt="">
            <div class="bookName pos-ab">
              <h2>Java</h2>
              <h2>Development</h2>
            </div>
        </div>
        <!-- 书本内容 -->
        <div class="book-con">
          <p>CAT后台小组一直致力于JavaWeb开发，专注于各种前沿的Java技术学习和实践能力的结合。后台开发与前端相辅相成，无论是小程序还是网页端，都需要后台技术的支持，只有和服务器进行沟通，才能成为一个完整的产品。

如果你具备基本的C语言基础、对Java编程感兴趣，出色的学习能力以及良好的团队协作精神，想学习数据库和服务器，那么CAT后台组是你的不二选择。</p>
        </div>
      </div>
    </div>
    <!-- <h2>后台</h2>
    <p>后台开发，通常也称服务器端开发。主要负责业务逻辑功能模块，工作中处理前端的请求，进行逻辑处理和数据交互，现阶段的Web端、移动端等都需要后台技术的支持。C.A.T工作室后台组基于Java语言开发，如果你具备基本的C语言基础，对Java编程感兴趣，有出色的学习能力以及良好的团队协作能力，那么后台组绝对是你的不二选择。</p> -->
    <returnBtn></returnBtn>
  </div>
</template>

<script>

import returnBtn from '@/views/intro/return-btn'
import barBox from './bar'

export default {
  name: 'back-end',
  components:{
    returnBtn,
    barBox,
  }
}

</script>
<style scoped>
@import url(../../../assets/css/base.css);
/* 左边 */
.back-end{
  overflow: hidden;
}
.left {
  position: relative;
  display:flex;
  width: 35%;
  height: 100%;
  background:#F25E44;
  place-items: center;
  overflow: hidden;
}

/* 左边图标 */
 .left .left-sign {
  position: absolute;
  left: 50%;
  top: 10%;
  margin-left: -20vh;
  width: 40vh;
  height: 40vh;
}

.left .left-sign img{
  position: absolute;
  opacity: .9;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 2;
}

.left .left-sign .bg {
  width: 60vw;
  height: 30vh;
  transform: rotate(45deg);
  left: -25vw;
  top: 50vh;
  background: #e93827;
}

/* 右边 */
.right {
  width: 65%;
  height: 100%;
  background: url(../../../assets/img/rightBg.jpg) no-repeat;
  background-size: cover;
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
    width: 60vh;
    height: 70vh;
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

.book-cover .bookName {
  width: 30vh;
  height: 30vh;
  top: 30vh;
  left: 50%; 
}

.book-cover h2 {
    font-size: 4vh;
    transform: translate(-50%, -50%);
    color: #605d9e
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #556983;
}
/* 返回首页 */
.returnBtn {
  position: fixed;
  bottom: 13.3vh;
  right: 13.8vw;
}
</style>

