# -*- coding:utf-8 -*-
from os.path import splitext
import os
import glob
from PIL import Image
 
def get_all_file(filename):
    files = glob.glob(filename)
    return files
 
def to_ather_file(files, type):
    for jpg in files:
        im = Image.open(jpg)
        png = splitext(jpg)[0]+"." + type
        im.save(png)
 
def del_old_file():
    filename = "./image/*.[Jj][Pp][Gg]"
    files = get_all_file(filename)
    for jpg in files:
        os.remove(jpg)

if __name__ == "__main__":
    filename = "./image/*.[Jj][Pp][Gg]"
    files = get_all_file(filename)
    to_ather_file(files, "png")
    del_old_file()
    print("\n\n图片转换完成！")