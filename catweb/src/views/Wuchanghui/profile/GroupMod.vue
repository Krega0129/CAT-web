<template>
  <div class="GroupMod" :style="{width: ModWidth, height: ModHeight, 'margin-bottom': marBot}">
    <div class="pic" :style="{width: picWidth, height: picHeight}">
      <slot name="pic"></slot>
    </div>
    <div class="msg" :style="{background: msgColor}">
      <slot name="msg"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GroupMod',
    props: {
      ModWidth: String,
      ModHeight: String,
      picWidth: String,
      picHeight: String,
      marBot: {
        type: String,
        default: '0'
      },
      msgColor: {
        type: String,
        default: 'white'
      }
    }
  }
</script>

<style scoped>
  .GroupMod .pic img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .GroupMod .msg {
    width: 100%;
  }
</style>