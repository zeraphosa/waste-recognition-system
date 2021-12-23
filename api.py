import flask
from flask import request
import base64


app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Atık Tespit Sistemi Web API</h1><p>Python Flask Web API</p>'''


@app.route('/api', methods=['GET'])
def api_filter():
    query_parameters = request.args
    # kullanici_id = query_parameters.get('kullanici_id')
    photo_byte = query_parameters.get('photo_byte')
    base64_img = photo_byte
    decoded_image_data = base64.b64decode(base64_img)

    # base64_img_bytes = base64_img.encode('utf-8')
    with open('decoded_image.png', 'wb') as file_to_save:
        file_to_save.write(decoded_image_data)

    return base64_img


app.run()
