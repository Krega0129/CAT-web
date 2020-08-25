<template>
  <div class="home">
    123123
    <input
      class="file"
      name="file"
      type="file"
      accept="image/png, image/gif, image/jpeg"
      @change="update"
    />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    update(e) {
      let file = e.target.files[0];
      let param = new FormData(); //创建form对象
      param.append("upload", file); //通过append向form对象添加数据
      console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.$http
        .post("http:// 	175.24.113.119:8080/cat-registration/userInfo/uploadPhoto", param, config)
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>