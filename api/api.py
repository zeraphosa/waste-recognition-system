from ctypes import pythonapi
import flask
from flask import request
import base64

from flask.app import Flask


app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Atık Tespit Sistemi Web API</h1><p>Python Flask Web API</p>'''

upload_folder = '/python/test/'
allowed_extensions = set(['png'])
app.config['upload_folder'] = upload_folder

@app.route('/api', methods=['GET'])
def api_filter():
    query_parameters = request.args
    # kullanici_id = query_parameters.get('kullanici_id')
    photo_byte = query_parameters.get('photo_byte')


    with open('img.png', 'wb') as file_to_save:
        file_to_save.write(photo_byte)
    
    return photo_byte


# def create():
#     with open('img.png', 'wb') as file_to_save:
#         file_to_save.write(api_filter.photo_byte)

#     image = open('img.png', 'rb')
#     image_read = image.read()
#     img_64_encode = base64.b64encode(image_read)
#     img_64_decode = base64.b64decode(img_64_encode)
#     image_result = open('result.png', 'wb')
#     image_result.write(img_64_decode)
#     return create()

# data:image/png;base64

# def createIMG():
#     my_string = api_filter.photo_byte
#     new_string = my_string.replace("data:image/png;base64,","")
#     with open('decoded_img.png', 'wb') as file_to_save:
#         decoded_img_data = base64.decodebytes(new_string)
#         file_to_save.write(decoded_img_data)


app.run()
