<template>
  <div class="listShow">
    <el-table :data="stuData" stripe style="width: 100%" @selection-change="select" max-height="390">
      <el-table-column type="selection" width="100"></el-table-column>
      <el-table-column prop="stuNumber" label="学号" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="direction" label="方向" width="100"></el-table-column>
      <el-table-column prop="stage" label="考核阶段" width="140"></el-table-column>
      <el-table-column prop="appointTime" label="已预约时间" width="140"></el-table-column>
      <el-table-column prop="adoptChecked" label="是否通过" width="140">
        <template slot-scope="scope">
          <span v-if="scope.row.adoptChecked == 0">待审核</span>
          <span v-else-if="scope.row.adoptChecked == 1" style="color:rgb(9, 223, 116)">通过</span>
          <span v-else-if="scope.row.adoptChecked == 2" style="color:rgb(223, 9, 9)">淘汰</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" prop="stuNum">
        <template slot-scope="scope">
          <el-button size="mini" @click="detailed(scope.row.stuNumber)">详情</el-button>
          <el-button size="mini" type="primary">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="total, prev, pager, next ,jumper"
        :total="totalCount"
        :pager-count="9"
        :current-page.sync="currentPage1"
        :page-size="10"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getPageData, getStageDirection } from "@/network/getpage";
import { getSearch } from "@/network/admin";
export default {
  name: "listShow",
  data() {
    return {
      stuData: [],
      currentPage1: 1,
      stuNum: null,
      RequestRows: 10,
      totalCount: 0,
      keepIndex: [],
      checkData: []
    };
  },
  props: {
    stageValue: {
      type: String
    },
    directionValue: {
      type: String
    }
  },
  methods: {
    async handleCurrentChange(val) {
      await this.$bus.$emit("getStageValue");
      if (this.directionValue) {
        const data = await {
          currentPage: val,
          rows: this.RequestRows,
          stage: this.stageValue,
          direction: this.directionValue
        };
        await getStageDirection(data).then(res => {
          this.stuData = [];
          this.totalCount = res.data.totalCount;
          for (const [index, item] of res.data.list.entries()) {
            if (item.signChecked == '0') {
              item.appointTime = "未预约";
            }
            item.index = index;
            this.stuData.push(item);
          }
        });
        this.$bus.$off("getStageValue");
      } else {
        const data = await {
          currentPage: val,
          rows: this.RequestRows,
          stage: this.stageValue
        };
        await getPageData(data).then(res => {
          this.stuData = [];
          this.totalCount = res.data.totalCount;
          for (const [index, item] of res.data.list.entries()) {
            if (item.signChecked == '0') {
              item.appointTime = "未预约";
            }
            item.index = index;
            this.stuData.push(item);
          }
        });
        this.$bus.$off("getStageValue");
      }
    },
    detailed(stuNum) {
      this.stuNum = stuNum;
      this.$router.push("detail");
    },
    select(val) {
      this.checkData = [];
      this.keepIndex = [];
      for (const item of val) {
        const data = { id: item.id, stage: item.stage };
        this.checkData.push(data);
        this.keepIndex.push(item.index);
      }
    }
  },
  async mounted() {
    const data = await {
      stage: "第一轮面试",
      currentPage: 1,
      rows: this.RequestRows
    };
    await getPageData(data).then(res => {
      this.stuData = [];
      this.totalCount = res.data.totalCount;
      for (const [index, item] of res.data.list.entries()) {
        if (item.signChecked == '0') {
          item.appointTime = "未预约";
        }
        item.index = index;
        this.stuData.push(item);
      }
    });
  },
  async created() {
    this.$bus.$on("NameSearch", (searchName, searchNumber) => {
      const data = { name: searchName, stuNumber: searchNumber };
      getSearch(data).then(res => {
        this.stuData = [];
        this.totalCount = res.data.length;
        if (res.data) {
          for (const [index, item] of res.data.entries()) {
            if (item.signChecked == '0') {
              item.appointTime = "未预约";
            }
            item.index = index;
            this.stuData.push(item);
          }
        }
      });
    });
    this.$bus.$on("StagesSearch", (stageValue, directionValue) => {
      if (directionValue) {
        const data = {
          currentPage: 1,
          rows: this.RequestRows,
          stage: stageValue,
          direction: directionValue
        };
        getStageDirection(data).then(res => {
          this.stuData = [];
          this.totalCount = res.data.totalCount;
          if (res.data.list) {
            for (const [index, item] of res.data.list.entries()) {
              if (item.signChecked == '0') {
                item.appointTime = "未预约";
              }
              item.index = index;
              this.stuData.push(item);  
            }
          }
        });
      } else {
        const data = {
          currentPage: 1,
          rows: this.RequestRows,
          stage: stageValue
        };
        getPageData(data).then(res => {
          this.stuData = [];
          this.totalCount = res.data.totalCount;
          if (res.data.list) {
            for (const [index, item] of res.data.list.entries()) {
              if (item.signChecked == '0') {
                item.appointTime = "未预约";
              }
              item.index = index;
              this.stuData.push(item);
            }
          }
        });
      }
    });
  },
  deactivated() {
    this.$bus.$emit("outputStuNum", this.stuNum);
  }
};
</script>

<style scoped>
.listShow {
  margin: 1vw 0 1vw 2vw;
  width: 85vw;
}
.page {
  margin-top: 2vh;
}
</style>