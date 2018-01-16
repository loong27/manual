# -*- coding:utf-8 -*-
from os.path import splitext
import os
import glob
from PIL import Image
 
def get_all_file(filename):
    files = glob.glob(filename)
    return files
 
def to_ather_file(files, type):
    for file in files:
        im = Image.open(file).convert('RGB')
        newFile = splitext(file)[0]+"." + type
        im.save(newFile)
 
def del_old_file(filename):
    files = get_all_file(filename)
    for file in files:
        os.remove(file)
    
if __name__ == "__main__":
    changeType = input('请选择转换模式(1.jpg->png 2.png->jpg)：')
    if changeType == "1":
        filename = './image/*.[Jj][Pp][Gg]'
        files = get_all_file(filename)
        to_ather_file(files, "png")
        del_old_file(filename)
    elif changeType == "2":
        filename = './image/*.[Pp][Nn][Gg]'
        files = get_all_file(filename)
        to_ather_file(files, "jpg")
        del_old_file(filename)
    else:
        print("输入有误")
    