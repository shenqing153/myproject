var ec_left2 = echarts.init(document.querySelector(".pie .chart"));
var ec_left2_option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["劳动力（万人）","人均消费（元）","固定资产投资占GDP比重（%）"],
      right: 1,
      top: 0,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: [],
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
    },
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
        name: "人均消费（元）",
        type: "line",
        data: [],
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
        name: "固定资产投资占GDP比重（%）",
        type: "line",
        yAxisIndex: 1,
        data: [],
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
        name: "劳动力（万人）",
        type: "bar",
        barWidth: "20%",
        data: [],
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

  // 3. 配置项和数据给我们的实例化对象
ec_left2.setOption(ec_left2_option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    ec_left2.resize();
  });