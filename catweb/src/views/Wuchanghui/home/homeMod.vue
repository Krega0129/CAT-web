<template>
  <div class="homeMod pos-ab">
    <div class="pic">
      <slot name="pic"></slot>
    </div>
    <p class="title">
      <slot name="title"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'homeMod',
    props: {



      /* homeMod整个模块的位置 */
      // L: String,
      // T: String,
      // R: String,
      // B: String,
      /* svg圆形的位置 */
      // cL: String,
      // cT: String,
      // cR: String,
      // cB: String,
      /* svg圆形的圆心坐标和半径 */
      // cX: {
      //   type: String,
      //   default: '85vh'
      // },
      // cY: {
      //   type: String,
      //   default: '85vh'
      // },
      // cr: {
      //   type: String,
      //   default: '85vh'
      // },
      /* svg圆的填充色 */
      // fillColor: String,
      /* 透明度 */
      // opc: {
      //   type: String,
      //   default: '0.5'
      // },
      // path: String
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

  .homeMod .pic p {
    font-weight: bold;
  }
</style>