<template>
  <div class="login">
    <div class="loginbox">
      <span class="title">登录</span>
      <div class="account">
        <el-input v-model="account" placeholder="请输入内容" style></el-input>
      </div>
      <div class="password">
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>

      <div class="submit">
        <el-button type="success" @click="login">登录</el-button>
      </div>
    </div>
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </div>
</template>

<script>
import {adminLogin} from '@/network/adminLogin'
export default {
  data(){
    return {
      account:null,
      password:null,
      imageUrl: ''
    }
  },
  methods:{
    login(){
      const data = {password:this.password,username:this.account}
      adminLogin(data).then(res=>{
        if(res.code == 1204){
          const code = res.code
          localStorage.setItem("code",code);
          this.$router.push('/backEnd')
        }else if(res.code == 1506){
           this.$alert('账号或密码不正确', '', {
          confirmButtonText: '确定',
        });
        }
      })
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
}
</script>

<style scoped>
.login {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgb(37, 39, 73);
}
.loginbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30vh auto;
  width: 30vw;
  height: 35vh;
  background-color: #ffffff50;
}
.title {
  margin: 2vh 0;
  font-size: 2vh;
  color: black;
}
.account {
  margin: 2vh 0;
  width: 15vw;
}
.password {
  margin: 2vh 0;
  width: 15vw;
}
.submit {
  margin-top: 2vh;
}
</style>