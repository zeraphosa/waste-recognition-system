import requests
import json
response_API = requests.get('http://127.0.0.1:5000/api?photo_byte')
data = response_API.text
print(response_API.status_code)
print(data)