import requests
import json

API_URL = ''
TOKEN = '{INTENSEYE_TOKEN}'

IMAGE_URL = ""

headers = {
  'Content-Type': 'application/json'
}


payload = {
  "image": {
      "url": IMAGE_URL
  },
  "tracks": [{
          "type": "person",
          "params": {
              "pose": True,
              "emotion": True,
              "ageGender": True
          }
      }
  ],
  "options": {
      "objectDetection": {
          "confidence": 0.85
      }
  }
}


r = requests.put(API_URL, auth=(TOKEN, ''), data=json.dumps(payload), headers = headers)

print("HTTP Status Code: " + str(r.status_code))

print(r.json())