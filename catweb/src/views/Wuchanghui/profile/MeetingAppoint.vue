<template>
  <div class="MeetingAppoint pos-re full t-al-cent">
    <h2 class="title">预约面试：{{appointOption}}</h2>
    <div class="date">
      <select class="chooseDate" name="" id="" @change="timeChange($event)">
        <option selected disabled>请选择要预约的时间</option>
        <option v-for="time in selectApointTime" :value="time" :key="time">{{time}}</option>
      </select>
      <div class="peoNum dp-in-bl">
        <span v-if="peoNum == null">选择后查看预约人数</span>
        <span v-else>此场已预约人数：{{peoNum}}</span>
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
</template>

<script>
  import {seeAppointTime, appointTime, cancelAppointTime, hadAppointTime} from '../../../network/appointTime'

  export default {
    name: 'MeetingAppoint',
    data() {
      return {
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
        /* 用户选中的事件 */
        eve: null,
        /* 用户预约的事件 */
        apEve: null,
      }
    },
    methods: {
      appoint() {
        /* 获取日期 */
        let SelDate = document.getElementsByClassName('chooseDate')[0]

        /* 判断有无选择日期 */
        if(SelDate.value == '请选择要预约的时间') {
          alert('请选择要预约的时间！')
          return;
        }

        /* 能否在 appointList 中找到该场面试 */
        if(this.peoNum >= this.peoMaxNum) {
          alert('此场人数已饱和，请选择其他场次预约！');
          return;
        }else if(this.appointDate != SelDate.value && this.appointDate == '') {
          this.appointDate = SelDate.value
          /* 判断之前有没有预约 */
          if(!this.isAppoint) {
            this.isAppoint = true
          }
          this.timeChange(this.eve)
        } else {
          alert('你已经预约过面试！')
          return;
        }

        /* 预约时间 */
        appointTime({
          date: this.appointDate,
          isObey: document.getElementById('isObey').checked ? '0' : '1'
        })
          .then(res => {
            /* 发出当前预约时间事件 */
            this.$bus.$emit('appoint', this.eve)

            /* 存储当前预约事件 */
            this.apEve = this.eve;
          })
      },
      cancelAppoint() {
        /* 取消预约 */
        cancelAppointTime({
          stage: this.appointOption
        }).then(res => {
            console.log(res);
          })
        /* 是否在本次页面中预约 */
        if(this.apEve) {
          this.$bus.$emit('cancelAppoint', this.apEve);
        } else if(this.eve && this.eve.target.value == this.appointDate) {
          this.$bus.$emit('cancelAppoint', this.eve);
        }
        this.appointDate = ''
        this.isAppoint = false;
      },
      timeChange(ev) {
        /* 获取当前选中的时间的人数 */
        seeAppointTime({}).then(res => {
          /* 最新阶段 */
          let LastedStage = res.data.length - 1;
          if(ev && res.data[LastedStage].dateNumbers[ev.target.value]) {
            console.log(ev);
            this.peoNum = res.data[LastedStage].dateNumbers[ev.target.value]
          }
        })
        /* 存储select事件 */
        this.eve = ev
      }
    },
    mounted() {
      seeAppointTime({}).then(res => {
        /* 预约阶段 */
        // console.log(res);

        let LastedStage = res.data.length - 1;
        this.appointOption = res.data[LastedStage].stage;
        
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

      this.$bus.$on('appoint', ev => {
        this.timeChange(ev)
      })
      this.$bus.$on('cancelAppoint', ev => {
        this.timeChange(ev)
      })
    }
  }
</script>

<style scoped>
  .MeetingAppoint .title {
    padding-top: 5vh;
    font-size: 4vh;
  }

  .MeetingAppoint .date {
    height: 5vh;
    margin-top: 8vh;
    font-size: 3vh;
  }

  .MeetingAppoint .date .chooseDate {
    font-size: 3vh;
    width: 15vw;
    height: 5vh;
  }

  .MeetingAppoint .date .appointBtn {
    height: 5vh;
    width: 5vw;
  }

  .MeetingAppoint .date .peoNum {
    font-size: 3vh;
    width: 15vw;
    line-height: 5vh;
    height: 4.9vh;
    vertical-align: bottom;
  }

  .MeetingAppoint .subBtn {
    margin: 1vh auto;
    font-size: 3vh;
    width: 5vw;
    height: 5vh;
  }

  .MeetingAppoint .tab {
    width: 36vw;
    height: 35vh;
    overflow-y: scroll;
    font-size: 3vh;
    margin: 5vh auto;
  }

  .MeetingAppoint .tab::-webkit-scrollbar {
    display: none;
  }

  .MeetingAppoint .tab .dataTable {
    width: 36vw;
    empty-cells: hide;
    border-collapse: collapse;
    border: .3vh solid black;
  }

  .MeetingAppoint .tab td {
    border: .1vh solid black;
    padding: 1vh .5vw;
    height: 5vh;
  }
</style>