# -*- coding:utf-8 -*-
from os.path import splitext
import os
import glob
from PIL import Image
 
def get_all_file(filename):
    files = glob.glob(filename)
    return files
 
def to_ather_file(files, type):
    for png in files:
        im = Image.open(png).convert('RGB')
        jpg = splitext(png)[0]+"." + type
        im.save(jpg)

def del_old_file():
    filename = "./image/*.[Pp][Nn][Gg]"
    files = get_all_file(filename)
    for png in files:
        os.remove(png)
    
if __name__ == "__main__":
    filename = "./image/*.[Pp][Nn][Gg]"
    files = get_all_file(filename)
    to_ather_file(files, "jpg")
    del_old_file()
    print("\n\n图片转换完成！")