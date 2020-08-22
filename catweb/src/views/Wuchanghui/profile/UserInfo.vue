<template>
  <div class="UserInfo">
    <h2 class="title t-al-cent">个人信息</h2>
    <form action="">
      <table>
        <tbody>
          <tr>
            <td>姓名：</td>
            <td>用户名</td>
          </tr>
          <tr>
            <td>学号：</td>
            <td>3120000000</td>
          </tr>
          <tr>
            <td>账号：</td>
            <td>***********</td>
          </tr>
          <tr>
            <td>学院：</td>
            <td>学院名称</td>
          </tr>
          <tr>
            <td>专业：</td>
            <td>专业名称</td>
          </tr>
          <tr>
            <td>报名情况：</td>
            <td>已 / 未报名</td>
          </tr>
          <tr>
            <td>报名方向：</td>
            <td>前端 / 后台</td>
          </tr>
          <tr>
            <td>手机号码：</td>
            <td>1**********</td>
          </tr>
          <tr>
            <td>QQ：</td>
            <td>**********</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    methods: {
      toSetUserInfo() {
        this.$router.push('/profile/setUserInfo')
      }
    }
  }
</script>

<style scoped>
  .UserInfo {
    font-size: 3vh;
  }

  .UserInfo .title {
    padding-top: 5vh;
    font-size: 4vh;
  }

  .UserInfo table {
    margin: 5vh 0 0 5vw;
    border-collapse: collapse;
  }

  .UserInfo table tr {
    border-left: .5vw solid lightskyblue;
  }

  .UserInfo table td {
    padding: 1vh 1vw;
  }
</style>