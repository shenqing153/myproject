
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var geoCoordMap = {
    台湾: [121.5135, 25.0308],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [91.11, 29.97],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
  };


var MapData = [
    [{ name: "北京市" }, { name: "上海", value: 2170.07, value1: 1123.38, value2: 1046.69 }],
    [{ name: "天津" }, { name: "海南", value: 1557.92, value1: 812.87, value2: 745.05 }],
    [{ name: "天津" }, { name: "上海", value:1557.92, value1: 812.87, value2: 745.05 }],
    [{ name: "河北" }, { name: "上海", value: 7554.87, value1: 3908.97, value2:3645.9 }],
    [{ name: "山西" }, { name: "上海", value: 3718.39, value1: 1915.84, value2: 1802.55 }],
    [{ name: "内蒙古" }, { name: "上海", value: 2529.44, value1: 1282.37, value2: 1247.07}],
    [{ name: "辽宁" }, { name: "江苏", value: 4359.29, value1: 2245.99, value2: 2113.3 }],
    [{ name: "吉林" }, { name: "上海", value: 2704.53, value1: 1384.05, value2: 1320.48 }],
    [{ name: "黑龙江" }, { name: "上海", value: 3773.73, value1: 1933.05, value2: 1840.68 }],
    [{ name: "江苏" }, { name: "上海", value: 8311.46, value1: 4263.51, value2: 4047.95 }],
    [{ name: "浙江" }, { name: "安徽", value: 5737.37, value1: 2942.54, value2:2794.83 }],
    [{ name: "安徽" }, { name: "上海", value: 6323.15, value1: 3224.86, value2: 3098.29 }],
    [{ name: "福建" }, { name: "河南", value: 3941.67, value1: 2019.7, value2: 1921.97 }],
    [{ name: "江西" }, { name: "河南", value: 4648.98, value1: 2375.21, value2: 2273.77 }],
    [{ name: "山东" }, { name: "上海", value: 10000, value1: 5142.31, value2: 4857.69 }],
    [{ name: "河南" }, { name: "山东", value: 9946.17, value1: 5119.26, value2: 4826.91 }],
    [{ name: "湖北" }, { name: "上海", value: 5917.44, value1: 3059.28, value2: 2858.26 }],
    [{ name: "湖南" }, { name: "重庆", value: 6899.3, value1: 3523.58, value2: 116203 }],
    [{ name: "广东" }, { name: "上海", value: 12100, value1: 6211.56, value2: 5870.05 }],
    [{ name: "广西" }, { name: "广东", value: 4951.59, value1: 2521.05, value2: 2430.54 }],
    [{ name: "海南" }, { name: "上海", value: 1008.86, value1: 530.77, value2: 478.09 }],
    [{ name: "重庆" }, { name: "上海", value: 3102.3, value1: 1592.42, value2: 1509.88 }],
    [{ name: "四川" }, { name: "新疆", value: 8341.51, value1: 4269.13, value2: 4072.38 }],
    [{ name: "贵州" }, { name: "上海", value: 3600.72, value1: 1839.59, value2: 1760.58 }],
    [{ name: "云南" }, { name: "上海", value: 4830.15, value1:2462.62, value2: 2367.53 }],
    [{ name: "西藏" }, { name: "云南", value: 360.72, value1: 184.52, value2: 176.2 }],
    [{ name: "陕西" }, { name: "西藏", value: 3864.18, value1: 1988.79, value2: 1875.39 }],
    [{ name: "甘肃" }, { name: "上海", value: 2367.08, value1: 1354.91, value2: 1282.17 }],
    [{ name: "青海" }, { name: "甘肃", value: 603.97, value1: 314.84, value2: 289.13 }],
    [{ name: "宁夏" }, { name: "上海", value: 685.54, value1: 355.16, value2: 330.3 }],
    [{ name: "新疆" }, { name: "上海", value: 2534.13, value1: 1303.61, value2: 1230.52 }],
    [{ name: "新疆" }, { name: "宁夏", value: 2534.13, value1: 1303.61, value2: 1230.52 }],
  ]

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function (data) {
    var fromCoord = geoCoordMap[data[0].name];
    var toCoord = geoCoordMap[data[1].name];
    return [
      {
        fromName: data[0].name,
        toName: data[1].name,
        coords: [fromCoord, toCoord],
        value: data[1].value,
        value1: data[1].value1,
        value2: data[1].value2,
      }
    ];
  };

  var series = [];
  MapData.forEach(function (item, i) {
    series.push(
      {
        name: item[0].name,
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: "#fff",
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item)
      },
      {
        name: item[0].name,
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item)
      },
      {
        name: item[0].name,
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#fff"
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: [
          { name: item[0].name, value: geoCoordMap[item[0].name], code: item[1].value, code1: item[1].value1, code2: item[1].value2 }
        ]
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return params.data.name + "：" + params.data.code + '万人' + '<br />' + '男：' + params.data.code1 + '<br />' + '女：' + params.data.code2;
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            " > " +
            params.data.toName +
            "：" +
            params.data.value + '万人' + '<br />' + '男：' + params.data.value1 + '<br />' + '女：' + params.data.value2
          );
        } else {
          return params.name;
        }
      }
    },


    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: false,
      //   放大我们的地图
      zoom: 1.1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series:series  }

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

