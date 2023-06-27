import utils
from flask import Flask, jsonify
from flask import render_template  # 引用模块

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/get_left1/', methods=['get', 'post'])
def get_left1():
    res = utils.get_left1()
    ds, lineonedata,linethreedata,linetwodata = [], [], [], []
    for tup in res:
        ds.append(tup[0])
        lineonedata.append(tup[1])
        linethreedata.append(tup[2])
        linetwodata.append(tup[3])
    return jsonify({"ds": ds, "lineOneData":lineonedata, "lineThreeData": linethreedata, "lineTwoData": linetwodata})

@app.route('/get_right1/', methods=['get', 'post'])
def get_right1():
    res = utils.get_right1()
    x_data = []
    y_data = []
    a_data = []
    b_data = []
    for i in res:
        y_data.append({'value':i[0],'name':i[1]})
        x_data.append(i[1])
        b_data.append({'value':i[2],'name':i[3]})
        a_data.append(i[3])

    return jsonify({"num": y_data,'town':x_data, "snum": b_data,'sexy':a_data})

@app.route('/get_left2/', methods=['get', 'post'])
def get_left2():
    res = utils.get_left2()
    year, bardata1,bardata2,bardata3 = [], [], [], []
    for tup in res:
        year.append(tup[0])
        bardata1.append(tup[1])
        bardata2.append(tup[2])
        bardata3.append(tup[3])
    return jsonify({"year": year, "barData1":bardata1, "barData2": bardata2, "barData3": bardata3})

@app.route('/get_map/', methods=['get', 'post'])
def get_map():
    res = utils.get_map()
    y_data = []
    for i in res:
        y_data.append([{'name':i[0]},{'name':'上海','value':i[1], 'value1': i[2], 'value2': i[3]}])

    return jsonify({"province": y_data})


if __name__ == '__main__':
    app.run()
