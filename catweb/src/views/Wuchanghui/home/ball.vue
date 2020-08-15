<template>
  <div class="ball">
    <svg xmln="http://www.w3.org/2000/svg" width="20px" height="20px" >
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
      default: '10px'
    },
    cY: {
      type: String,
      default: '10px'
    },
    cr: {
      type: String,
      default: '10px'
    },
    fillColor: String,
  }
}
</script>