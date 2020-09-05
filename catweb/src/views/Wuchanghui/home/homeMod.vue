<template>
  <div class="homeMod pos-ab">
    <div class="pic">
      <slot name="pic"></slot>
    </div>
    <svg xmln="http://www.w3.org/2000/svg" width="300" height="300" class="pos-ab" :style="{opacity: opc}">
      <circle cx="150" cy="150" :r="cr" :fill="fillColor" class="circle"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'homeMod',
    computed: {
      
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .homeMod {
    width: 300px;
    height: 300px;
    z-index: 1;
  }

  .homeMod .pic {
    transition: .5s;
    cursor: url('../../../assets/images/cursor-hover.png'),auto;
  }

  .homeMod .pic p {
    font-weight: bold;
  }
</style>