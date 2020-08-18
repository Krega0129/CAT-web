<template>
  <div class="search">
    <div class="number">
      <span class="remarks">学号</span>
      <el-input v-model="searchNumber" size="medium"></el-input>
    </div>
    <div class="name">
      <span class="remarks">姓名</span>
      <el-input v-model="searchName" size="medium"></el-input>
    </div>
    <div class="stage">
      <span class="remarks remarks-stage">阶段</span>
      <el-select v-model="stageValue" placeholder="请选择" size="medium">
        <el-option v-for="item in stages" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <el-switch
      style="display: block"
      v-model="isFont"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="后台"
      inactive-text="前端"
    ></el-switch>
    <el-button type="primary" icon="el-icon-search" size="medium">搜索</el-button>
     <el-button type="info" size="medium">重置</el-button>
    <el-button type="success" size="medium">批量通过</el-button>
    <el-button type="danger" size="medium">批量淘汰</el-button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      stages: [
        {
          value: "选项1",
          label: "笔试"
        },
        {
          value: "选项2",
          label: "一轮面试"
        },
        {
          value: "选项3",
          label: "二轮面试"
        },
        {
          value: "选项4",
          label: "一轮考核"
        },
        {
          value: "选项5",
          label: "二轮考核"
        },
        
      ],
      stageValue: "",
      searchNumber: null,
      searchName: "",
      isFont:true
    };
  }
};
</script>

<style scoped>
.search {
  padding: 1vw;
  margin: 1vw;
  display: flex;
  align-items: center;
  width: 85vw;
  height: 8vh;
  background-color: #ffffff;
}
.search div {
  display: flex;
  margin-right: 1vw;
}
.remarks {
  width: 3vw;
  padding-top: 1vh;
}
.remarks-stage {
  margin-right: -0.9vw;
}

</style>