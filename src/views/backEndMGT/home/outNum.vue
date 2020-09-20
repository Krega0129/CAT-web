<template>
  <div class="column">
    <div class="panel bar">
      <div class="echarts-title">柱状图-各轮次淘汰人数</div>
      <div class="echarts-body">
        <div id="outNumcharts" style="width: 40vw;height:40vh;"></div>
      </div>
      <div class="panel-footer"></div>
    </div>
  </div>
</template>

<script>
import "echarts/theme/macarons.js";
import { getData } from "../../../network/getData";
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // let endNumcharts = this.$echarts.init(
      //   document.getElementById("endNumcharts")
      // );
      let outNumcharts = this.$echarts.init(
        document.getElementById("outNumcharts"),
        "macarons" //把js名字传进去
      );
      getData().then((res) => {
        // 绘制图表
        let data=Object.values(res.data.dateAdopt)
        let option = {
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            top: "4%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: ["笔试", "一轮面试", "二轮面试", "一轮考核", "二轮考核"],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              type: "bar",
              barWidth: "35%",
              data,
            },
          ],
        };
        outNumcharts.setOption(option);
      });
      window.addEventListener("resize", function () {
        outNumcharts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  flex: 2;
  .panel {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
    }
    .panel-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
      }
    }
  }
  .bar {
    width: 100%;
    background-color: #fff;
    .echarts-title {
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: #666;
      letter-spacing: 1px;
    }
    .echarts-body {
      height: 40vh;
      text-align: center;
    }
  }
}
</style>