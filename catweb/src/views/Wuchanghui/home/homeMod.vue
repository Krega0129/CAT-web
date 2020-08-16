<template>
  <!-- home页面中的模块 -->
  <div class="homeMod pos-ab" :style="{left: L, top: T, right: R, bottom: B}">
    <!-- 每个模块的图片和标题 -->
    <div class="pic">
      <slot name="pic"></slot>
      <slot name="title"></slot>
    </div>
    <!-- 背景圆 -->
    <svg xmln="http://www.w3.org/2000/svg" width="85vh" height="85vh" class="pos-ab" :style="{left: cL, top: cT, right: cR, bottom: cB, opacity: opc}">
      <circle :cx="cX" :cy="cY" :r="cr" :fill="fillColor" class="circle" :style="{'transform-origin': cX}"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'homeMod',
    props: {
      /* homeMod整个模块的位置 */
      L: String,
      T: String,
      R: String,
      B: String,
      /* svg圆形的位置 */
      cL: String,
      cT: String,
      cR: String,
      cB: String,
      /* svg圆形的圆心坐标和半径 */
      cX: {
        type: String,
        default: '85vh'
      },
      cY: {
        type: String,
        default: '85vh'
      },
      cr: {
        type: String,
        default: '85vh'
      },
      /* svg圆的填充色 */
      fillColor: String,
      /* 透明度 */
      opc: {
        type: String,
        default: '0.5'
      },
      path: String
    },
    computed: {
      
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .homeMod {
    width: 20.4vh;
    height: 20.4vh;
    z-index: 1;
  }

  .homeMod svg {
    width: 170vh;
    height: 170vh;
    z-index: -1;
  }

  .homeMod svg .circle {
    transition: .5s;
    transform: scale(0);
  }

  .homeMod .pic {
    transition: .5s;
    cursor: url('../../../assets/images/cursor-hover.png'),auto;
  }

  .homeMod .pic img {
    margin-bottom: 3.4vh;
  }

  .homeMod .pic img:hover {
    transition: .3s;
    transform: scale(1.2);
  }

  /* 鼠标移动到模块上面，背景圆显示出来 */
  .homeMod .pic:hover  + svg > .circle {
    transform: scale(1);
  }
</style>