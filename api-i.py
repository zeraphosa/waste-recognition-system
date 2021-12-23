import requests
import json

API_URL = 'http://127.0.0.1:5000'
TOKEN = '{INTENSEYE_TOKEN}'

IMAGE_URL = "http://127.0.0.1:5000/api?photo_byte"

headers = {
  'Content-Type': 'application/json'
}


payload = {
  "image": {
      "url": IMAGE_URL
  }
}


r = requests.put(API_URL, auth=(TOKEN, ''), data=json.dumps(payload), headers = headers)

print("HTTP Status Code: " + str(r.status_code))

print(r.json())