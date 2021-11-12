
import cv2

backsub = cv2.createBackgroundSubtractorMOG2()
kamera = cv2.VideoCapture(0)
kamera.set(cv2.CAP_PROP_BUFFERSIZE, 1024)

genislik = 704
yukseklik = 288

konumSayac = 0
girenSayisi = 0
simdiki_veri = []
gecmis_veri = []

while True:
    ret, frame = kamera.read()
    if kamera:
        fgmask = backsub.apply(frame, None, 0.018)
        cv2.line(frame, (0, yukseklik), (genislik, yukseklik), (0, 255, 0), 2)
        contours, hierarchy = cv2.findContours(
            fgmask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        for contour in contours:
            (x, y, w, h) = cv2.boundingRect(contour)
            if w > 65 and h > 65:
                simdiki_veri.append([x, y])
                cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 0, 255), 2)
        yer_listesi = []
        try:
            for i in range(len(simdiki_veri)):
                mini = 10000
                for k in range(len(gecmis_veri)):
                    diff_x = simdiki_veri[i][0]-gecmis_veri[k][0]
                    diff_y = simdiki_veri[i][1]-gecmis_veri[k][1]
                    distance = (diff_x*diff_x)+(diff_y * diff_y)
                    if(distance < mini):
                        mini = distance
                        konumSayac = k
                yer_listesi.append(konumSayac)
        except IndexError:
            continue
        try:
            for i in yer_listesi:
                for k in range(1, len(yer_listesi)):
                    if i == yer_listesi[k]:
                        yer_listesi.pop(k)
                        yer_listesi.insert(k, "pass")
        except IndexError:
            continue
        for i in range(len(simdiki_veri)):
            try:
                if yer_listesi[i] == "pass":
                    pass
                else:
                    y_previous = gecmis_veri[yer_listesi[i]][1]
                    if(simdiki_veri[i][1] < yukseklik and y_previous > yukseklik):
                        girenSayisi = girenSayisi+1

            except IndexError:
                continue
        gecmis_veri = simdiki_veri
        simdiki_veri = []

        cv2.putText(frame, "say: "+str(girenSayisi), (0, 20),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)
        cv2.imshow("Python OpenCV", frame)

        key = cv2.waitKey(60)
        if key == ord('q'):
            kamera.release()
            cv2.destroyAllWindows()
            break
