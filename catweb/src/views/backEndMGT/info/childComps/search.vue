<template>
  <div class="search">
    <div>
      <div class="number">
        <span class="remarks">学号</span>
        <el-input v-model="searchNumber" size="medium"></el-input>
      </div>
      <div class="name">
        <span class="remarks">姓名</span>
        <el-input v-model="searchName" size="medium"></el-input>
      </div>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="medium"
        ref="searchBtn"
        @click="NameSearch"
      >搜索</el-button>
      <div class="stage">
        <span class="remarks remarks-stage">阶段</span>
        <el-select v-model="stageValue" placeholder="请选择" size="medium">
          <el-option
            v-for="(item,index) in stages"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <el-select
        v-model="directionValue"
        clearable
        placeholder="请选择"
        style="width:5vw"
        size="small"
      >
        <el-option
          v-for="item in direction"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="medium"
        ref="searchBtn"
        @click="StagesSearch"
      >搜索</el-button>
    </div>
    <div>
      <el-button type="info" size="medium" @click="Reset">重置</el-button>
      <el-button type="success" size="medium" @click="pass">批量通过</el-button>
      <el-button type="danger" size="medium" @click="out">批量淘汰</el-button>
      <el-button size="medium" style="background:#ebee28;color:black" @click="sendInfo">发送消息</el-button>
    </div>
  </div>
</template>

<script>
import { passOrOut, sendInfo } from "@/network/result";
export default {
  name: "search",
  data() {
    return {
      stages: [
        {
          value: "笔试",
          label: "笔试",
        },
        {
          value: "第一轮面试",
          label: "第一轮面试",
        },
        {
          value: "第二轮面试",
          label: "第二轮面试",
        },
        {
          value: "第一轮考核",
          label: "第一轮考核",
        },
        {
          value: "第二轮考核",
          label: "第二轮考核",
        },
      ],
      direction: [
        {
          value: "前端",
          label: "前端",
        },
        {
          value: "后台",
          label: "后台",
        },
      ],
      directionValue: "",
      stageValue: "第一轮面试",
      searchNumber: null,
      searchName: "",
      myCheckData: [],
      content: null,
    };
  },
  watch: {
    checkData(val) {
      this.myCheckData = val;
    },
  },
  props: {
    checkData: "",
  },
  methods: {
    StagesSearch() {
      this.$bus.$emit("StagesSearch", this.stageValue, this.directionValue);
    },
    NameSearch() {
      this.$bus.$emit("NameSearch", this.searchName, this.searchNumber);
    },
    Reset() {
      this.$router.go(0);
    },
    pass() {
      this.$confirm("此操作将把用户状态批量改为通过, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$bus.$emit("getCheckData");
        })
        .then(() => {
          for (const item of this.myCheckData) {
            item.adoptChecked = 1;
          }
        })
        .then(() => {
          passOrOut(this.myCheckData);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "批量通过成功!",
          });
        })
        .then(() => {
          setTimeout(() => {
            this.$router.go(0);
          }, 700);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    out() {
      this.$confirm("此操作将把用户状态批量改为淘汰, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$bus.$emit("getCheckData");
        })
        .then(() => {
          for (const item of this.myCheckData) {
            item.adoptChecked = 2;
          }
        })
        .then(() => {
          passOrOut(this.myCheckData);
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "批量淘汰成功!",
          });
        })
        .then(() => {
          setTimeout(() => {
            this.$router.go(0);
          }, 700);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    sendInfo() {
      this.$prompt("请输入要发送的内容", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then((value) => {
          this.content = value.value;
          this.$bus.$emit("getCheckData");
          console.log(this.content);
        })
        .then(() => {
          for (const item of this.myCheckData) {
            item.content = this.content;
          }
          console.log(this.myCheckData);
        })
        .then(() => {
          sendInfo(this.myCheckData).then((res) => {
            console.log(res);
          });
        })
        .then(() => {
          this.$message({
            type: "success",
            message: "发送成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
};
</script>

<style scoped>
.search {
  padding: 1vw;
  margin: 1vw 0 1vw 2vw;
  width: 85vw;
  background-color: #ffffff;
}
.search div {
  display: flex;
  margin-right: 1vw;
}
.search>div:nth-child(2){
  margin-top: 3vh;
}
.remarks {
  text-align: center;
  width: 5vw;
  padding-top: 1vh;

}
.remarks-stage {
  margin-left: 1.2vw;
}
</style>