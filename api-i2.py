from PIL import Image
from io import BytesIO
import numpy as np
import requests
import json
import cv2

TOKEN = '{INTENSEYE_TOKEN}'
IMAGE_URL = ""

BODY_PARTS = {"nose": 0, "leftEye": 1, "rightEye": 2, "leftEar": 3, "rightEar": 4,
              "leftShoulder": 5, "rightShoulder": 6, "leftElbow": 7, "rightElbow": 8,
              "leftWrist": 9, "rightWrist": 10, "leftHip": 11, "rightHip": 12,
              "leftKnee": 13, "rightKnee": 14, "leftAnkle": 15, "rightAnkle": 16,
              "leftHand": 17, "rightHand": 18, "leftForeArm": 19, "rightForeArm": 20}

POSE_PAIRS = [["nose", "rightEye"], ["rightEye", "rightEar"],
              ["nose", "leftEye"], ["leftEye", "leftEar"],
              ["leftShoulder", "leftElbow"], ["leftElbow", "leftWrist"], ["leftShoulder", "rightShoulder"],
              ["leftWrist", "leftHand"], ["leftHand", "leftForeArm"],
              ["rightWrist", "rightHand"], ["rightHand", "rightForeArm"],
              ["rightShoulder", "rightElbow"], ["rightElbow", "rightWrist"],
              ["leftShoulder", "leftHip"], ["rightShoulder", "rightHip"], ["leftHip", "rightHip"],
              ["leftHip", "leftKnee"], ["rightHip", "rightKnee"],
              ["leftKnee", "leftAnkle"], ["rightKnee", "rightAnkle"]
              ]

IGNORE_PAIRS = [
    ["nose", "rightEye"], ["rightEye", "rightEar"],
    ["nose", "leftEye"], ["leftEye", "leftEar"]
]

font = cv2.FONT_HERSHEY_SIMPLEX

isPersonRectDraw = True
isFaceRectDraw = False
isFaceInfoDraw = True
isSkeletoDraw = True

person_color = (0, 255, 0)
face_color = (130, 255, 255)
text_color = (255, 255, 255)
emotion_color = (179, 254, 0)
skeleton_color = (0, 255, 255)
points_color = (179, 254, 0)


def intenseye_detection(token, image_url):
    api_url = ""

    headers = {
        'Content-Type': 'application/json'
    }

    payload = {
        "image": {
            "url": image_url
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

    r = requests.put(api_url, auth=(token, ''), data=json.dumps(payload), headers=headers)

    print("HTTP Status Code: " + str(r.status_code))

    return r.json()


def url_to_image(url):
    response = requests.get(url)
    img = np.array(Image.open(BytesIO(response.content)))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    return img


# GET IMAGE
image = url_to_image(IMAGE_URL)

# GET INTENSE DETECTION API
detection_results = intenseye_detection(TOKEN, IMAGE_URL)
meta_data = detection_results["metadata"]

for person in detection_results["data"]:
    # print(person)

    person_coords = person["coords"]
    face_coords = person["face"]["coords"]
    emotions = person["face"]["emotions"] if person["face"]["emotions"] else []
    age = person["face"]["age"] if person["face"]["age"] else None
    gender = person["face"]["gender"] if person["face"]["gender"] else None
    pose_coords = person["pose"]

    emotion_best = max(emotions, key=emotions.get) if person["face"]["emotions"] else None

    # person_coords draw
    if isPersonRectDraw:
        person_top_left = (person_coords["left"], person_coords["top"])
        person_bottom_right = (
        person_coords["left"] + person_coords["width"], person_coords["top"] + person_coords["height"])
        cv2.rectangle(image, person_top_left, person_bottom_right, person_color, 2)

    # face_coords draw
    if isFaceRectDraw:
        face_top_left = (person_coords["left"] + face_coords["left"], person_coords["top"] + face_coords["top"])
        face_bottom_right = (person_coords["left"] + face_coords["left"] + face_coords["width"],
                             person_coords["top"] + face_coords["top"] + face_coords["height"])
        cv2.rectangle(image, face_top_left, face_bottom_right, face_color, 2)

    # face age and gender draw
    if isFaceInfoDraw and age and gender:
        person_info = "{0}/{1}-{2}".format(gender, age["min"], age["max"])
        cv2.putText(image, person_info, person_top_left, font, 0.65, text_color, 1, cv2.LINE_AA)
        if emotion_best is not None:
            emotion_top_left = (person_top_left[0], person_top_left[1] + 20)
            cv2.putText(image, emotion_best, emotion_top_left, font, 0.75, emotion_color, 1, cv2.LINE_AA)

    # skeleton draw
    if isSkeletoDraw:
        for pair in POSE_PAIRS:
            partA = pair[0]
            partB = pair[1]

            if pose_coords[partA] and pose_coords[partB]:

                pose_a = (person_coords["left"] + pose_coords[partA][0], person_coords["top"] + pose_coords[partA][1])
                pose_b = (person_coords["left"] + pose_coords[partB][0], person_coords["top"] + pose_coords[partB][1])

                if pair not in IGNORE_PAIRS:
                    cv2.line(image, pose_a, pose_b, skeleton_color, 2)

                cv2.circle(image, pose_a, 3, points_color, thickness=-1, lineType=cv2.FILLED)
                cv2.circle(image, pose_b, 3, points_color, thickness=-1, lineType=cv2.FILLED)

cv2.putText(image, 'Intenseye Detection API', (10, meta_data["dimensions"]["height"] - 15), font, 1, (1, 190, 200), 2,
            cv2.LINE_AA)

cv2.imshow("Intenseye Detection API", image)
cv2.waitKey(0)
cv2.destroyAllWindows()