<template>
  <div class="progress pos-re t-al-cent full">
    <div class="image pos-ab">
      <img class="dp-bk full" src="../../../assets/images/rungif.gif" alt="">
    </div>
    <div v-if="isSign === false" class="profai t-al-cent pos-re full">
      <h2 class="title">你还未报名，点击下方按钮报名后即可查看考核进度</h2>
      <div class="signBtn pos-ab">
        <router-link to="/app" class="dp-bk full">我要报名</router-link>
      </div>
    </div>
    <div v-else-if="isSign" class="proSuc t-al-cent pos-re full">
      <h2 class="title">考核进度</h2>
      <div style="height: 60vh; width: 50vw" class="proBar pos-ab">
        <el-steps direction="vertical" :active="activeNum" finish-status="success">
          <el-step title="报名成功，准备笔试" ></el-step>
          <el-step class="step" :title="proTitle[0]" :description="msg[0]" :status="proStatus[0]"></el-step>
          <el-step class="step" :title="proTitle[1]" :description="msg[1]" :status="proStatus[1]"></el-step>
          <el-step class="step" :title="proTitle[2]" :description="msg[2]" :status="proStatus[2]"></el-step>
          <el-step class="step" :title="proTitle[3]" :description="msg[3]" :status="proStatus[3]"></el-step>
          <el-step class="step" :title="proTitle[4]" :description="msg[4]" :status="proStatus[4]"></el-step>
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
        /* 报名状态 */
        isSign: '',
        /* 当前进度 */
        activeNum: 1,
        /* 进度条标题 */
        proTitle: ['笔试', '第一轮面试', '第二轮面试', '第一轮考核', '第二轮考核'],
        /* 进度条消息 */
        msg: ['', '', '', '', ''],
        /* 进度条状态 */
        proStatus: ['', '', '', '', ''],
        /* 进度条成功信息 */
        sucMsg: ['恭喜你通过了笔试', '恭喜你通过了一轮面试', '恭喜你通过了二轮面试', '恭喜你通过了一轮考核', '恭喜你通过了 二轮考核'],
        /* 进度条失败信息 */
        failMsg: ['很遗憾，你没有通过我们的笔试', '很遗憾，你没有通过一轮面试', '很遗憾，你没有通过二轮面试', '很遗憾，你没有通过一轮考核', '很遗憾，你没有通过二轮考核']
      }
    },
    methods: {
      /* 更新进度条 */
      showPro(res, index, sucMessage, failMessage) {
        /* 通过 */
        if (res.data[index] && res.data[index].adoptChecked === 1) {
          this.proTitle[index] = sucMessage
          this.activeNum = index + 2
          this.msg[index] = '';
        /* 淘汰 */
        } else if (res.data[index] && res.data[index].adoptChecked === 2) {
          this.proStatus[index] = "error"
          this.proTitle[index] = failMessage
          this.msg[index] = '';
        }
        /* 显示备注信息 */
        if (res.data[index] && res.data[index].adoptChecked === 1 && res.data[index + 1] && res.data[index + 1].adoptChecked === 0 && res.data[index + 1].signChecked === 1) {
          if (index === 0 || index === 1) {
            this.msg[index + 1] = `时间：${res.data[index + 1].time}，${res.data[index + 1].content}`
          } else {
            this.msg[index + 1] = res.data[index + 1].content
          }
        } else if (index === 2 || index === 3) {
            this.msg[index + 1] = res.data[index + 1].content
        } else if (res.data[index] && res.data[index].adoptChecked === 1 && res.data[index + 1] && res.data[index + 1].adoptChecked === 0 && res.data[index + 1].signChecked === 0){
          if(index === 0 || index === 1) {
            this.msg[index + 1] = '未预约'
          }
        }
      }
    },
    mounted() {
      checkPro()
        .then(res => {
          /* 显示进度 */
          if(res.data) {
            this.isSign = true;
          } else {
            this.isSign = false;
            return ;
          }
          this.msg[0] = res.data[0].content
          /* 通过 */
          for (let i = 0; i < this.msg.length; i++) {
            this.showPro(res, i, this.sucMsg[i], this.failMsg[i])
          }
        })
    }
  }
</script>

<style scoped>
  @import url(../../../assets/css/base.css);

  .progress .image {
    width: 30vh;
    height: 30vh;
    bottom: 10vh;
    right: 10vh;
    overflow: hidden;
  }

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
    font-size: 4vh;
    padding-top: 5vh;
  }

  /deep/ .el-step__title {
    font-size: 3vh;
  }

  /deep/ .el-step__description {
    padding-top: 2vh;
    font-size: 2vh;
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