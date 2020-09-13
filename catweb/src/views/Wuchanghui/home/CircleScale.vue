<template>
  <svg xmln="http://www.w3.org/2000/svg" :width="Wid" :height="Hei" class="svg circleScale pos-ab" :style="{left: Left, top: Top}">
    <g class="pos-ab">
      <circle v-for="R in rList" :cx="cirX" :cy="cirY" :r="R" :key="R" :fill="fillColor" class="circle" :style="{'transform-origin': transOri}"></circle>
    </g>
  </svg>
</template>

<script>
  export default {
    name: 'circleScale',
    props: {
      Left: [String],
      Top: [String],
      R: [String, Number],
      rList: [Array],
      fillColor: {
        type: String,
        default: 'yellow'
      },
      Wid: {
        type: String,
        default: '170vh'
      },
      Hei: {
        type: String,
        default: '170vh'
      },
      cirX: {
        type: String,
        default: '85vh'
      },
      cirY: {
        type: String,
        default: '85vh'
      },
      transOri: {
        type: String,
        default: '85vh 85vh'
      }
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .svg {
    top: 0;
  }

  .svg .circle {
    opacity: .2;
    animation: circleScale 2s linear infinite;
  }

  .svg:nth-of-type(2) .circle {
    animation-delay: -0.3s;
  }

  .svg:nth-of-type(3) .circle {
    animation-delay: -0.6s;
  }

  @keyframes circleScale {
    0% {
      transform: scale(.2);
    }
    50% {
      transform: scale(.6);
    }
    100% {
      transform: scale(1);
    }
  }
</style>