<template>
  <div class="grid-content bg-purple-dark">
    <span class="input input--jiro">
      <input
        class="input__field input__field--jiro"
        type="text"
        id="input-10"
        v-model="username"
        v-on:blur="checkName()"
        v-on:focus="changeName()"
      />
      <label
        class="input__label input__label--jiro"
        :class="{ 'shake': isActive }"
        for="input-10"
      >
        <span class="input__label-content input__label-content--jiro">{{Name}}</span>
      </label>
    </span>
  </div>
</template>

<script>
export default {
  name: "inputName-form",
  data() {
    return {
      username: "",
      Name: "姓名",
      isActive: false,
    };
  },
  methods: {
    checkName: function () {
      let reg = /^[\u4e00-\u9fa5]{0,}$/;
      if (!reg.test(this.username)||this.username === "") {
        this.Name = "请输入正确姓名";
        this.isActive = true;
      } else if (this.username !== "") {
        this.Name = this.username;
        this.isActive = false;
        this.$bus.$emit("showName", this.Name);
      } 
    },
    changeName: function () {
      this.isActive = false;
      this.Name = "姓名";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/all.css/shake.scss);
@import url(../../assets/all.css/input.scss);
</style>