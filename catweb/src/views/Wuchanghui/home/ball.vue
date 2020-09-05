<template>
  <div class="ball">
    <svg xmln="http://www.w3.org/2000/svg" width="3.4vh" height="3.4vh" >
      <circle :cx="cX" :cy="cY" :r="cr" :fill="fillColor" class="circle"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ball',
  props: {
    cX: {
      type: String,
      default: '1.7vh'
    },
    cY: {
      type: String,
      default: '1.7vh'
    },
    cr: {
      type: String,
      default: '1.7vh'
    },
    fillColor: String,
  }
}
</script>