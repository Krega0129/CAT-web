<template>
  <div class="login">
    <img src="@/assets/img/CATlogo.jpg" alt class="catlogo" />
    <div class="title">Sign In</div>
    <i class="el-icon-refresh swap" @click="changeUser"></i>
    <div v-if="isUser">
      <div class="account">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu" />
        </svg>
        <input
          type="text"
          placeholder="输入账号"
          @focus="Acfocus"
          @blur="Acblur"
          :class="{active:Afocus,danger:isdanger}"
          v-model="account"
        />
      </div>
      <div class="password">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima2" />
        </svg>
        <input
          type="text"
          placeholder="输入密码"
          @blur="Pablur"
          v-model="password"
          :class="{active:Pfocus,danger:isdanger}"
          @focus="Pafocus"
        />
      </div>
    </div>
    <div v-else>
      <div class="account">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouji" />
        </svg>
        <input
          type="text"
          placeholder="输入手机"
          @focus="Acfocus"
          @blur="Acblur"
          :class="{active:Afocus,danger:isdanger}"
          v-model="account"
        />
      </div>
      <div class="code">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima2" />
        </svg>
        <input
          type="text"
          placeholder="输入验证码"
          @blur="Pablur"
          v-model="password"
          :class="{active:Pfocus,danger:isdanger}"
          @focus="Pafocus"
        />
        <div class="sendCode">{{message}}</div>
      </div>
    </div>
    <div class="loginbtn" @click="judge" :class="{incorrect:isincorrect}">{{dangerMessage}}</div>
    <div class="tips">
      <h5>
        Don't have a account?
        <span class="signup" @click="toReg">Sign up</span>
      </h5>
      <h5 class="forget">Forget password?</h5>
    </div>
  </div>
</template>
<script>
import { login } from "@/network/login";
export default {
  name: "login",
  data() {
    return {
      account: "",
      password: "",
      Afocus: false,
      Pfocus: false,
      isdanger: false,
      dangerMessage: "Login",
      isincorrect: false,
      isUser: true,
      message:'发送验证码'
    };
  },
  methods: {
    Acfocus() {
      this.Afocus = !this.Afocus;
    },
    Acblur() {
      this.Afocus = !this.Afocus;
    },
    Pafocus() {
      this.Pfocus = !this.Pfocus;
    },
    Pablur() {
      this.Pfocus = !this.Pfocus;
    },
    toReg() {
      this.$bus.$emit("toReg");
    },
    loginFailed() {
      this.isdanger = true;
      this.isincorrect = true;
      this.dangerMessage = "账号或密码不正确";
      setTimeout(() => {
        this.isdanger = false;
        this.isincorrect = false;
        this.dangerMessage = "登录";
      }, 1500);
    },
    judge() {
      if (this.account == "" || this.password == "") {
        this.loginFailed();
      } else {
        const data = { password: this.password, username: this.account };
        login(data)
          .then(res => {
            if (res.code == 2500) {
              this.loginFailed();
              this.$notify.error({
                title: "警告",
                message: "账号或密码不正确",
                duration: 4500,
                position: "bottom-right"
              });
            } else if (res.code == 2200) {
              this.$notify.success({
                title: "成功",
                message: "登录成功,即将跳转",
                duration: 4500,
                position: "bottom-right"
              });
              setTimeout(() => {
                this.$router.push("/home");
              }, 1500);
            }
          })
          .catch(() => {
            this.loginFailed();
          });
      }
    },
    changeUser() {
      this.isUser = !this.isUser
    }
  }
};
</script>

<style scoped>
.login {
  width: 30vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7vw;
  border-radius: 0 1vw 1vw 0;
  background-color: #ffffff;
  /* background-image: url('.../../../../../assets/img/forest.jpg'); */
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 45vh;
}
.title {
  position: relative;
  margin-bottom: 7vh;
  text-align: center;
  font-size: 3.5vh;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.swap {
  margin-left: 18vw;
  font-size: 4vh;
}
.login input {
  padding: 2.8vh 0;
  padding-left: 6vh;
  width: 20vw;
  height: 3vh;
  border: none;
  border-bottom: 0.5vh solid rgb(60, 192, 137);
  font-size: 2vh;
  background-color: inherit;
}
.account {
  position: relative;
  margin-bottom: 5vh;
}
.account > svg {
  position: absolute;
  top: 0.5vh;
  left: 0.5vh;
  font-size: 4.5vh;
  color: rgb(85, 158, 158);
}
.password {
  position: relative;
}
.code{
  display: flex;
  align-items: center;
  position: relative;
}
.code>input{
  font-size: 2vh;
  position: relative;
  width: 12vw;
}
.code>svg{
  position: absolute;
  top: 0.5vh;
  left: 0.5vh;
  font-size: 4.5vh;
  color: rgb(101, 79, 143);
}
.sendCode{
  margin-top: 1vh;
  width: 6vw;
  height: 4vh;
  line-height: 4vh;
  text-align: center;
  background-color: aquamarine;
  border-radius: 2vh;
}
.password > svg {
  position: absolute;
  top: 0.5vh;
  left: 0.5vh;
  font-size: 4.5vh;
  color: rgb(101, 79, 143);
}
.login .active {
  border-color: rgb(40, 128, 168);
  box-shadow: 0.5vh 0.8vh 1vh rgba(34, 171, 225, 0.835);
}
.loginbtn {
  box-sizing: content-box;
  margin-top: 5vh;
  width: 20vw;
  height: 5vh;
  line-height: 5vh;
  font-size: 2.5vh;
  background-color: rgba(34, 171, 225, 0.835);
  text-align: center;
  border-radius: 2vw;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  cursor: pointer;
}
.tips {
  width: 20vw;
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.7vh;
  color: rgba(42, 42, 42, 0.856);
}
.signup {
  font-size: 1.8vh;
  color: rgba(240, 152, 28, 0.76);
  cursor: pointer;
}
.forget {
  color: rgba(128, 128, 128, 0.822);
  cursor: pointer;
}
.login .danger {
  border-bottom-color: rgb(209, 103, 103);
  box-shadow: 0 0 0.5vh 0.2vh #aa4747;
}
.incorrect {
  background-color: #d84646c5;
  color: azure;
  font-size: 2.3vh;
}
.catlogo {
  position: absolute;
  top: 0;
  right: 0;
  width: 10vw;

  border-radius: 1vw;
}
</style>