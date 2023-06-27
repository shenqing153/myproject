/**
 * Created by admin on 2023/5/14.
 */
//获取left1数据
function get_left1() {
    $.ajax({
        url:"http://127.0.0.1:5000/get_left1/",
        type:"post",
        success:function (data) {
            ec_left1_Option.xAxis[0].data=data['ds']
            ec_left1_Option.series[0].data=data['lineOneData']
            ec_left1_Option.series[1].data=data['lineThreeData']
            ec_left1_Option.series[2].data=data['lineTwoData']
            ec_left1.setOption(ec_left1_Option)
        },
        error:function () {

        }


    })

}

setInterval(get_left1,1000)

function get_right1() {
    $.ajax({
        url:"http://127.0.0.1:5000/get_right1/",
        type:"post",
        success:function (data) {
            ec_rignt1_option.series[0].data=data['num']
            roption.series[0].data=data['snum']
            ec_right1.setOption(ec_rignt1_option)
            ec_right1.setOption(roption)

        },
        error:function () {

        }


    })

}

setInterval(get_right1,2000)

function get_left2() {
    $.ajax({
        url:"http://127.0.0.1:5000/get_left2/",
        type:"post",
        success:function (data) {
            ec_left2_option.xAxis.data=data['year']
            ec_left2_option.series[0].data=data['barData1']
            ec_left2_option.series[1].data=data['barData3']
            ec_left2_option.series[2].data=data['barData2']
            ec_left2.setOption(ec_left2_option)
        },
        error:function () {

        }


    })

}

setInterval(get_left2,1001)

function get_map() {
    $.ajax({
        url:"http://127.0.0.1:5000/get_map/",
        type:"post",
        success:function (data) {
            MapData=data['province']
            myChart.setOption(option)
        },
        error:function () {

        }


    })

}

setInterval(get_map,1001)
