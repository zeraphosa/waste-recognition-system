from ctypes import pythonapi
from importlib.util import source_from_cache
from re import I
import flask
from flask import request
import base64
from flask.app import Flask

import shutil

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
    photo_byte = photo_byte.replace(" ","+")
    # photo_byte = photo_byte.replace("data:image/png:base64", "") + photo_byte.replace(" ","+")
    # photo_byte = photo_byte[22:]

    decodeimg()
    movefiles()

    return photo_byte

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

