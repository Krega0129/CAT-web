<template>
  <div class="asideMenu">
    <div class="admin">
      <img src="@/assets/img/CATlogo.jpg" alt="" class="avatar">
      <div class="username">Admin</div>
    </div>
    <div class="menu">
      <ul>
      <li v-for="(item,index) in menuList" :key="index" :class="{'active':index === currentIndex}" @click="itemClick(index)">{{item}}</li></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideMenu",
  data(){
    return {
      menuList:['首页','信息管理','预约时间'],
      pathList:['home','info','setTime'],
      pathLists:['/backEnd/home','/backEnd/info','/backEnd/setTime'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$router.push(this.pathList[index])
    },
    changeCurrentIndex(){
      if(this.$route.path == this.pathLists[0])
        this.currentIndex = 0;
        else if(this.$route.path == this.pathLists[2])
          this.currentIndex = 2
          else this.currentIndex = 1;
    }
  },
  mounted(){
    this.changeCurrentIndex();
  }

};
</script>

<style scoped>
.asideMenu {
  width: 10vw;
  height: 100vh;
  background-color: #24344b;
}
.admin {
  padding: 4vw 3vw 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 13vw;
}
.avatar {
  margin-bottom: 3vh;
  width: 5vw;
  height: 5vw;
  background-color: #ffffff;
  border-radius: 100%;
}
.username{
  color: #ffffff;
  font-size: 2vh;
}
.menu{
  margin-top: 10vh;
}
.menu ul li{
  padding: 0 2vw;
  height: 6vh;
  color: #ffffff8c;
  line-height: 6vh;
  font-size: 2vh;
  background-color: #2B3C58;
  cursor: pointer;
}
.menu .active{
  color: #ffffff;
  background-color: #445f8b;
}
</style>