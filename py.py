import cv2
capture = cv2.VideoCapture(0)
width = int(capture.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT))
print(width,height)

writer = cv2.VideoWriter('first_video.mp4',cv2.VideoWriter_fourcc(*"DIVX"),20,(width,height))

while True:
    ret,frame = capture.read()
    if ret == True:
        cv2.imshow("First_Video",frame)
        writer.write(frame)
    if cv2.waitKey(1) &0xFF == ord('q'): break

capture.release()
writer.release()
cv2.destroyAllWindows()
