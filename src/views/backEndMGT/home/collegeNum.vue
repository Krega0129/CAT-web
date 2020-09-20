<template>
  <div class="column">
    <div class="panel pie">
      <div class="echarts-title">饼形图-各学院报名人数</div>
      <div class="echarts-body">
        <div id="collegeNumcharts" style="width: 40vw;height:40vh;"></div>
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
    return { list: this.$store.state.list };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
    });
    
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // let endNumcharts = this.$echarts.init(
      //   document.getElementById("endNumcharts")
      // );
      let collegeNumcharts = this.$echarts.init(
        document.getElementById("collegeNumcharts"),
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
            bottom: "5%",
            // itemWidth:"15",
            // itemHeight:"15",
            // fontSize:"16",
            data: ["计算机学院", "其他学院"],
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
                { value: res.data.dateCollege.computer, name: "计算机学院" },
                { value: res.data.dateCollege.other, name: "其他学院" },
              ],
            },
          ],
        };
        collegeNumcharts.setOption(option);
      });

      window.addEventListener("resize", function () {
        collegeNumcharts.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  flex: 2;
  margin-bottom: 20px;
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
    }
  }
}
</style>