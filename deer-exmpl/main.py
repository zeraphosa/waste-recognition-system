import base64
image = open('deer.png', 'rb')
image_read = image.read()
image_64_encode = base64.b64encode(image_read)
image_64_decode = base64.b64decode(image_64_encode) 
image_result = open('deer_decode.png', 'wb')
image_result.write(image_64_decode)