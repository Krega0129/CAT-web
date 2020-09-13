<template>
  <div class="profile full">
    <snowBG></snowBG>
    <div class="userProfile pos-ab dp-fx">
      <div class="leftBar t-al-cent pos-re">
        <div class="userImg pos-re">
          <img v-if="!userImgURL" src="../../../assets/images/userImg.jpg" alt="" class="dp-bk full">
          <img v-else :src="userImgURL" alt="" class="dp-bk full">
          <!-- <i class="setUserImg dp-bk pos-ab" @click="isSetUserImg = true"></i> -->
        </div>
        <h4 class="userName text-elli">{{userName}}</h4>
        <ul class="funcList">
          <li v-for="(item, index) in funList" :key="item[1]" class="pos-re" @click="liClick(index, item[0])" ref="funcLis">
            <i class="bg pos-ab dp-bk" ref="listBg"></i>
            <p tag="p" class="pos-ab full">{{item[1]}}</p>
          </li>
        </ul>
        <!-- <div class="setting pos-ab"></div> -->
      </div>
      <div class="dispInfo">
        <!-- 引入各个功能页面 -->
        <router-view></router-view>
      </div>
      <div class="setUserImgBox pos-ab" v-if="isSetUserImg">
        <input type="file" class="uploadFile" accept="image/jpg, image/png" name="" id="" @change="changeUserImg($event)">
        <input type="submit" value="提交" @click="changeUserImg($event)">
        <!-- <img class="viewImg dp-bk" :src="imgUrl" alt=""> -->
        <span class="setUserImgClose pos-ab t-al-cent" @click="isSetUserImg = false">X</span>
      </div>
    </div>
    <router-link to="/home" :style="{'font-size': '3vh'}" class="closeProfile pos-ab dp-bk t-al-cent">☚</router-link>
  </div>
</template>

<script>
  import {uploadUserImg} from '../../../network/uploadUserImg'
  import {getUserInfo} from '../../../network/getUserInfo'
  import {uploadUserHead} from '../../../network/uploadUserImg'
  import snowBG from '../snowBG'

  export default {
    name: 'profile',
    data() {
      return {
        // isSign: true,
        isSetUserImg: false,
        userName: 'C.A.T',
        userImgURL: '',
        // imgUrl: '',
        index: 0,
        funList: [
          ['/profile/userInfo', '个人信息'],
          ['/profile/progress', '考核进度'],
          ['/profile/meetingAppoint', '预约面试'],
          ['/profile/groups', '我要进群']
        ]
      }
    },
    components: {
      snowBG
    },
    methods: {
      // changeUserImg(ev) {
      //   // this.imgUrl = ev.target.value
      //   console.log(ev.target.value);
      // },
      logOut() {
        localStorage.removeItem('token');
        this.$message({
          message: '您已安全退出',
          type: 'success'
        })
        this.$router.replace('/home')
      },
      liClick(index, path) {
        const funcLis = this.$refs.funcLis;
        this.index = index;
        for (let i = 0; i < funcLis.length; i++) {
          this.$refs.listBg[i].style.width = 0;
          this.$refs.funcLis[i].style.color = '#57676f'
        }
        this.$refs.listBg[index].style.width = 30 + 'vw';
        this.$refs.funcLis[index].style.color = 'black'
        this.$router.replace(path)
      }
    },
    mounted() {
      switch(this.$router.history.current.path) {
        case '/profile/userInfo': this.index = 0; break;
        case '/profile/progress': this.index = 1; break;
        case '/profile/meetingAppoint': this.index = 2; break;
        case '/profile/groups': this.index = 3; break;
      }
      this.liClick(this.index)
      /* 获取用户信息 */
      getUserInfo().then(res => {
        if(res.data && res.data.head) {
          this.userImgURL = 'http://175.24.113.119:8080/cat_registration_war_exploded/' + res.data.head
          this.userName = res.data.name
        }
      })
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  /* .profile {
    height: 100vh;
    overflow: hidden;
    background: url(../../../assets/images/bg.jpg) no-repeat;
    background-size: cover;
  } */

  .profile .userProfile {
    top: 10vh;
    left: 15vw;
    width: 70vw;
    height: 80vh;
  }

  .profile .userProfile .leftBar{
    font-family: 'FZShuTi';
    background: white;
    color: black;
    width: 20vw;
    height: 100%;
    padding: 10vh 0;
    box-sizing: border-box;
    box-shadow: .1vw 0 1vw gray;
  }

  .profile .userProfile .leftBar .userImg {
    margin-left: 6vw;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
  }

  .profile .userProfile .leftBar .userImg img {
    border-radius: 50%;
  }

  .profile .userProfile .leftBar .userImg .setUserImg {
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

  .profile .userProfile .leftBar .userName {
    font-size: 3vh;
    line-height: 10vh;
  }

  .profile .userProfile .leftBar .funcList {
    padding: 0 3vw;
    width: 100%;
    margin-top: 5vh;
    line-height: 6vh;
  }

  .profile .userProfile .leftBar .funcList li {
    overflow: hidden;
    height: 6vh;
    width: 100%;
    line-height: 6vh;
  }

  .profile .userProfile .leftBar .funcList li .bg {
    transition: .5s;
    height: 6vh;
    background: lightblue;
    opacity: .3;
  }

  /* .profile .userProfile .leftBar .funcList li:hover .bg{
    width: .6vw !important;
  } */

  .profile .userProfile .leftBar .funcList li p {
    z-index: 2;
    font-size: 1.5vw;
  }

  .profile .userProfile .leftBar .setting {
    width: 5vh;
    height: 5vh;
    bottom: 4vh;
    right: 4vh;
    background: url(../../../assets/images/settings.png);
    background-size: 5vh;
    cursor: url('../../../assets/images/cursor-hover.png'), auto;
  }

  .profile .userProfile .dispInfo {
    width: 50vw;
    height: 100%;
    background: #eef2f5;
    box-shadow: .1vw 0 1vw gray;
    color: black;
  }

  .setUserImgBox {
    width: 35vw;
    height: 30vh;
    line-height: 10vh;
    padding: 0 2vw;
    top: 50%;
    left: 50%;
    margin-top: -15vh;
    margin-left: -15vw;
    background: white;
    border: 1px solid black;
  }

  .setUserImgBox .viewImg {
    width: 15vh;
    height: 15vh;
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

  .profile .closeProfile {
    top: 10vh;
    right: 10vw;
    width: 5vh;
    height: 5vh;
    line-height: 4vh;
    color: white;
    border: .2vw solid white;
    border-radius: 50%;
  }
</style>