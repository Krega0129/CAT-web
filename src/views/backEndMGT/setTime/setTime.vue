<template>
  <div class="setTime">
    <div class="header">预约时间</div>
    <div class="content">
      <div class="listShow">
        <span>已设置预约时间</span>
        <el-table :data="tableData" border style="width: 100%" height="500">
          <el-table-column prop="date" label="已设置可预约时间" width="200"></el-table-column>
          <el-table-column prop="stage" label="阶段" width="200"></el-table-column>
          <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <i
                class="el-icon-circle-close"
                @click="deleteOldTime(scope.row.date,scope.row.stage)"
              ></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="addList">
        <span>新增预约时间</span>
        <div class="addShow" v-for="(item,index) in newSet" :key="index">
          <el-date-picker
            v-model="item.date"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >></el-date-picker>
          <el-select v-model="item.stage" placeholder="请选择">
            <el-option v-for="sta in stages" :key="sta.value" :label="sta.label" :value="sta.value"></el-option>
          </el-select>
          <i class="el-icon-circle-close" @click="newTimeDelete(index)"></i>
        </div>
        <div class="btn">
          <el-button type="primary" @click="addNewTime">新增</el-button>
          <el-button type="success" @click="submitNewTime">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteTime, getTime } from "@/network/setTime";
import { setNewTime } from "@/network/setNewTime";

export default {
  name: "setTime",
  data() {
    return {
      tableData: [],
      newSet: [],
      stages: [
        { label: "第一轮面试", value: "第一轮面试" },
        { label: "第二轮面试", value: "第二轮面试" },
      ],
    };
  },
  methods: {
    addNewTime() {
      const data = { date: null, stage: null };
      this.newSet.push(data);
    },
    newTimeDelete(index) {
      this.newSet.splice(index, 1);
    },
    submitNewTime() {
      if (this.newSet.length !== 0) {
        this.$confirm("将提交预约时间, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            const data = [];
            for (const item of this.newSet) {
              if (
                this.newSet == null ||
                item.date == null ||
                item.stage == null
              ) {
                this.$notify.error({
                  title: "警告",
                  message: "不允许为空",
                  duration: 2500,
                  position: "bottom-right",
                });
                return new Promise.reject();
              }
              data.push(item);
              setNewTime(data).then((res) => {});
            }
          })
          .then(() => {
            this.newSet = [];
            this.getTime();
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "提交成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }
    },
    deleteTableData(data) {
      for (let i = 0; i < this.tableData.length; i++) {
        if (
          this.tableData[i].date == data.date &&
          this.tableData[i].stage == data.stage
        ) {
          this.tableData.splice(i, 1);
        }
      }
    },
    deleteOldTime(date, stage) {
      const data = { date, stage };
      this.$confirm("将删除已设置时间, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteTime(data).then((res) => {
            if (res.code == 1507) {
              this.$notify.error({
                title: "警告",
                message: "当前时间段已被预约，不可删除",
                duration: 2500,
                position: "bottom-right",
              });
              return new Promise(()=>{})
            } else if (res.code == 1207) {
              this.deleteTableData(data);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getTime() {
      getTime().then((res) => {
        this.tableData = [];
        if (res.code == 0) {
          for (const item of res.data) {
            for (const key in item.dateNumbers) {
              const data = { date: key, stage: item.stage };
              this.tableData.push(data);
            }
          }
        }
      });
    },
  },
  created() {
    this.getTime();
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 2vh;
  padding-left: 5vh;
  width: 90vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #ffffff;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 85vw;
  height: 93vh;
  margin: 0 auto;
  padding: 2vh;
  background-color: rgb(177, 194, 195);
}
.content > div {
  display: flex;
  flex-direction: column;
  width: 40vw;
}
.content div span {
  margin-bottom: 1vh;
  display: inline-block;
  text-align: center;
  font-size: 2vh;
  color: black;
}
.addShow {
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
i {
  color: rgb(67, 77, 223);
  font-size: 3vh;
}
i:hover {
  color: rgb(238, 53, 53);
}
.btn:nth-child(1) {
  margin-left: 10vw;
}
</style>