<template>
  <el-form :rules="rules" :model="ruleForm">
    <el-collapse v-model="activeName" accordion class="textBox">
      <el-collapse-item title="请大方介绍一下自己吧! " name="1" class="title1">
        <el-form-item prop="Intro">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.Intro"
            autofocus="true"
            :class="{ 'shake': isActive1 }"
            @blur="checkText1()"
            @focus="clearClass()"
          ></el-input>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="你对该方向了解多少呢？掌握了什么技能？" name="2">
        <el-form-item prop="skill">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.skill"
            :class="{ 'shake': isActive2 }"
            @blur="checkText2()"
            @focus="clearClass()"
          ></el-input>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      isActive1: false,
      isActive2: false,
      ruleForm: {
        skill: "",
        Intro: "",
      },
      rules: {
        Intro: [
          { required: true, message: "你好像忘了点什么", trigger: "blur" },
        ],
        skill: [
          { required: true, message: "你好像忘了点什么", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    checkText1: function () {
      if (this.ruleForm.Intro === "") {
        this.isActive1 = true;
      } else {
        this.isActive1 = false;
        this.$bus.$emit("showIntro", this.ruleForm.Intro);
      }
    },
    checkText2: function () {
      if (this.ruleForm.skill === "") {
        this.isActive2 = true;
      } else {
        this.$bus.$emit("showSkill", this.ruleForm.skill);
      }
    },
    clearClass: function () {
      this.isActive1 = false;
      this.isActive2 = false;
    },
  },
};
</script>

<style lang="scss">
@import url(../../assets/sass/shake.scss);
@import url(../../assets/sass/input.scss);
.textBox {
  border-bottom: none;
}
.el-collapse-item__header {
  color: #4cbb90;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.title1 .el-collapse-item__header {
  color: #f09424;
}
.el-form-item {
  margin-bottom: 0;
}
</style>