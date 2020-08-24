<template>
  <div class="Groups t-al-cent pos-re full">
    <h2 class="title">我要进群</h2>
    <div class="qrCodes dp-fx ju-btw fx-warp">
      <GroupMod ModWidth="21vw" ModHeight="50vh" picWidth="21vw" picHeight="20vw" marBot="3vh">
        <img src="@/assets/images/back-end.gif" slot="pic" alt="">
        <div class="msg" slot="msg">
          <h4>风里雨里，我在QQ群等你</h4>
        </div>
      </GroupMod>
      <GroupMod ModWidth="21vw" ModHeight="50vh" picWidth="21vw" picHeight="20vw">
        <img src="@/assets/images/back-end.gif" slot="pic" alt="">
        <div class="msg" slot="msg">
          <h4>风里雨里，我在微信群等你</h4>
        </div>
      </GroupMod>
    </div>
  </div>
</template>

<script>
  import GroupMod from './GroupMod'

  export default {
    name: 'Groups',
    components: {
      GroupMod,
    }
  }
</script>

<style scoped>
  .Groups .title {
    font-size: 4vh;
    padding: 6vh;
  }

  .Groups .qrCodes {
    color: black;
    width: 90%;
    margin: 0 auto;
  }

  .msg {
    font-size: 3vh;
    height: 10vh;
    line-height: 10vh;
  }
</style>