<template>
  <div class="cardMobile">

      <!-- 里层 -->
      <div class="face face-nex">
        <div class="face-nex-top"></div>
        <slot name="content"></slot>
      </div>
      
      <!-- 表层内容 -->
      <div class="face face-over">
        <h2 :style="{background:bg}">
            <slot name="title"></slot>
        </h2> 
        <div class="faceimg">
            <slot name="pic"></slot>
        </div>                         
      </div>

  </div>
</template>

<script>
export default {
  name: 'cardMobile', 
  data() {
    return {
        // screenWidth: document.body.offsetWidth,     // 屏幕宽
        // screeHeight: document.body.offsetHeight,    // 屏幕高
        // isShow:false       
    }
    },
    props:{
        bg:{
            type:String,
            default:'#013d4a'
        }
  },
  methods:{
      // cardClick(){
      //   this.isShow=true
      //   // const target = e.target;
      //   console.log(this);
      //   console.log(this.$el);
      //   // console.log(this.$el.offsetWidth);
      //   // console.log(target.offsetWidth)
      //   // console.log(this.$el.parentNode.parentNode.parentNode.offsetLeft);

      //   // 获取盒子与窗口左边的距离
      //   const windowLeft=this.$el.parentNode.parentNode.parentNode.offsetLeft;
      //   const windowTop=this.$el.parentNode.parentNode.parentNode.offsetTop;

      //   const toLeft = (this. screenWidth / 2- this.$el.offsetWidth/2-windowLeft) + 'px';
      //   const toTop = (this.screeHeight/ 2- this.$el.offsetHeight/2-windowTop) + 'px';

      //   this.$el.style.transition = '2s'
      //   this.$el.style.transform = 'translate(' + toLeft + ',' + toTop + ') scale(2,1)';

      //   // target.style.width =100+'%'
      // }
  }
}
</script>

<style scoped>
.cardMobile{
  /* display:inline-block; */
    position: relative;
    width: 100%;
    height: 60vh;
    background: #fff;
    border-radius: 20px;
    box-shadow: 1px 1px 20px rgba(0,0,0,.5);
    padding-top: 6.66vh;
    text-align: center;
    font-size: 2vh;
    transition: .5s;
}
    
.face {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

/* 里层 */
.face-nex {
    /* background: #fff; */  
    color: #013d4a;
    letter-spacing: 2px;
    line-height: 3.06vh;
    box-sizing: border-box;
}

/* 里层上面遮挡层 */
.face-nex-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 14%;
    background:#fff;
    border-radius: 15px;
}

/* 里层下面内容 */
dl {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 86%;
    padding: 0px 10px 0px;
    overflow: auto;
}

dl::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}

/* 防止滚动条滑动失效 */
.cardMobile:hover dl {
  z-index: 50;
}

.face-nex dt {
    font-weight: 600;
}

.face-nex dd {
    margin-bottom: 10px;
    text-align: left;
    text-indent:2em;
}

/* 表层 */
.face-over h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: #8adecf; */
    border-radius: 15px;
    padding-top: 40vh;
    font-size: 3em;
    text-align: center;
    box-sizing: border-box;
    transition: .5s;
}

.cardMobile:hover .face-over h2 {
    display: grid;
    place-items: center;
    top: 20px;
    height: 4.66vh;
    width: 8.8vw;
    border-radius: 8px;
    border: 2px solid #013d4a;
    background: transparent;
    padding: 2px;
    font-size: 2.6vh;
    color: #013d4a;
}

.face-over .faceimg {
    position: absolute;
    width: 18vw;
    height: 37vh;
    transition: .5s;
    transform: translateY(-20%);
}

.face-over .faceimg img {
    width: 100%;
    height: 100%;
}

/* 图片变透 */
.cardMobile:hover .face-over .faceimg {
    opacity: .2;
    bottom: 0;
}

</style>