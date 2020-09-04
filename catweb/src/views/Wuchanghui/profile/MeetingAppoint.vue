<template>
  <div class="MeetingAppoint">
    <div v-if="isSign === false" class="appointfai t-al-cent pos-re full">
      <h2 class="title">你还未报名，点击下方按钮报名后即可查看预约进度</h2>
      <div class="signBtn pos-ab">
        <router-link to="/app" class="dp-bk full">我要报名</router-link>
      </div>
    </div>
    <div v-else-if="!canAppoint" class="appointfai t-al-cent pos-re full">
      <h2 class="title">当前阶段不可预约</h2>
    </div>
    <div v-else class="appointSuc pos-re full t-al-cent">
      <h2 class="title">预约面试：{{appointOption}}</h2>
      <div class="date">
        <select class="chooseDate" name="" id="" @change="timeChange($event.target.value)">
          <option selected disabled>请选择要预约的时间</option>
          <option v-for="time in selectApointTime" :value="time" :key="time">{{time}}</option>
        </select>
        <div class="peoNum dp-in-bl">
          <span v-if="!isShowPeoNum">选择后查看预约人数</span>
          <span v-else>此场已预约人数：{{peoNum}} / {{peoMaxNum}}</span>
        </div>
        <button @click="appoint" class="appointBtn">确定</button>
      </div>
      <div class="tab pos-re">
        <table class="dataTable pos-ab">
          <thead>
            <tr>
              <td width="20%">场数</td>
              <td width="25%">详情</td>
              <td width="35%">时间</td>
              <td width="20%">取消预约</td>
            </tr>
          </thead>
          <!-- 未预约 -->
          <tbody v-if="!isAppoint" class="timeTableList">
            <tr>
              <td colspan="4">你还没进行预约，请选择合适的时间预约</td>
            </tr>
          </tbody>
          <!-- 已预约 -->
          <tbody v-else class="timeTableList">
            <tr>
              <td>1</td>
              <td>{{appointOption}}</td>
              <td>{{appointDate}}</td>
              <td>
                <button @click="cancelAppoint">取消预约</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <label for="isObey">
        <input type="checkbox" name="" id="isObey" value="" checked> 是否服从调剂
      </label>
    </div>
  </div>
</template>

<script>
  import {seeAppointTime, appointTime, cancelAppointTime, hadAppointTime} from '../../../network/appointTime'

  export default {
    name: 'MeetingAppoint',
    data() {
      return {
        isSign: '',
        isAppoint: false,
        /* 预约阶段 */
        appointOption: '',
        /* 用户预约的时间 */
        appointDate: '',
        /* 预约人数 */
        peoNum: null,
        /* 最多可预约人数 */
        peoMaxNum: 5,
        /* 用户可选时间 */
        selectApointTime: [],
        /* 当前选择的日期 */
        selDate: null,
        /* 是否展示报名人数 */
        isShowPeoNum: false,
        /* 当前阶段是否能预约 */
        canAppoint: false
      }
    },
    methods: {
      appoint() {
        /* 判断有无选择日期 */
        if(this.selDate == null) {
          this.$message({
            message: '请选择要预约的时间！',
            type: 'warning'
          })
          return;
        }

        /* 能否在 appointList 中找到该场面试 */
        if(this.peoNum >= this.peoMaxNum) {
          this.$message({
            message: '此场人数已饱和，请选择其他场次预约！',
            type: 'error'
          })
          return;
        }else if(this.appointDate == '') {
          this.appointDate = this.selDate
          /* 判断之前有没有预约 */
          if(!this.isAppoint) {
            this.isAppoint = true
          }
        } else {
          this.$message({
            message: '你已经预约过面试',
            type: 'error'
          })
          return;
        }

        /* 预约时间 */
        appointTime({
          date: this.appointDate,
          isObey: document.getElementById('isObey').checked ? '0' : '1'
        })
          .then(res => {
            console.log(res);
            this.$message({
              message: '预约成功',
              type: 'success'
            })
            console.log(this.peoNum);
            this.timeChange(this.appointDate)
          })

        seeAppointTime({}).then(res => {
          console.log(res);
        })
      },
      cancelAppoint() {
        /* 取消预约 */
        cancelAppointTime({
          stage: this.appointOption
        }).then(res => {
            seeAppointTime({}).then(res => {
              /* 最新阶段 */
              let LastedStage = res.data.length - 1;
              if(res.data[LastedStage].dateNumbers[this.appointDate] != null) {
                console.log('ok');
                this.peoNum = res.data[LastedStage].dateNumbers[this.appointDate]
              }
              
              this.$message({
                message: '取消预约成功',
                type: 'success'
              })
              this.appointDate = ''
              this.isAppoint = false;
            })
          })
      },
      timeChange(date) {
        this.selDate = date
        this.isShowPeoNum = true

        /* 获取当前选中的时间的人数 */
        seeAppointTime({}).then(res => {
          /* 最新阶段 */
          let LastedStage = res.data.length - 1;
          if(res.data[LastedStage].dateNumbers[this.selDate] != null) {
            this.peoNum = res.data[LastedStage].dateNumbers[this.selDate]
          }
        })
      }
    },
    created() {
      seeAppointTime({}).then(res => {
        if(res.code === 0) {
          this.isSign = true;
        } else {
          this.isSign = false
        }

        

        /* 最新阶段 */
        let LastedStage = res.data.length - 1;
        this.appointOption = res.data[LastedStage].stage;

        if((this.appointOption === '第一轮面试' || this.appointOption === '第二轮面试') && res.data[LastedStage].adoptChecked === '淘汰') {
          this.canAppoint = true;
          console.log(3);
        } else {
          this.canAppoint = false
          console.log(4);
        }

        this.$bus.$on('out', () => {
          console.log(1);
          this.canAppoint = false;
        })
        
        /* 获取可选日期 */
        for(let st in res.data[LastedStage].dateNumbers) {
          this.selectApointTime.push(st);
        }

        /* 获取预约过的时间 */
        hadAppointTime({
          stage: this.appointOption
        })
          .then(res => {
            if(res.data) {
              this.isAppoint = true;
              this.appointDate = res.data
            }
          })
      })
    }
  }
</script>

<style scoped>
  .MeetingAppoint {
    font-family: 'STXingkai';
  }

  .appointfai .title {
    padding-top: 10vh;
    font-size: 4vh;
    color: black;
  }

  .appointfai .signBtn {
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

  .MeetingAppoint .appointSuc .title {
    padding-top: 5vh;
    font-size: 4vh;
  }

  .MeetingAppoint .appointSuc .date {
    height: 5vh;
    margin-top: 8vh;
    font-size: 1.3vw;
  }

  .MeetingAppoint .appointSuc .date .chooseDate {
    font-size: 1.3vw;
    width: 15vw;
    height: 5vh;
  }

  .MeetingAppoint .appointSuc .date .appointBtn {
    height: 5vh;
    width: 5vw;
  }

  .MeetingAppoint .appointSuc .date .peoNum {
    font-size: 1.3vw;
    width: 15vw;
    line-height: 5vh;
    height: 4.9vh;
    vertical-align: bottom;
  }

  .MeetingAppoint .appointSuc .subBtn {
    margin: 1vh auto;
    font-size: 3vh;
    width: 5vw;
    height: 5vh;
  }

  .MeetingAppoint .appointSuc .tab {
    width: 36vw;
    height: 35vh;
    /* overflow-y: scroll; */
    font-size: 1.3vw;
    margin: 5vh auto;
  }

 /*  .MeetingAppoint .appointSuc .tab::-webkit-scrollbar {
    display: none;
  } */

  .MeetingAppoint .appointSuc .tab .dataTable {
    width: 36vw;
    empty-cells: hide;
    border-collapse: collapse;
    border: .3vh solid black;
  }

  .MeetingAppoint .appointSuc .tab td {
    border: .1vh solid black;
    padding: 1vh .5vw;
    height: 5vh;
  }
</style>