import flask;
from flask import request

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Atık Tespit Sistemi Web API</h1><p>Python Flask Web API</p>'''

@app.route('/api', methods=['GET'])
def api_filter():
    query_parameters = request.args
    id = query_parameters.get('id')
    return id

app.run()
