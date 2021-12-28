from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbhomework


## HTML 화면 보여주기
@app.route('/')
def homework():
    return render_template('index.html')


# 주문하기(POST) API
@app.route('/order', methods=['POST'])
def save_order():
    name_receive = request.form['name_give']
    address_receive = request.form['address_give']
    phone_receive = request.form['phone_give']
    number_receive = request.form['number_give']

    doc = {
        'name':name_receive,
        'address':address_receive,
        'phone':phone_receive,
        'number':number_receive,
    }
    db.shop.insert_one(doc)
    print(name_receive,address_receive,phone_receive,number_receive)
    return jsonify;


# 주문 목록보기(Read) API
@app.route('/order', methods=['GET'])
def view_orders():
    orders = list(db.shop.find({},{'_id':False}))   # 아이디값 안불러오는거 꼭해야함ㅁㅁㅁㅁㅁㅁㅁㅁ
    return jsonify({'all_orders':orders})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)