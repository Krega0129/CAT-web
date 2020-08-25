<template>
  <div class="home">123123
    <el-upload
  class="avatar-uploader"
  action="https://175.24.113.119:8080/cat-registration/userInfo/uploadPhoto"
  :headers="headers"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="upload" :src="upload" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </div>
  
</template>

<script>
export default {
  name:'home',
  data() {
      return {
        upload: '',
        headers: {'Content-Type': 'multipart/form-data'} 
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.upload = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        
      }
    }
}
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
    border-color: #409EFF;
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