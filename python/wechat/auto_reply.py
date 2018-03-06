# -*- coding:utf-8 -*-
import itchat
import time;  # 引入time模块
import urllib 
import urllib.request as urllib2

# import全部消息类型
from itchat.content import *
 
# 处理文本类消息
# 包括文本、位置、名片、通知、分享
@itchat.msg_register([TEXT, MAP, CARD, NOTE, SHARING])
def text_reply(msg):
  # 微信里，每个用户和群聊，都使用很长的ID来区分
  # msg['FromUserName']就是发送者的ID
  # 将消息的类型和文本内容返回给发送者
  url = 'http://i.weitip.com/index/wechat/index.html'
  values = {'keyword' : msg['Text']}
  data = urllib.parse.urlencode(values)
  req = urllib2.Request(url, data)   #send post
  response = urllib2.urlopen(req)
  result = response.read()
  itchat.send(result, msg['FromUserName'])
  # itchat.send('您发的消息:\n %s \n 我已收到。\n 稍后回复您。' % (msg['Text']), msg['FromUserName'])
 
# 处理多媒体类消息
# 包括图片、录音、文件、视频
@itchat.msg_register([PICTURE, RECORDING, ATTACHMENT, VIDEO])
def download_files(msg):
  # msg['Text']是一个文件下载函数
  # 传入文件名，将文件下载下来
  msg['Text'](msg['FileName'])
  # 把下载好的文件再发回给发送者
  return '@%s@%s' % ({'Picture': 'img', 'Video': 'vid'}.get(msg['Type'], 'fil'), msg['FileName'])
 
# 处理好友添加请求
@itchat.msg_register(FRIENDS)
def add_friend(msg):
  # 该操作会自动将新好友的消息录入，不需要重载通讯录
  itchat.add_friend(**msg['Text']) 
  # 加完好友后，给好友打个招呼
  itchat.send_msg('Nice to meet you!', msg['RecommendInfo']['UserName'])
 
# 处理群聊消息
@itchat.msg_register(TEXT, isGroupChat=True)
def text_reply(msg):
  if msg['isAt']:
    itchat.send(u'@%s\u2005I received: %s' % (msg['ActualNickName'], msg['Content']), msg['FromUserName'])
 
        

if __name__ == '__main__':
    itchat.auto_login(True)

    # 获取自己的UserName
    myUserName = itchat.get_friends(update=True)[0]["UserName"]
    itchat.run()