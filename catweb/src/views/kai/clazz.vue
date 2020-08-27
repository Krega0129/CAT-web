<template>
  <el-form :model="ruleForm" :rules="rules">
    <el-form-item prop="major">
      <div class="block" :class="{ 'shake': isActive }">
        <el-cascader :model="ruleForm.major" :options="options" @change="handleChange" ref="node"></el-cascader>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      ruleForm: {
        major: [],
      },
      options: [
        {
          value: "计算机学院",
          label: "计算机学院",
          children: [
            {
              value: "软件工程",
              label: "软件工程",
              children: [
                {
                  value: "一班",
                  label: "一班",
                },
                {
                  value: "二班",
                  label: "二班",
                },
                {
                  value: "三班",
                  label: "三班",
                },
                {
                  value: "四班",
                  label: "四班",
                },
                {
                  value: "五班",
                  label: "五班",
                },
              ],
            },
            {
              value: "计算机科学与技术",
              label: "计算机科学与技术",
              children: [
                {
                  value: "一班",
                  label: "一班",
                },
                {
                  value: "二班",
                  label: "二班",
                },
                {
                  value: "三班",
                  label: "三班",
                },
                {
                  value: "四班",
                  label: "四班",
                },
                {
                  value: "五班",
                  label: "五班",
                },
                {
                  value: "六班",
                  label: "六班",
                },
                {
                  value: "七班",
                  label: "七班",
                },
              ],
            },
            {
              value: "网络工程",
              label: "网络工程",
              children: [
                {
                  value: "一班",
                  label: "一班",
                },
                {
                  value: "二班",
                  label: "二班",
                },
                {
                  value: "三班",
                  label: "三班",
                },
                {
                  value: "四班",
                  label: "四班",
                },
              ],
            },
            {
              value: "信息安全",
              label: "信息安全",
              children: [
                {
                  value: "一班",
                  label: "一班",
                },
                {
                  value: "二班",
                  label: "二班",
                },
              ],
            },
          ],
        },
      ],
      rules: {
        major: [
          {
            type: "array",
            required: true,
            message: "至少让我们能够找到你嘛",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleChange(value) {
      let clazz=value;
      this.$bus.$emit("showClazz", clazz);
    },
  },
};
</script>

<style lang="scss" >
.block {
  width: 300px;
  margin-left: 20px;
}
.el-cascader {
  display: block;
}
.el-form-item__error {
  position: absolute;
  left: 20px;
}
</style>