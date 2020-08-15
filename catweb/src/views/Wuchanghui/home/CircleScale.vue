<template>
  <svg xmln="http://www.w3.org/2000/svg" width="100%" :height="H" class="svg circleScale pos-ab" :style="{left: Left, top: Top}">
    <g class="pos-ab">
      <circle v-for="R in rList" cx="500" cy="500" :r="R" :key="R" :fill="fillColor" class="circle"></circle>
    </g>
  </svg>
</template>

<script>
  export default {
    name: 'circleScale',
    data() {
      return {
        H: window.innerHeight,
      }
    },
    props: {
      Left: [String],
      Top: [String],
      R: [String, Number],
      fillColor: {
        type: String,
        required: true
      },
      rList: [Array],
      fillColor: {
        type: String,
        default: 'yellow'
      }
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .svg {
    top: 0;
    width: 1000px;
    height: 1000px;
  }

  .svg .circle {
    opacity: .2;
    animation: circleScale 2s linear infinite;
    transform-origin: 500px 500px;
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