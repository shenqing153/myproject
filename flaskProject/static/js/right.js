var ec_right1 = echarts.init(document.getElementById('echart5'));
var ec_rignt1_option = {
    legend: {
      orient: 'vertical',
        data:[],
      itemWidth: 10,
      itemHeight: 10,
      textStyle:{
        color:'rgba(255,255,255,.5)'
      },
      top:'20%',
      right:30,
      data:['城镇人口','乡村人口']
    },
    color: ['#10d8ec','#82e321'],
    tooltip : {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },

    calculable : true,
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
var roption = {
    legend: {
      orient: 'vertical',
      itemWidth: 10,
      itemHeight: 10,
      textStyle:{
        color:'rgba(255,255,255,.5)'
      },
      top:'20%',
      right:30,
     data:['男性人数','女性人数']
    },
    color: ['#5ae755','#f68fb8'],
    tooltip : {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },

    calculable : true,
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  let currentOption = ec_left1_Option;
  ec_right1.setOption(ec_rignt1_option);
  setInterval(function () {
    currentOption = currentOption === ec_rignt1_option ? roption : ec_rignt1_option;
   ec_right1.setOption(currentOption, true);
  }, 2000);

  window.addEventListener("resize", function () {
   ec_right1.resize();
  });
