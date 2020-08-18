<template>
  <div class="listShow">
    <el-table :data="stuData" stripe style="width: 100%">
      <el-table-column type="selection" width="100"></el-table-column>
      <el-table-column prop="stuNum" label="学号" width="250"></el-table-column>
      <el-table-column prop="name" label="姓名" width="250"></el-table-column>
      <el-table-column prop="direction" label="方向" width="250"></el-table-column>
      <el-table-column prop="stage" label="考核阶段" width="350"></el-table-column>
      <el-table-column prop="assess" label="是否通过" width="200"></el-table-column>
      <el-table-column label="操作" fixed="right" prop="stuNum">
        <template slot-scope="scope">
          <el-button size="mini" @click="detailed(scope.row.stuNum)">详情</el-button>
          <el-button size="mini" type="primary">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
       <el-pagination 
      background 
      layout="total, prev, pager, next ,jumper"
      :total="1000" 
      :pager-count="9"
      :current-page.sync="currentPage1" 
      :page-size="10"
      @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "listShow",
  data() {
    return {
      stuData: [
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004824",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004825",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004826",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
        {
          stuNum: "3119004823",
          name: "王小虎",
          direction: "前端",
          stage: "第一轮考核",
          assess: "通过"
        },
      ],
      currentPage1: 1,
    };
  },
  methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      detailed(stuNum){
        console.log(stuNum);
        this.$router.push('detail')
      }
    },
};
</script>

<style scoped>
.listShow {
  margin: 1vw;
  width: 85vw;
}
.page{
  margin-top: 2vh;
}
</style>