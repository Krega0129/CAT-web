<template>
  <div class="profile full">
    <div class="userInfo dp-fx">
      <div class="leftBar t-al-cent pos-re">
        <div class="userImg pos-re">
          <i class="setUserImg dp-bk pos-ab" @click="isSetUserImg = true"></i>
        </div>
        <h4 class="userName text-elli">用户名</h4>
        <ul class="funcList">
          <li><router-link class="dp-bk" to="/profile/userInfo">个人信息</router-link></li>
          <li><router-link class="dp-bk" to="/profile/progress">考核进度</router-link></li>
          <li><router-link class="dp-bk" to="/profile/meetingAppoint">预约面试</router-link></li>
          <li><router-link class="dp-bk" to="/profile/groups">我要进群</router-link></li>
        </ul>
        <div class="logout pos-ab"></div>
        <div class="setting pos-ab"></div>
      </div>
      <div class="dispInfo">
        <!-- 引入各个功能页面 -->
        <router-view></router-view>
      </div>
      <div class="setUserImgBox pos-ab" v-if="isSetUserImg">
        <input type="file" class="uploadFile" accept="image/jpg, image/png" name="" id="" @change="changeUserImg($event)">
        <input type="submit" value="提交" @click="changeUserImg($event)">
        <span class="setUserImgClose pos-ab t-al-cent" @click="isSetUserImg = false">X</span>
      </div>
    </div>
    <router-link to="/home" :style="{'font-size': '3vh'}">返回首页</router-link>
  </div>
</template>

<script>
  import {uploadUserImg} from '../../../network/uploadUserImg'

  export default {
    name: 'profile',
    data() {
      return {
        isSetUserImg: false
      }
    },
    methods: {
      changeUserImg(ev) {
        // uploadUserImg('/cat-registration/userInfo/uploadPhoto', {
        //   // upload: 
        // })
        
        console.log(ev.target.files[0]);
      }
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .profile {
    height: 100vh;
    overflow: hidden;
    background: url(../../../assets/images/bg3.jpg) no-repeat;
    background-size: cover;
  }

  .profile .userInfo {
    width: 70vw;
    height: 80vh;
    margin: 10vh auto 0 auto;
  }

  .profile .userInfo .leftBar{
    width: 20vw;
    height: 100%;
    padding: 10vh 6vw;
    background: white;
    box-sizing: border-box;
    box-shadow: .1vw 0 1vw gray;
  }

  .profile .userInfo .leftBar .userImg {
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    background: url(../../../assets/images/userImg.jpg);
    background-size: 100%;
  }

  .profile .userInfo .leftBar .userImg .setUserImg {
    background: url(../../../assets/images/setUserImg.png) no-repeat white center center;
    background-size: 3vh;
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: url('../../../assets/images/cursor-hover.png'), auto;
  }

  .profile .userInfo .leftBar .userName {
    font-size: 3vh;
    line-height: 10vh;
  }

  .profile .userInfo .leftBar .funcList {
    width: 100%;
    margin-top: 5vh;
    line-height: 6vh;
  }

  .profile .userInfo .leftBar .funcList li {
    height: 6vh;
    line-height: 6vh;
    border-top: .3vh gray solid;
  }

  .profile .userInfo .leftBar .funcList li a {
    font-size: 3vh;
  }

  .profile .userInfo .leftBar .funcList li:last-child {
    border-bottom: .3vh gray solid;
  }

  .profile .userInfo .leftBar .logout {
    width: 3vh;
    height: 3vh;
    bottom: 4vh;
    left: 4vh;
    background: url(../../../assets/images/logout.png);
    background-size: 3vh;
    cursor: url('../../../assets/images/cursor-hover.png'), auto;
  }

  .profile .userInfo .leftBar .setting {
    width: 5vh;
    height: 5vh;
    bottom: 4vh;
    right: 4vh;
    background: url(../../../assets/images/settings.png);
    background-size: 5vh;
    cursor: url('../../../assets/images/cursor-hover.png'), auto;
  }

  .profile .userInfo .dispInfo {
    width: 50vw;
    height: 100%;
    background: #f3f3f3;
    color: black;
  }

  .setUserImgBox {
    width: 35vw;
    height: 10vh;
    line-height: 10vh;
    padding: 0 2vw;
    top: 50%;
    left: 50%;
    margin-top: -5vh;
    margin-left: -15vw;
    background: white;
    border: 1px solid black;
  }

  .setUserImgClose {
    width: 3vh;
    height: 3vh;
    line-height: 3vh;
    right: 1vw;
    top: 1vh;
    border-radius: 50%;
    border: .2vh solid black;
  }
</style>