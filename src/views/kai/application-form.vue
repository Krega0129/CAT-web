<template>
  <div id="paper">
    <div class="goback" @click='goBack()'></div>
    <div class="application-form paper">
      <el-form>
        <el-row>
          <el-col :span="20">
            <h2 class="title">CAT报名表</h2>
          </el-col>
        </el-row>
        <el-row class="el-row2">
          <el-col :span="12">
            <h4 class="profession-selectName headName">头像</h4>
            <Head></Head>
          </el-col>
          <el-col :span="8">
            <InputName></InputName>
            <InputId></InputId>
          </el-col>
          <div class="clearfloat"></div>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h4 class="profession-selectName">所在专业&学院</h4>
            <Clazz class="profession-selectBox"></Clazz>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h4 class="direction-switchName">所选方向</h4>
            <Direction></Direction>
          </el-col>
        </el-row>
        <el-row class="el-row5">
          <el-col :span="20">
            <Message></Message>
          </el-col>
          <div class="clearfloat"></div>
        </el-row>
        <el-row class="el-row6">
          <el-col :span="20">
            <SubmitBtn></SubmitBtn>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import InputName from "./InputName";
import InputId from "./InputId";
import Clazz from "./clazz";
import Direction from "./FrontOrBack-Switch";
import Message from "./mainMessage";
import SubmitBtn from "./submitButton";
import Head from "./head";

export default {
  name: "application-form",
  components: {
    InputName,
    InputId,
    Clazz,
    Direction,
    Message,
    SubmitBtn,
    Head,
  },
  data() {
    return {
      username: "",
      Name: "姓名",
      isActive: false,
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!');
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
    // checkName: function () {
    //   if (this.username != "") {
    //     this.Name = this.username;
    //     this.isActive = false;
    //   } else {
    //     this.Name = "请输入正确格式";
    //     this.isActive = true;
    //   }
    // },
    // changeName: function () {
    //   this.isActive = false;
    //   this.Name = "姓名";
    // },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/sass/fold.scss);
.goback {
  position: absolute;
  top: 60px;
  left: 60px;
  height: 45px;
  width: 150px;
  background-image: url(../../assets/img/goback-pink.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(180deg);
  cursor: pointer;
}
.application-form {
  position: relative;
  left: 50%;
  margin-left: -350px;
  width: 700px;
  margin-top: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
.el-row2 {
  height: 200px;
}
.el-switch {
  top: 30px;
}
/* // .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// } */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  text-align: center;
  line-height: 100px;
}
.profession-selectName,
.direction-switchName {
  line-height: 100px;
  letter-spacing: 2px;
  margin: 0;
  float: left;
  font-size: 14px;
  color: #ed9521;
}
.headName {
  margin-right: 20px;
  line-height: 200px;
}
.direction-switchName {
  color: #24aae1;
}

.profession-selectBox {
  float: left;
  width: 250px;
  padding-top: 28px;
}
.clearfloat {
  clear: both;
  height: 0;
}
</style>
