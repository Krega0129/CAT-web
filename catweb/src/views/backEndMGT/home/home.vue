<template>
  <div class="home">
    <div class="header">可视化数据</div>
    <div class="mainBox">
      <EndNum></EndNum>
      <CollegeNum></CollegeNum>
      <MajorNum></MajorNum>
      <OutNum></OutNum>
    </div>
  </div>
</template>

<script>
import CollegeNum from "./collegeNum";
import EndNum from "./endNum";
import MajorNum from "./majorNum";
import OutNum from "./outNum";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    CollegeNum,
    EndNum,
    MajorNum,
    OutNum
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-left: 5vh;
  width: 87vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #ffffff;
}
.mainBox {
  // min-width: 1024px;
  // max-width:1600px;
  display: flex;
  flex-wrap: wrap;
  padding: 2vh;
  justify-content:space-evenly;
  // flex-wrap: wrap;
}
</style>