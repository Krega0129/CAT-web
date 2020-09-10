<template>
  <div class="login">
    <img src="@/assets/img/CATlogo.jpg" alt class="catlogo" />
    <div class="title">
      {{title}}
      <i
        class="el-icon-back changePassword"
        @click="cancelChangePassword"
        v-if="ischangePassword"
      ></i>
    </div>
    <i class="el-icon-refresh swap" @click="changeUser" v-if="!ischangePassword"></i>
    <div v-if="isUser&&!ischangePassword">
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
          type="password"
          placeholder="输入密码"
          @blur="Pablur"
          v-model="password"
          :class="{active:Pfocus,danger:isdanger}"
          @focus="Pafocus"
        />
      </div>
    </div>
    <div v-else-if="!isUser&&!ischangePassword">
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
          v-model="phone"
        />
      </div>
      <div class="code">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima2" />
        </svg>
        <input
          type="password"
          placeholder="输入验证码"
          @blur="Pablur"
          v-model="code"
          :class="{active:Pfocus,danger:isdanger}"
          @focus="Pafocus"
        />
        <div class="sendCode" @click="send" :class="{btndisabled:!btnNoDisabled}">{{message}}</div>
      </div>
    </div>
    <div v-else-if="ischangePassword&&!fitCodeOK">
      <div class="account">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouji" />
        </svg>
        <input
          type="text"
          @input="testPhone"
          placeholder="输入手机"
          @focus="Acfocus"
          @blur="Acblur"
          :class="{active:Afocus,danger:!ischangePhoneOK}"
          v-model="changePhone"
        />
      </div>
      <div class="code">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima2" />
        </svg>
        <input
          type="password"
          placeholder="输入验证码"
          @focus="Pafocus"
          @blur="Pablur"
          :class="{active:Pfocus,danger:!ischangePhoneOK}"
          v-model="changeCode"
        />
        <div class="sendCode" @click="changeSend" :class="{btndisabled:!btnNoDisabled}">{{message}}</div>
      </div>
    </div>
    <div v-else-if="fitCodeOK">
      <div class="account">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouji" />
        </svg>
        <input
          type="text"
          placeholder="输入8-16位数字或字母"
          @focus="Acfocus"
          @blur="Acblur"
          :class="{active:Afocus,danger:!ischangePasswordOK}"
          v-model="changePassword"
        />
      </div>
    </div>
    <div></div>
    <div class="loginbtn fit" v-if="ischangePassword&&!fitCodeOK" @click="fitCode">验证</div>
    <div class="loginbtn fit" v-else-if="fitCodeOK" @click="changePassword1">确认修改</div>
    <div
      class="loginbtn"
      @click="judge"
      :class="{incorrect:isincorrect}"
      v-else-if="!ischangePassword&&!fitCodeOK"
    >{{dangerMessage}}</div>
    <div class="tips">
      <h5>
        <span class="signup" @click="toReg">注册账号</span>
      </h5>
      <h5 class="forget" @click="forgetPassword">忘记密码?</h5>
    </div>
  </div>
</template>
<script>
import {
  login,
  phoneLogin,
  getPhoneCode,
  changePassword,
  forgetPassword,
  judgeExistPhone,
} from "@/network/login";
export default {
  name: "login",
  data() {
    return {
      title: "登录",
      account: "",
      password: "",
      Afocus: false,
      Pfocus: false,
      isdanger: false,
      dangerMessage: "登录",
      isincorrect: false,
      isUser: true,
      message: "发送验证码",
      phone: null,
      code: null, //储存验证码
      btnNoDisabled: true,
      sendTime: 60,
      preCode: null, //储存token,
      changePhone: null, //用于修改密码 手机验证
      changeCode: null, // 用于修改密码  验证码验证
      changePassword: null, // 用于修改密码
      ischangePassword: false, //
      ischangePhoneOK: true,
      changePreCode: null,
      fitCodeOK: false,
      ischangePasswordOK: false,
      existPhoneCode: null,
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
      this.dangerMessage = "输入不正确";
      setTimeout(() => {
        this.isdanger = false;
        this.isincorrect = false;
        this.dangerMessage = "登录";
      }, 1500);
    },
    judge() {
      if (this.isUser) {
        if (this.account == "" || this.password == "") {
          this.loginFailed();
        } else if (this.isdanger == false) {
          const data = { password: this.password, username: this.account };
          login(data)
            .then((res) => {
              if (res.code == 2500) {
                this.loginFailed();
                this.$notify.error({
                  title: "警告",
                  message: "账号或密码不正确",
                  duration: 4500,
                  position: "bottom-right",
                });
              } else if (res.code == 2200) {
                const data = res.data;
                localStorage.setItem("token", data);
                this.$notify.success({
                  title: "成功",
                  message: "登录成功,即将跳转",
                  duration: 4500,
                  position: "bottom-right",
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
      } else {
        if (this.phone == "" || this.code == "") {
          this.loginFailed();
        } else if (this.isdanger == false) {
          const data = {
            phone: this.phone,
            preCode: this.code,
            code: this.preCode,
          };
          phoneLogin(data)
            .then((res) => {
              if (res.code == 2503) {
                this.loginFailed();
                this.$notify.error({
                  title: "警告",
                  message: "手机号未注册",
                  duration: 4500,
                  position: "bottom-right",
                });
              } else if (res.code == 2200) {
                const data = res.data;
                localStorage.setItem("token", data);
                this.$notify.success({
                  title: "成功",
                  message: "登录成功,即将跳转",
                  duration: 4500,
                  position: "bottom-right",
                });
                setTimeout(() => {
                  this.$router.push("/home");
                }, 1500);
              } else if (res.code == 2506) {
                this.loginFailed();
                this.$notify.error({
                  title: "警告",
                  message: "验证码错误",
                  duration: 4500,
                  position: "bottom-right",
                });
              }
            })
            .catch(() => {
              this.loginFailed();
            });
        }
      }
    },
    changeUser() {
      this.isUser = !this.isUser;
    },
    send() {
      if (this.btnNoDisabled) {
        if (this.phone == null) {
          this.loginFailed();
        } else {
          const data = { phone: this.phone };
          let countdown = setInterval(() => {
            if (this.sendTime <= 0) {
              clearInterval(countdown);
              this.sendTime = 60;
              this.btnNoDisabled = true;
              this.message = "发送";
            } else {
              this.sendTime--;
              this.btnNoDisabled = false;
              this.message = `${this.sendTime}后重新获取`;
            }
          }, 1000);
          getPhoneCode(data).then((res) => {
            this.preCode = res.data;
          });
        }
      }
    },
    forgetPassword() {
      this.ischangePassword = true;
      this.fitCodeOK = false;
      this.title = "修改密码";
    },
    cancelChangePassword() {
      this.ischangePassword = false;
      this.title = "登录";
    },
    testPhone() {
      const PhoneReg = /^1\d{10}$/;
      if (PhoneReg.test(this.changePhone)) {
        this.ischangePhoneOK = true;
      } else {
        this.ischangePhoneOK = false;
      }
    },
    fitCode() {
      const data = { phone: this.changePhone };
      judgeExistPhone(data)
        .then((res) => {
          this.existPhoneCode = res.code;
        })
        .then(() => {
          if (this.ischangePhoneOK) {
            if (this.existPhoneCode == 2201) {
              if (
                this.ischangePhoneOK &&
                this.changePhone != "" &&
                this.changeCode != ""
              ) {
                const data = {
                  code:this.changePreCode,
                  /* code: "81dc9bdb52d04dc20036dbd8313ed055", */
                  preCode: this.changeCode,
                };
                forgetPassword(data).then((res) => {
                  if (res.code == 2206) {
                    this.$notify.success({
                      title: "成功",
                      message: "验证成功,请输入新密码",
                      duration: 2500,
                      position: "bottom-right",
                    });
                    this.ischangePasswordOK = true
                    this.fitCodeOK = true;
                    this.title = "输入新密码";
                  } else if (res.code == 2506) {
                    this.ischangePhoneOK = false;
                    setTimeout(() => {
                      this.ischangePhoneOK = true;
                    }, 1500);
                    this.$notify.error({
                      title: "警告",
                      message: "验证码不正确",
                      duration: 2500,
                      position: "bottom-right",
                    });
                    this.fitCodeOK = false;
                  }
                });
              }
            } else if (this.existPhoneCode == 2501) {
              this.ischangePhoneOK = false;
              setTimeout(() => {
                this.ischangePhoneOK = true;
              }, 1500);
              this.$notify.error({
                title: "警告",
                message: "手机号不存在",
                duration: 2500,
                position: "bottom-right",
              });
            }
          }
        });
    },
    changeSend() {
      if (this.btnNoDisabled) {
        if (this.changePhone != "" && this.ischangePhoneOK) {
          const data = { phone: this.changePhone };
          let countdown = setInterval(() => {
            if (this.sendTime <= 0) {
              clearInterval(countdown);
              this.sendTime = 60;
              this.btnNoDisabled = true;
              this.message = "发送";
            } else {
              this.sendTime--;
              this.btnNoDisabled = false;
              this.message = `${this.sendTime}后重新获取`;
            }
          }, 1000);
          getPhoneCode(data).then((res) => {
            this.changePreCode = res.data;
          });
        }
      }
    },
    changePassword1() {
      this.testPassword();
      if (this.changePassword != "" && this.ischangePasswordOK) {
        const data = {
          password: this.changePassword,
          phone: this.changePhone,
          preCode: this.changeCode,
          code:this.changePreCode/* '81dc9bdb52d04dc20036dbd8313ed055' */
        };
        changePassword(data).then((res) => {
          if (res.code == 2204) {
            this.$notify.success({
              title: "成功",
              message: "修改成功",
              duration: 2500,
              position: "bottom-right",
            });
            setTimeout(() => {
              this.$router.go(0);
            }, 1000);
          }else if(res.code == 2504||res.code == 2512){
            this.$notify.error({
                      title: "警告",
                      message: "修改失败",
                      duration: 2500,
                      position: "bottom-right",
                    });
        }
        });
      }
    },
    testPassword() {
      const PasswordReg = /^[a-zA-Z0-9]{8,16}$/;
      if (PasswordReg.test(this.changePassword)) {
        this.ischangePasswordOK = true;
      } else {
        this.ischangePasswordOK = false;
        setTimeout(() => {
          this.ischangePasswordOK = true;
        }, 1500);
        this.$notify.error({
          title: "警告",
          message: "密码不符合",
          duration: 2500,
          position: "bottom-right",
        });
      }
    },
  },
};
</script>

<style scoped>
.login .fit {
  background: linear-gradient(
    to right,
    #fcc467,
    #fcad68,
    #fca767,
    #fea468,
    #fd9c69
  );
}
.changePassword {
  position: absolute;
  top: -0.6vh;
  left: -6.5vw;
  font-size: 6vh;
}
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
.code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.code > input {
  font-size: 2vh;
  position: relative;
  width: 12vw;
}
.code > svg {
  position: absolute;
  top: 0.5vh;
  left: 0.5vh;
  font-size: 4.5vh;
  color: rgb(101, 79, 143);
}
.sendCode {
  margin-top: 2vh;
  margin-right: 1vw;
  width: 6vw;
  height: 4vh;
  line-height: 4vh;
  text-align: center;
  background-color: aquamarine;
  border-radius: 2vh;
  color: rgb(78, 78, 78);
  font-size: 1.7vh;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.btndisabled {
  color: #ffffff;
  background-color: rgb(238, 138, 138);
  border: 0.1vh solid #eb6464;
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
  font-size: 2vh;
  color: rgba(247, 138, 35, 0.925);
  cursor: pointer;
}
.forget {
  font-size: 1.8vh;
  color: rgba(83, 80, 233, 0.822);
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