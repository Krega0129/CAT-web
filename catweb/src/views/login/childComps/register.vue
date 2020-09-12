<template>
  <div class="register" :class="{RegLeftBorder:RegLeftBorder}">
    <img src="@/assets/img/CATlogo.jpg" alt class="catlogo" />
    <div class="title">Create an account</div>
    <div class="account">
      <div class="tips">Account</div>
      <input
        type="text"
        class="RegAccount"
        :class="{isWarn:!isAccountOK}"
        placeholder="请输入8-16位数字,字母"
        @input="testAccount"
        v-model="account"
        @blur="existAccount"
      />
    </div>
    <div class="password">
      <div class="tips">Password</div>
      <input
        type="password"
        class="RegPassword"
        :class="{isWarn:!isPasswordOK}"
        placeholder="请输入8-16位数字,字母"
        @input="testPassword"
        v-model="password"
      />
    </div>
    <div class="phoneNum">
      <div class="tips">Phone</div>
      <input
        type="text"
        class="RegPn"
        :class="{isWarn:!isPhoneOK}"
        placeholder="手机号码"
        @input="testPhone"
        v-model="phone"
        @blur="existPhone"
      />
    </div>
    <div class="test">
      <input type="text" class="code" placeholder="验证码" v-model="code" />
      <div class="send" @click="send" :class="{btndisabled:!btnNoDisabled}" @keydown.enter="register">{{sendMessage}}</div>
    </div>
    <div class="cancelReg">
      <div class="cancel" @click="toLogin">返回</div>
      <div class="reg" @click="register">注册</div>
    </div>
  </div>
</template>

<script>
import {
  getPhoneCode,
  register,
  judgeExistPhone,
  judgeExistAccount,
} from "@/network/login";
export default {
  name: "register",
  methods: {
    toLogin() {
      this.$bus.$emit("toLogin");
      this.RegLeftBorder = false;
    },
    testAccount() {
      const AccountReg = /^[a-zA-Z0-9]{8,16}$/;
      if (AccountReg.test(this.account)) {
        this.isAccountOK = true;
      } else {
        this.isAccountOK = false;
      }
    },
    testPassword() {
      const PasswordReg = /^[a-zA-Z0-9]{8,16}$/;
      if (PasswordReg.test(this.password)) {
        this.isPasswordOK = true;
      } else {
        this.isPasswordOK = false;
      }
    },
    testPhone() {
      const PhoneReg = /^1\d{10}$/;
      if (PhoneReg.test(this.phone)) {
        this.isPhoneOK = true;
      } else {
        this.isPhoneOK = false;
      }
    },
    send() {
      if (this.btnNoDisabled) {
        if (
          this.isPhoneOK &&
          !this.haveExistAccount &&
          !this.haveExistPhone &&
          this.account != null &&
          this.password != null &&
          this.phone != null 
        ) {
          const data = { phone: this.phone };
          let countdown = setInterval(() => {
            if (this.sendTime <= 0) {
              clearInterval(countdown);
              this.sendTime = 60;
              this.btnNoDisabled = true;
              this.sendMessage = "发送";
            } else {
              this.sendTime--;
              this.btnNoDisabled = false;
              this.sendMessage = `${this.sendTime}后重新获取`;
            }
          }, 1000);
          getPhoneCode(data).then((res) => {
            this.preCode = res.data
          });
        }
      }
    },
    register() {
      if (
        this.isPhoneOK &&
        this.isAccountOK &&
        this.isPasswordOK &&
        !this.haveExistAccount &&
        !this.haveExistPhone &&
        this.code != "" &&
        this.account != "" &&
        this.password != "" &&
        this.phone != ""
      ) {
        const data = {
          code: this.preCode,
          password: this.password,
          phone: this.phone,
          preCode:this.code,
          username: this.account,
        };
        register(data).then((res) => {
          if (res.code == 2508) {
            this.$notify.error({
              title: "警告",
              message: "验证码错误",
              duration: 4500,
              position: "bottom-right",
            });
          } else if (res.code == 2202) {
            this.$notify.success({
              title: "成功",
              message: "注册成功",
              duration: 4500,
              position: "bottom-right",
            });
            setTimeout(() => {
              this.$router.go(0);
            }, 1000);
          }
        });
      }
    },
    existPhone() {
      const data = { phone: this.phone };
      judgeExistPhone(data).then((res) => {
        if (res.code == 2201) {
          this.haveExistPhone = true;
          this.$notify.error({
            title: "警告",
            message: "手机号已注册",
            duration: 4500,
            position: "bottom-right",
          });
        } else if (res.code == 2501) {
          this.haveExistPhone = false;
        }
      });
    },
    existAccount() {
      const data = { username: this.account };
      judgeExistAccount(data).then((res) => {
        if (res.code == 2209) {
          this.haveExistAccount = true;
          this.$notify.error({
            title: "警告",
            message: "账号已注册",
            duration: 4500,
            position: "bottom-right",
          });
        } else if (res.code == 2509) {
          this.haveExistAccount = false;
        }
      });
    },
  },
  data() {
    return {
      RegLeftBorder: false,
      account: null,
      password: null,
      phone: null,
      code: null,
      isAccountOK: true,
      isPasswordOK: true,
      isPhoneOK: true,
      btnNoDisabled: true,
      sendTime: 60,
      sendMessage: "发送",
      haveExistAccount: false,
      haveExistPhone: false,
      preCode:null
    };
  },
  mounted() {
    this.$bus.$on("toReg", () => {
      this.RegLeftBorder = true;
    });
  },
};
</script>

<style scoped>
.catlogo {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  z-index: 1;
  border-radius: 1vw 1vw 1vw 1vw;
}
.register {
  width: 30vw;
  height: 75vh;
  padding: 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 1vw 1vw 0;
  background-color: #ffffff;
  /* background-image: url('.../../../../../assets/img/forest.jpg'); */
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 45vh;
}
.RegLeftBorder {
  border-radius: 1vw 0 0 1vw;
}
.title {
  font-size: 3vh;
  margin-bottom: 4vh;
  z-index: 2;
}
.RegAccount,
.RegPassword,
.RegPn {
  margin-bottom: 2vh;
  padding: 2vh 0;
  width: 18vw;
  height: 4vh;
  border: none;
  border-bottom: rgb(78, 156, 146) 0.2vw solid;
  background-color: inherit;
  font-size: 2vh;
}
.tips {
  font-size: 2.2vh;
  color: rgb(44, 134, 104);
}
.test {
  margin-top: 1vh;
  width: 18vw;
  height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.code {
  padding: 2vh 0;
  width: 10vw;
  height: 4vh;
  border: none;
  border-bottom: rgb(78, 156, 146) 0.2vw solid;
  background-color: inherit;
  font-size: 2vh;
}
.send {
  width: 6vw;
  height: 4vh;
  line-height: 4vh;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 3vh;
  color: rgb(83, 82, 82);
  font-size: 1.9vh;
  color: black;
}
.btndisabled {
  color: #ffffff;
  background-color: rgb(238, 138, 138);
  border: 0.1vh solid #eb6464;
}
.cancelReg {
  margin-top: 4vh;
  width: 18vw;
  height: 4.5vh;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.87);
  font-size: 2vh;
  line-height: 4.6vh;
}
.cancel {
  box-sizing: content-box;
  width: 8.5vw;
  height: 4.5vh;
  border-radius: 0.5vh;
  background-color: rgb(87, 9, 129);
  text-align: center;
  cursor: pointer;
}
.reg {
  box-sizing: content-box;
  width: 8.5vw;
  height: 4.5vh;
  border-radius: 0.5vh;
  background-color: rgb(30, 117, 133);
  text-align: center;
  cursor: pointer;
}
.isWarn {
  border-bottom: rgb(245, 60, 60) 0.2vw solid;
}
</style>