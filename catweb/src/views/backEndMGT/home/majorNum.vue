<template>
  <div class="column">
    <div class="panel pie">
      <div class="echarts-title">饼形图-各专业报名人数</div>
      <div class="echarts-body">
        <div id="majorNumcharts" style="width: 40vw;height:40vh;"></div>
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
      let majorNumcharts = this.$echarts.init(
        document.getElementById("majorNumcharts"),
        "macarons" //把js名字传进去
      );
      getData().then((res) => {
        // 绘制图表
        let option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            // orient: "vertical",
            bottom: "15",
            // itemWidth:"15",
            // itemHeight:"15",
            data: ["软件工程", "计算机科学与技术", "网络工程", "信息安全"],
          },
          series: [
            {
              type: "pie",
              radius: ["50%", "70%"],
              center: ["50%", "40%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "18",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: res.data.dateMajor.soft, name: "软件工程" },
                { value: res.data.dateMajor.com, name: "计算机科学与技术" },
                { value: res.data.dateMajor.net, name: "网络工程" },
                { value: res.data.dateMajor.info, name: "信息安全" },
              ],
            },
          ],
        };
        majorNumcharts.setOption(option);
      });
      window.addEventListener("resize", function () {
        majorNumcharts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  flex: 2;
  margin-right: 20px;
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
  .pie {
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