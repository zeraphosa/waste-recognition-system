import shutil

def movefiles():

    src_path = r"D:\Code\atik-tespit-sistemi\img.png"
    dst_path = r"D:\Code\atik-tespit-sistemi\python\test\img.png"
    file_name = 'img.png'

    shutil.move(src_path, dst_path)