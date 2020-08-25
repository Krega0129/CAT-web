<template>
  <el-switch
    v-model="value"
    active-text="前端"
    inactive-text="后台"
    active-color="#4CBB90"
    inactive-color="#F09424"
    class="switchBox"
    @change="getDirection"
  ></el-switch>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getDirection() {
      this.$bus.$emit("showDirection", this.value);
    },
  },
};
</script>

<style lang="scss">
.el-switch {
  margin: 11px 0 0 20px;
}

.switchBox .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
/*打开时文字位置设置*/
.switchBox .el-switch__label--right {
  z-index: 1;
  right: -6px;
}
/*关闭时文字位置设置*/
.switchBox .el-switch__label--left {
  z-index: 1;
  left: 21px;
}
/*显示文字*/
.switchBox .el-switch__label.is-active {
  display: block;
}
.switchBox.el-switch .el-switch__core,
.el-switch .el-switch__label {
  width: 55px !important;
}
</style>