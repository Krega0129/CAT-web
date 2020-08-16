<template>
  <div class="login">
    <img src="@/assets/img/CATlogo.jpg" alt="" class="catlogo">
    <div class="title">Sign In</div>
    <div class="account">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yonghu" />
      </svg>
      <input
        type="text"
        placeholder="Username"
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
        placeholder="Password"
        @blur="Pablur"
        v-model="password"
        :class="{active:Pfocus,danger:isdanger}"
        @focus="Pafocus"
      />
    </div>
    <div class="loginbtn" @click="judge" :class="{incorrect:isincorrect}">{{dangerMessage}}</div>
    <div class="tips">
      <h5>
        Don't have a account?
        <span class="signup" @click="toReg" >Sign up</span>
      </h5>
      <h5 class="forget">Forget password?</h5>
    </div>
  </div>
</template>
<script>
import {loginPost} from '@/network/login'
export default {
  name: "login",
  data() {
    return {
      account: "",
      password: "",
      Afocus:false,
      Pfocus:false,
      isdanger:false,
      dangerMessage:'Login',
      isincorrect:false
    }
  },
  methods:{
    Acfocus(){
      this.Afocus = !this.Afocus
    },
    Acblur(){
      this.Afocus = !this.Afocus
    },
    Pafocus(){
      this.Pfocus = !this.Pfocus
    },
    Pablur(){
      this.Pfocus = !this.Pfocus
    },
    toReg(){
      this.$bus.$emit('toReg')
    },
    judge(){
      if(this.account == '' || this.password == ''){
        this.isdanger = true
        this.isincorrect = true
        this.dangerMessage = 'Incorrect username or password';
        setTimeout(()=>{
          this.isdanger = false;
          this.isincorrect = false
          this.dangerMessage = 'Login'
        },1500)
      }
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
  margin-bottom: 10vh;
  text-align: center;
  font-size: 3.5vh;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.login input {
  padding: 2.8vh 0;
  padding-left: 6vh;
  width: 20vw;
  height: 3vh;
  border: none;
  border-bottom: 0.5vh solid rgb(60, 192, 137);
  font-size: 2.5vh;
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
.login .danger{
  border-bottom-color:  rgb(209, 103, 103) ;
  box-shadow:  0 0 .5vh .2vh #aa4747;
}
.incorrect{
  background-color: #d84646c5;
  color: azure;
  font-size: 2.3vh;
}
.catlogo{
  position: absolute;
  top: 0;
  right:0;
  width: 10vw;

  border-radius: 1vw;
}
</style>