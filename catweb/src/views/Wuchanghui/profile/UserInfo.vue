<template>
  <div class="userInfo">
    <div class="image pos-ab">
      <img class="dp-bk full" src="../../../assets/images/front-end3.png" alt="">
    </div>
    <div v-if="isSign === false" class="userInfoFai t-al-cent pos-re full">
      <h2 class="title">你还未报名，点击下方按钮报名后即可查看个人信息</h2>
      <div class="signBtn pos-ab">
        <router-link to="/app" class="dp-bk full">我要报名</router-link>
      </div>
    </div>
    <div v-else class="UserInfoSuc pos-re full">
      <h2 class="title t-al-cent">个人信息</h2>
      <form action="">
        <table>
          <tbody>
            <tr>
              <td>姓名：</td>
              <td>{{userName}}</td>
            </tr>
            <tr>
              <td>学号：</td>
              <td>{{stuNum}}</td>
            </tr>
            <tr>
              <td>学院：</td>
              <td>{{collage}}</td>
            </tr>
            <tr>
              <td>专业：</td>
              <td>{{major}}{{clazz}}</td>
            </tr>
            <tr>
              <td>报名情况：</td>
              <td>{{signDetail}}</td>
            </tr>
            <tr>
              <td>报名方向：</td>
              <td>{{direction}}</td>
            </tr>
            <tr>
              <td>个人介绍：</td>
              <td class="pos-re">
                <div class="selfIntro pos-ab mt-5 ">{{introduce}}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
  import {getUserInfo} from '../../../network/getUserInfo'

  export default {
    name: 'UserInfo',
    data() {
      return {
        isSign: '',
        userName: '',
        stuNum: '',
        collage: '',
        major: '',
        clazz: '',
        signDetail: '',
        direction: '',
        introduce: ''
      }
    },
    methods: {
      toSetUserInfo() {
        this.$router.push('/profile/setUserInfo')
      }
    },
    created() {
      /* 获取用户信息 */
      getUserInfo().then(res => {
        console.log(res);
      if(res.data) {
        this.isSign = true;
      } else {
        this.isSign = false
      }
      this.userName = res.data.name
      this.stuNum = res.data.stuNumber
      this.collage = res.data.collage
      this.major = res.data.major
      this.clazz = res.data.clazz
      if(this.isSign) {
        this.signDetail = '已报名'
        this.direction = res.data.direction
      } else {
        this.signDetail = '未报名'
        this.direction = '未报名'
      }
      this.introduce = res.data.introduce
      })
    }
  }
</script>

<style scoped>
  .userInfo .image {
    width: 40vh;
    height: 40vh;
    top: 10vh;
    right: 0;
  }

  .userInfoFai .title {
    padding-top: 10vh;
    font-size: 4vh;
    color: black;
  }

  .userInfoFai .signBtn {
    width: 10vw;
    height: 6vh;
    line-height: 6vh;
    font-size: 3vh;    
    background: lightblue;
    left: 50%;
    top: 40vh;
    margin-top: -3vh;
    margin-left: -5vw;
  }

  .userInfo {
    font-family: 'STXingkai';
    margin-top: 0;
  }

  .userInfo .UserInfoSuc {
    font-size: 2.5vh;
  }

  .userInfo .UserInfoSuc .title {
    overflow: hidden;
    padding-top: 5vh;
    font-size: 4vh;
  }

  .userInfo .UserInfoSuc table {
    margin: 5vh 0 0 5vw;
    border-collapse: collapse;
  }

  .userInfo .UserInfoSuc table tr {
    border-left: .5vw solid lightslategray;
    border-radius: .5vw;
  }

  .userInfo .UserInfoSuc table td {
    padding: 2vh 1vw;
  }

  .userInfo .UserInfoSuc table .selfIntro {
    top: 1vh;
    border-radius: 1vh;
    line-height: 5vh;
    height: 15vh;
    width: 30vw;
    background: white;
    vertical-align: top;
    padding-left: .5vw;
    overflow-y: scroll;
  }
</style>