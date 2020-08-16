<template>
  <div class="register" :class="{RegLeftBorder:RegLeftBorder}">
    <img src="@/assets/img/CATlogo.jpg" alt="" class="catlogo">
    <div class="title">Create a  Account</div>
    <div class="account">
      <div class="tips">Account</div>
      <input type="text" class="RegAccount" placeholder="Username">
    </div>
    <div class="password">
      <div class="tips">Password</div>
      <input type="password" class="RegPassword" placeholder="Password">
    </div>
    <div class="phoneNum">  
      <div class="tips">E-mail</div>
      <input type="text" class="RegPn" placeholder="E-mail">
    </div>
    <div class="test">
      <input type="text" class="code" placeholder="Code">
      <div class="send">Send</div>
    </div>
    <div class="cancelReg">
      <div class="cancel" @click="toLogin">Cancel</div>
      <div class="reg">Register</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  methods:{
    toLogin(){
      this.$bus.$emit('toLogin')
      this.RegLeftBorder=false
    }
  },
  data(){
    return {
      RegLeftBorder:false
    }
  },
  mounted(){
    this.$bus.$on('toReg',()=>{
      this.RegLeftBorder=true
    })
  }
  
};
</script>

<style scoped>
.catlogo{
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
.RegLeftBorder{
  border-radius: 1vw 0 0 1vw;
}
.title{
  font-size: 3vh;
  margin-bottom: 4vh;
  z-index: 2;
}
.RegAccount,.RegPassword,.RegPn{
  margin-bottom: 2vh ;
  padding: 2vh 0;
  width: 18vw;
  height: 4vh;
  border: none;
  border-bottom: rgb(78, 156, 146) .2vw solid;
  background-color: inherit;
}
.tips{
  font-size: 2vh;
  color: rgb(44, 134, 104);
}
.test{
  margin-top: 1vh;
  width: 18vw;
  height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.code{
  padding: 2vh 0;
  width: 10vw;
  height: 4vh;
  border: none;
  border-bottom: rgb(78, 156, 146) .2vw solid;
  background-color: inherit;
}
.send{
  width: 6vw;
  height: 4vh;
  line-height: 4vh;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 3vh;
  color: rgb(83, 82, 82);
}
.cancelReg{
  margin-top: 4vh;
  width: 18vw;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.87);
}
.cancel{
  box-sizing: content-box;
  width: 8.5vw;
  height: 4vh;
  line-height: 4vh;
  border-radius: .5vh;
  background-color: rgb(87, 9, 129);
  text-align: center;
  cursor: pointer;
}
.reg{
  box-sizing: content-box;
  width: 8.5vw;
  height: 4vh;
  line-height: 4vh;
  border-radius: .5vh;
  background-color: rgb(30, 117, 133);
  text-align: center;
  cursor: pointer;
}
</style>