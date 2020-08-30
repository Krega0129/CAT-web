<template>
  <div class="info">
    <div class="header">用户信息管理</div>
    <search ref="search" :checkData="checkData"></search>
    <listShow :stageValue="stageValue" :directionValue="directionValue" ref="listShow"></listShow>
  </div>
</template>

<script>
import search from "./childComps/search";
import listShow from "./childComps/listShow";
export default {
  name: "info",
  components: {
    search,
    listShow
  },
  data() {
    return {
      stageValue: "",
      directionValue: "",
      checkData: ""
    };
  },
  created() {
    this.$bus.$on("getStageValue", () => {
      this.stageValue = this.$refs.search.stageValue;
      this.directionValue = this.$refs.search.directionValue;
    });
    this.$bus.$on("getCheckData", () => {
      this.checkData = this.$refs.listShow.checkData;
    });
  }
};
</script>

<style scoped>
.header {
  padding-left: 5vh;
  width: 89vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #ffffff;
}
</style>