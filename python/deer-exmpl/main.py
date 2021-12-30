import base64
image = open('deer.png', 'rb')
image_read = image.read()
image_64_encode = base64.b64encode(image_read)
image_64_decode = base64.b64decode(image_64_encode) 
image_result = open('deer_decode.png', 'wb')
image_result.write(image_64_decode)




# MOVING FILES #1 ATTEMPT
# from flask import request, url_for, render_template, make_response, redirect
# from werkzeug.utils import secure_filename
# upload_folder = '/python/test/'
# allowed_extensions = set(['png'])
# app.config['upload_folder'] = upload_folder
# @app.route('/upload/',methods=['GET','POST'])
# def upload_file():
#     if request.method == 'POST':
#         file = request.files['file']
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['upload_folder'], filename))
#             #return redirect(url_for('upload_file', filename = filename))
#             os.rename(upload_folder + filename, 'niki.png')
#         return render_template('index.html')


# MOVING FILES #2 ATTEMPT
# import shutil
# src_path = r"D:\Code\atik-tespit-sistemi\img.png"
# dst_path = r"D:\Code\atik-tespit-sistemi\python\test\img.png"
# file_name = 'img.png'
# shutil.move(src_path, dst_path)



# DECODING IMAGE #1 ATTEMPT
# def createIMG():
#     my_string = api_filter.photo_byte
#     new_string = my_string.replace("data:image/png;base64,","")
#     with open('decoded_img.png', 'wb') as file_to_save:
#         decoded_img_data = base64.decodebytes(new_string)
#         file_to_save.write(decoded_img_data)


# DECODING IMAGE #2 ATTEMPT
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