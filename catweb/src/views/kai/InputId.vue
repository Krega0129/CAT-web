<template>
  <div>
    <span class="input input--jiro">
      <input
        class="input__field input__field--jiro"
        type="text"
        id="input-10"
        v-model="userId"
        v-on:blur="checkId()"
        v-on:focus="changeId()"
      />
      <label class="input__label input__label--jiro" :class="{ 'shake': isActive }" for="input-10">
        <span class="input__label-content input__label-content--jiro">{{Id}}</span>
      </label>
    </span>
  </div>
</template>

<script>

export default {
  name: "inputName-form",
  data() {
    return {
      userId: "",
      Id: "学号",
      isActive: false,
    };
  },
  methods: {
    checkId: function () {
      let reg = /^[0-9]{10}$/;
      if (this.userId === "" || !reg.test(this.userId)) {
        this.Id = "学号格式不正确";
        this.isActive = true;
      } else {
        this.Id = this.userId;
        this.isActive = false;
        this.$bus.$emit("showId", this.Id);
      }
    },
    changeId: function () {
      this.isActive = false;
      this.Id = "学号";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/all.css/input.scss);
</style>