<template>
  <div class="setTime">
    <div class="header">预约时间</div>
    <div class="content">
      <div class="listShow">
        <span>已设置预约时间</span>
        <el-table :data="tableData" border style="width: 100%" height="500">
          <el-table-column prop="date" label="已设置可预约时间" width="300"></el-table-column>
          <el-table-column prop="stage" label="阶段" width="300"></el-table-column>
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
        <span>新增预约时间(暂时仅支持同时提交一个)</span>
        <div class="addShow" v-for="(item,index) in newSet" :key="index">
          <el-input placeholder="请输入预约时间" v-model="item.date" clearable style="width:15vw"></el-input>
          <el-input placeholder="请输入阶段" v-model="item.stage" clearable style="width:15vw"></el-input>
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
      newSet: []
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
      this.$confirm("将提交预约时间, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const data = [];
          for (const item of this.newSet) {
            if(item.date == null|| item.stage == null){
              this.$notify.error({
                title: "警告",
                message: "不允许为空",
                duration: 2500,
                position: "bottom-right"
              });
                throw '1'
            }
            console.log(1);
            data.push(item);
          }
          console.log(1);
          setNewTime(data).then(res => {
            console.log(res);
          });
        })
        .then(() => {
          this.newSet = [];
          this.getTime();
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    deleteOldTime(date, stage) {
      this.$confirm("将删除已设置时间, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const data = { date, stage };
          deleteTime(data);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .then(() => {
          this.tableData = [];
          this.getTime();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getTime() {
      getTime().then(res => {
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
    }
  },
  created() {
    this.getTime();
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 2vh;
  padding-left: 5vh;
  width: 87vw;
  height: 5vh;
  line-height: 5vh;
  background-color: #ffffff;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 85vw;
  height: 80vh;
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