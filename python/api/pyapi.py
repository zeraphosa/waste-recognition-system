from ctypes import pythonapi
from importlib.util import source_from_cache
from re import I
import flask
from flask import request
import base64
from flask.app import Flask

import shutil
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Atık Tespit Sistemi Web API</h1><p>Python Flask Web API</p>'''


@app.route('/api', methods=['GET'])
def api_filter():
    query_parameters = request.args
    # kullanici_id = query_parameters.get('kullanici_id')
    global photo_byte
    photo_byte = query_parameters.get('photo_byte')
    photo_byte = photo_byte.replace(" ", "+")
    # photo_byte = photo_byte.replace("data:image/png:base64", "") + photo_byte.replace(" ","+")
    # photo_byte = photo_byte[22:]

    decodeimg()
    movefiles()
    return jsresponse()

@app.route('/api/sonuc', methods=['GET','POST'])
def jsresponse():
    value = {
        "header1" : "Plastik kutusu",
        "header2" : "Pet sise",
        "content1" : "EPA, 2017 yilinda plastik sise uretiminin 3,7 milyon tona ulastigini ve bunun %30'dan azinin geri donusturuldugunu tahmin ediyor.",
        "header3" : "Azaltmak: ",
        "content2" : "Tek kullanimlik siseler veya teneke kutular satin almak yerine kendi sisenizi getirin.",
        "warning" : "Atacaginiz nesne <span>plastik posetsiz, temiz, bos ve kuru olmalidir."
    }
    response = flask.jsonify(value)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    # return json.dumps(value)

    # header1 = '''<h1>Plastik kutusu</h1>'''
    # header2 = '''<h2>Pet şişe</h2>'''
    # content1 = '''<p>EPA, 2017 yılında plastik şişe üretiminin 3,7 milyon tona ulaştığını ve bunun %30'dan azının geri dönüştürüldüğünü tahmin ediyor.</p>'''
    # header3 = '''<h2>Azaltmak:</h2>'''
    # content2 = '''<p>Tek kullanımlık şişeler veya teneke kutular satın almak yerine kendi şişenizi getirin.</p>'''
    # warning = '''<p>Atacağınız nesne <span>plastik poşetsiz, temiz, boş ve kuru olmalıdır.</span></p>'''
    # return header1, header2, content1, header3, content2, warning

def decodeimg():
    imgdata = base64.standard_b64decode(photo_byte)
    filename = 'testimg.jpg'
    with open(filename, 'wb') as f:
        f.write(imgdata)


def movefiles():
    src_path = r'D:\Code\atik-tespit-sistemi\testimg.jpg'
    dst_path = r'D:\Code\atik-tespit-sistemi\python\test\testimg.jpg'

    shutil.move(src_path, dst_path)


app.run()


# def movefiles():

#     src_path = r"D:\Code\atik-tespit-sistemi\img.png"
#     dst_path = r"D:\Code\atik-tespit-sistemi\python\test\img.png"
#     file_name = 'img.png'

#     shutil.move(src_path, dst_path)
