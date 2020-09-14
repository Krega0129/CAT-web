<template>
  <div class="login">
    <div class="loginbox">
      <span class="title">管理员登录</span>
      <div class="account">
        <el-input v-model="account" placeholder="请输入账号" style></el-input>
      </div>
      <div class="password" @keydown.enter="login">
        <el-input placeholder="请输入密码" v-model="password" show-password ></el-input>
      </div>

      <div class="submit">
        <el-button type="success" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { adminLogin } from "@/network/adminLogin";
export default {
  data() {
    return {
      account: null,
      password: null,
    };
  },
  methods: {
    login() {
      const data = { password: this.password, username: this.account };
      adminLogin(data).then((res) => {
        if (res.code == 1204) {
          const managerToken = res.data.managerToken;
          localStorage.setItem("managerToken", managerToken);
          this.$router.push("/backEnd");
        } else if (res.code == 1506) {
          this.$alert("账号或密码不正确", "", {
            confirmButtonText: "确定",
          });
        }
      });
    },
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      if(from.fullPath.indexOf('/backEnd/') == 0){
        vm.$alert('请先登录', '提示', {
          confirmButtonText: '确定',
        });
      }
    })
  }
};
</script>

<style scoped>
.login {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url(".../../../../../assets/img/backlogin.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.loginbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30vh auto;
  width: 30vw;
  background-color: #00000060;
  border-radius: 1vh;
}
.title {
  margin: 2vh 0;
  font-size: 3vh;
  color: rgb(240, 212, 212);
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
.el-input >>> .el-input__inner {
  color: #ffffff;
  border-radius: 0;
  border: none;
  border-bottom: #ffffff80 3px solid;
  background: transparent;
  font-size: 20px;
}
.submit >>> .el-button {
  border: none;
  margin-top: 3vh;
  margin-bottom: 5vh;
  width: 15vw;
  background-color: #fee140;
  background-image: linear-gradient(90deg, #fee140 0%, #fa709a 100%);
}
.el-input >>> .el-input__inner::placeholder {
  font-size: 14px;
  color: #ffffff;
}
</style>