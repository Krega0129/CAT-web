<template>
  <div class="progress t-al-cent full">
    <div v-if="!isSign" class="profai t-al-cent pos-re full">
      <h2 class="title">你还未报名，点击下方按钮报名后即可查看考核进度</h2>
      <div class="signBtn pos-ab">
        <router-link to="/loginReg" class="dp-bk full">我要报名</router-link>
      </div>
    </div>
    <div v-else class="proSuc t-al-cent pos-re full">
      <h2 class="title">考核进度</h2>
      <div style="height: 60vh;" class="proBar pos-ab">
        <el-steps direction="vertical" :active="activeNum" finish-status="success">
          <el-step title="报名成功，准备笔试" ></el-step>
          <el-step class="step" :title="write" :description="wridesp" :status="wriStatus"></el-step>
          <el-step class="step" :title="face1" :description="face1desp" :status="face1Status"></el-step>
          <el-step class="step" :title="face2" :description="face2desp" :status="face2Status"></el-step>
          <el-step class="step" :title="work1" :description="work1desp" :status="work1Status"></el-step>
          <el-step class="step" :title="work2" :description="work2desp" :status="work2Status"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
  import {checkPro} from '../../../network/progress'

  export default {
    name: 'Progress',
    data() {
      return {
        isSign: sessionStorage.getItem('sign'),
        /* 进度表标题 */
        write: '笔试',
        face1: '第一轮面试',
        face2: '第二轮面试',
        work1: '第一轮考核',
        work2: '第二轮考核',
        /* 进度表秒速内容 */
        wridesp: '',
        face1desp: '',
        face2desp: '',
        work1desp: '',
        work2desp: '',
        /* 当前进度 */
        activeNum: 1,
        /* 考核状态 */
        wriStatus: '',
        face1Status: '',
        face2Status: '',
        work1Status: '',
        work2Status: '',
      }
    },
    mounted() {
      checkPro()
        .then(res => {
          /* 显示进度 */
          console.log(res);

          this.wridesp = `时间：${res.data[0].time}，地点：${res.data[0].content}`
          // this.wridesp = res.data[0].content
          if (res.data[0].adoptChecked == '通过') {
            this.write = '恭喜你通过了笔试'
            this.activeNum = 2
            this.wridesp = '';
          } else if (res.data[0].adoptChecked == '淘汰') {
            this.wriStatus = "error"
            this.write = '很遗憾，你没有通过我们的笔试'
            this.wridesp = '';
          }
          if (res.data[0].adoptChecked == '通过' && res.data[1] && res.data[1].adoptChecked == '未开始' && res.data[1].signChecked == '已预约') {
            this.face1desp = `时间：${res.data[1].time}，地点：${res.data[1].content}`
          } else if (res.data[0].adoptChecked == '通过' && res.data[1] && res.data[1].adoptChecked == '未开始' && res.data[1].signChecked == '未预约'){
            this.face1desp = '未预约'
          }

          if (res.data[1] && res.data[1].adoptChecked == '通过'){
            this.face1 = '恭喜你通过了一轮面试'
            this.face1desp = ''
            this.activeNum = 3
          } else if (res.data[1] && res.data[1].adoptChecked == '淘汰') {
            this.face1Status = "error"
            this.face1 = '很遗憾，你没有通过一轮面试'
            this.face1desp = ''
          }
          if (res.data[1].adoptChecked == '通过' && res.data[2] && res.data[2].adoptChecked == '未开始' && res.data[2].signChecked == '已预约') {
            this.face2desp = `时间：${res.data[2].time}，地点：${res.data[2].content}`
          } else if(res.data[1].adoptChecked == '通过' && res.data[2] && res.data[2].adoptChecked == '未开始' && res.data[2].signChecked == '未预约'){
            this.face2desp = '未预约'
          }

          if (res.data[2] && res.data[2].adoptChecked == '通过'){
            this.face2 = '恭喜你通过了二轮面试'
            this.activeNum = 4
            this.face2desp = ''
          } else if (res.data[2] && res.data[2].adoptChecked == '淘汰') {
            this.face2Status = "error"
            this.face2 = '很遗憾，你没有通过二轮面试'
            this.face2desp = ''
          }
          if (res.data[2].adoptChecked == '通过' && res.data[3] && res.data[3].adoptChecked == '未开始' && res.data[3].signChecked == '已预约') {
            this.work1desp = `时间：${res.data[3].time}，地点：${res.data[3].content}`
            // this.work1desp = res.data[3].content
          } else if(res.data[2].adoptChecked == '通过' && res.data[3] && res.data[3].adoptChecked == '未开始' && res.data[3].signChecked == '未预约'){
            this.work1desp = '未预约'
          }

          if (res.data[3] && res.data[3].adoptChecked == '通过'){
            this.work1 = '恭喜你通过了一轮考核'
            this.activeNum = 5
            this.work1desp = ''
          } else if (res.data[3] && res.data[3].adoptChecked == '淘汰') {
            this.work1Status = "error"
            this.work1 = '很遗憾，你没有通过一轮考核'
            this.work1desp = ''
          }
          if (res.data[3].adoptChecked == '通过' && res.data[4] && res.data[4].adoptChecked == '未开始' && res.data[4].signChecked == '已预约') {
            this.work2desp = `时间：${res.data[4].time}，地点：${res.data[4].content}`
            // this.work2desp = res.data[4].content
          } else if(res.data[3].adoptChecked == '通过' && res.data[4] && res.data[4].adoptChecked == '未开始' && res.data[4].signChecked == '未预约'){
            this.work2desp = '未预约'
          }

          if (res.data[4] && res.data[4].adoptChecked == '通过') {
            this.work2 = '恭喜你通过了 二轮考核'
            this.activeNum = 6
            this.work2desp = ''
          } else if (res.data[4] && res.data[4].adoptChecked == '淘汰') {
            this.work2Status = "error"
            this.work2 = '很遗憾，你没有通过二轮考核'
            this.work2desp = ''
          }
        })
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .profai .title {
    padding-top: 10vh;
    font-size: 4vh;
    color: black;
  }

  .profai .signBtn {
    width: 10vw;
    height: 6vh;
    line-height: 6vh;
    font-size: 3vh;    
    background: lightblue;
    left: 50%;
    top: 50%;
    margin-top: -3vh;
    margin-left: -5vw;
  }

  .proSuc .title {
    padding-top: 5vh;
    font-size: 4vh;
  }

  .proSuc .proBar {
    top: 12vh;
    left: 10vw;
  }

  .proSuc [class^=proPos] {
    height: 8vh;
  }

  .btn {
    width: 100px;
    top: 0;
  }
</style>