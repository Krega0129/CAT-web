<template>
  <div class="detail">
    <div class="back" @click="goBack">
      <i class="el-icon-back"></i>
      <span>返回</span>
      <span class="fontDetailed">个人信息详情</span>
    </div>
    <div class="mainInfo">
      <img :src="defaultHead" alt class="avatar" />
      <table class="detailed">
        <tr>
          <td class="column">姓名</td>
          <td>{{stuData.name}}</td>
          <td class="column">学院</td>
          <td>{{stuData.collage}}</td>
        </tr>
        <tr>
          <td class="column">学号</td>
          <td>{{stuData.stuNumber}}</td>
          <td class="column">专业</td>
          <td>{{stuData.major}}</td>
        </tr>
        <tr>
          <td class="column">方向</td>
          <td>{{stuData.direction}}</td>
          <td class="column">班级</td>
          <td>{{stuData.clazz}}</td>
        </tr>
      </table>
      <table class="stage">
        <tr>
          <td class="column">当前阶段</td>
          <td>{{stuData.stage}}</td>
          <td class="column">通过状况</td>
          <td>
            <span v-if="stuData.adoptChecked == 0">待审核</span>
          <span v-else-if="stuData.adoptChecked == 1" style="color:rgb(9, 223, 116)">通过</span>
          <span v-else-if="stuData.adoptChecked == 2" style="color:rgb(223, 9, 9)">淘汰</span>
         </td>
        </tr>
        <tr>
          <td class="column">预约下次面试时间</td>
          <td>{{stuData.appointTime}}</td>
          <td class="column">是否服从安排</td>
          <td>
            <span v-if="stuData.isObey == 1">不服从</span>
            <span v-else-if="stuData.isObey == 0">服从</span>
          </td>
        </tr>
      </table>
      <div class="introduce">
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item title="对方向的理解" name="0" style="font-size:5vh;">
            <article>{{stuData.dirSummary}}</article>
          </el-collapse-item>
          <el-collapse-item title="自我介绍" name="1">
            <article>{{stuData.introduce}}</article>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearch, StuDetail } from "@/network/admin.js";

export default {
  name: "detail",
  data() {
    return {
      activeNames: ["1"],
      stuData: {},
    };
  },
  methods: {
    handleChange(val) {},
    goBack() {
      this.$router.go(-1);
    },
  },
  computed:{
    defaultHead(){
      if(this.stuData.head){
        return this.stuData.head
      }else{
        return require("../../../assets/images/userImg.jpg")
      }
    }
  },
  created() {
    this.$bus.$on("outputStuNum", (stuNum) => {
      const data = {
        stuNumber: stuNum,
      };
      getSearch(data).then((res) => {
        this.stuData = new StuDetail(res.data[0]);
      });
    });
  },
  beforeDestroy() {
    this.$bus.$off("outputStuNum");
  },
};
</script>

<style scoped>
.back {
  position: relative;
  padding-left: 5vh;
  width: 87vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #ffffff;
  font-size: 2vh;
  cursor: pointer;
}
.fontDetailed {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
.back:hover {
  color: #409eff;
}
.mainInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  margin: 0 auto;
  margin-top: 1vw;
  width: 84vw;
  height: 90vh;
  background-color: #ffffff;
}
.avatar {
  margin: 0 auto;
  margin-bottom: 3vw;
  width: 7vw;
  height: 7vw;
}
.detailed {
  border-collapse: collapse;
  border-top: 1px solid #e6eaee;
  border-left: 1px solid #e6eaee;
}
.detailed tr td {
  width: 15vw;
  height: 5vh;
  line-height: 5vh;
  padding: 0 2vh;
  font-size: 2vh;
  border: 1px solid #a5bdd6;
  color: black;
}
.detailed tr td.column {
  background-color: #eff3f6;
  color: #393c3e;
  width: 10vw;
}
.stage {
  margin-top: 1vw;
  border-collapse: collapse;
  border-top: 1px solid #e6eaee;
  border-left: 1px solid #e6eaee;
}
.stage tr td {
  width: 15vw;
  height: 5vh;
  line-height: 5vh;
  padding: 0 2vh;
  font-size: 2vh;
  border: 1px solid #a5bdd6;
  color: black;
}
.stage tr td.column {
  background-color: #eff3f6;
  color: #393c3e;
  width: 10vw;
}
.introduce {
  margin-top: 2vw;
  width: 50vw;
  padding: 1vh;
}
</style>