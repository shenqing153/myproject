var ec_left1 = echarts.init(document.querySelector(".line .chart"))
var ec_left1_Option = {
     tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type:'line', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
  /* toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },*/
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["全国人口数量（万人）","人口老龄化（%）","养老保险覆盖率（%）"],
      right: 1,
      top: 0,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: [{
      type: "category",
      data:[],
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12)
        },
      },
    }],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),

        },
      },
      {
        type: "value",
        position: "right",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),
        },
        formatter: function (value) {
          return value + '%'
        }
      },

    ],
    series: [
      {
        name: "养老保险覆盖率（%）",
        type: "line",
        data:[],
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#f65ed0",
          borderColor: "#f65ed0",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              10,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },

      },
      {
        name: "人口老龄化（%）",
        type: "line",
         data:[],
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#6c50f3",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              10,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },

      },
      {
        name: "全国人口数量（万人）",
        type:'bar',
        data:[],
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
      },

    ],
  };

  // 使用刚指定的配置项和数据显示图表。
ec_left1.setOption(ec_left1_Option);
window.addEventListener("resize", function() {
ec_left1.resize();
});