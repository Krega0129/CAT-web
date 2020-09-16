<template>
  <div class="barBox pos-ab t-al-cent" :style="{bottom: Bottom, width: Wid, 'z-index': zIndex}">
    <div class="bar" :style="{background: Color}">
      <span>
        <slot name="title"></slot>
      </span>
      <div class="cir pos-ab" :style="{color: Color}">
        <slot name="num"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barBox',
  props: {
    Wid: String,
    Color: String,
    Bottom: String,
    zIndex: String
  },
}
</script>

<style scoped>
  .barBox {
    overflow: hidden;
    border-radius: 0 2.5vh 2.5vh 0;
    left: 0;
    height: 5vh;
    box-shadow: 0 .1vh 1vh black;
  }

  .barBox .bar {
    color: white;
    font-size: 3vh;
    line-height: 5vh;
    width: 100%;
    height: 5vh;
  }

  .barBox .bar .cir {
    border-radius: 50%;
    line-height: 4vh;
    font-size: 4vh;
    width: 4vh;
    height: 4vh;
    background: white;
    top: .5vh;
    right: 0.5vh;
  }
</style>