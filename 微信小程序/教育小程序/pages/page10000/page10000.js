var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"carousel1":{"type":"carousel","style":"height:445.3125rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":{"action":"goods-trade","goods-id":"1008206","goods-name":"【特约】Adobe讲师平面设计-UI设计PS+AI软件精修"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff258d3c4b6.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":0,"eventParams":"{\"goods_id\":\"1008206\",\"goods_type\":null}","eventHandler":"tapGoodsTradeHandler"},{"customFeature":{"action":"goods-trade","goods-id":"1023294","goods-name":"JAVA语言开发系列教程","page-link":"prePage"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fef9fa5e66f.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":1,"eventParams":"{\"goods_id\":\"1023294\",\"goods_type\":null}","eventHandler":"tapGoodsTradeHandler"},{"customFeature":{"action":"goods-trade","goods-id":"1023286","goods-name":"给产品经理的交互设计体系课"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff25fe13fd0.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":2,"eventParams":"{\"goods_id\":\"1023286\",\"goods_type\":null}","eventHandler":"tapGoodsTradeHandler"},{"customFeature":{"action":"goods-trade","goods-id":"1008204","goods-name":"UI设计\/APP\/WEB\/交互设计\/UI动效进阶精品课"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fef9ffb773b.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":3,"eventParams":"{\"goods_id\":\"1008204\",\"goods_type\":null}","eventHandler":"tapGoodsTradeHandler"},{"customFeature":{"action":"goods-trade","page-link":"prePage","goods-id":"1008212","goods-name":"PS\/AI平面设计广告体验班【51RGB在线教育】"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fef9ff419ae.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":4,"eventParams":"{\"goods_id\":\"1008212\",\"goods_type\":null}","eventHandler":"tapGoodsTradeHandler"}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:58.59375rpx;margin-bottom:auto;margin-right:auto;margin-top:-421.875rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:58.59375rpx;width:656.25rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:46.875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fefb49ae683.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10013"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10013\\\/page10013\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:49.21875rpx;width:328.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:128.90625rpx;top:9.375rpx;margin-right:0;","content":"搜寻你想要的课程","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10013"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10013\\\/page10013\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"prePage"},"animations":[],"page_form":"","compId":"free_vessel2","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel2","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/prePage\\\/prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:229.6875rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:365.625rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:75rpx;top:46.875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ffff05b3b4e.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10004"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10004\\\/page10004\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:243.75rpx;top:46.875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1ae6cd7bc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10007"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10007\\\/page10007\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:581.25rpx;top:46.875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1ae6cd435.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10008"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10008\\\/page10008\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:65.625rpx;top:147.65625rpx;margin-right:0;","content":"完美课程","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10004"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10004\\\/page10004\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:234.375rpx;top:147.65625rpx;margin-right:0;","content":"设计新讯","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10007"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10007\\\/page10007\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:574.21875rpx;top:147.65625rpx;margin-right:0;","content":"学堂助手","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10008"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10008\\\/page10008\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:234.375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:392.64750480652rpx;top:395.12228965759rpx;","content":"https:\/\/1251027630.cdn.myqcloud.com\/1251027630\/zhichi_frontend\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel3"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:412.5rpx;top:46.875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1b102bc43.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10018"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10018\\\/page10018\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:405.46875rpx;top:147.65625rpx;margin-right:0;","content":"金牌讲师","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10018"},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":8,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10018\\\/page10018\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:70.3125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:30.46875rpx;width:39.84375rpx;margin-left:auto;margin-right:0;margin-top:0;left:35.15625rpx;top:21.09375rpx;position:absolute;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1ec105ab5.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"none"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:96.09375rpx;top:16.40625rpx;margin-right:0;","content":"咫尺学堂喊你来领优惠券啦！","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:117.1875rpx;margin-left:auto;margin-right:0;margin-top:0;left:592.96875rpx;top:11.71875rpx;position:absolute;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff1ec11f406.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10019"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10019\\\/page10019\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel4"},"title_ele5":{"type":"title-ele","style":"opacity:1;line-height:70.3125rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:32.8125rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;","content":"推荐课程","customFeature":{"mode":1,"markColor":"rgb(21, 139, 224)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele5","parentCompid":"title_ele5","markColor":"rgb(21, 139, 224)","mode":1},"list_vessel6":{"type":"list-vessel","style":"margin-top:2.34375rpx;opacity:1;height:796.875rpx;background-color:rgba(236, 236, 236, 0.93);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:398.4375rpx;margin-bottom:auto;margin-right:auto;margin-top:-23.4375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:199.21875rpx;width:304.6875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"https:\/\/1251027630.cdn.myqcloud.com\/1251027630\/zhichi_frontend\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"none","inner-page-link":"prePage","segment":"cover","ifMust":true},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:304.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:246.09375rpx;margin-right:0;right:auto;","content":"我是文本","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"title","ifMust":true},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel6","compId":"data.content[0]"}],"customFeature":{"background-color":"rgba(236, 236, 236, 0.93)","background-image":"","form":"appointment","id":"list-869584331698","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"goodsDetail","margin":"0","name":"列表","source":"15955","vesselAutoheight":0,"mode":1,"height":"340px"},"animations":[],"page_form":"","compId":"list_vessel6","list_style":"background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-869584331698","is_more":1,"param":"{\"id\":\"list-869584331698\",\"form\":\"appointment\",\"page\":1,\"app_id\":\"jJ47h47RG7\",\"is_count\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"15955\"}}","form":"appointment"},"title_ele7":{"type":"title-ele","style":"opacity:1;line-height:70.3125rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:32.8125rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;","content":"编程开发","customFeature":{"mode":1,"markColor":"rgb(21, 139, 224)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele7","parentCompid":"title_ele7","markColor":"rgb(21, 139, 224)","mode":1},"list_vessel8":{"type":"list-vessel","style":"margin-top:2.34375rpx;opacity:1;height:1511.71875rpx;background-color:rgb(236, 236, 236);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:503.90625rpx;margin-bottom:auto;margin-right:auto;margin-top:-23.4375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:375rpx;width:679.6875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"https:\/\/1251027630.cdn.myqcloud.com\/1251027630\/zhichi_frontend\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"none","inner-page-link":"prePage","segment":"cover","ifMust":true},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:428.90625rpx;margin-right:0;right:auto;","content":"我是文本","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"title","ifMust":true},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel8","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(236, 236, 236)","background-image":"","form":"appointment","id":"list-948323108256","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"goodsDetail","margin":"1","name":"列表","source":"16059","vesselAutoheight":0,"mode":0,"height":"645px"},"animations":[],"page_form":"","compId":"list_vessel8","list_style":"margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-948323108256","is_more":1,"param":"{\"id\":\"list-948323108256\",\"form\":\"appointment\",\"page\":1,\"app_id\":\"jJ47h47RG7\",\"is_count\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"16059\"}}","form":"appointment"},"title_ele9":{"type":"title-ele","style":"opacity:1;line-height:70.3125rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:32.8125rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;","content":"电子商务","customFeature":{"mode":1,"markColor":"rgb(21, 139, 224)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele9","parentCompid":"title_ele9","markColor":"rgb(21, 139, 224)","mode":1},"list_vessel10":{"type":"list-vessel","style":"margin-top:2.34375rpx;opacity:1;height:351.5625rpx;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:351.5625rpx;margin-bottom:auto;margin-right:auto;margin-top:-23.4375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:199.21875rpx;width:304.6875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"https:\/\/1251027630.cdn.myqcloud.com\/1251027630\/zhichi_frontend\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"none","inner-page-link":"prePage","segment":"cover","ifMust":true},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:304.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:246.09375rpx;margin-right:0;right:auto;","content":"我是文本","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"title","ifMust":true},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel10","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(255, 255, 255)","background-image":"","form":"appointment","id":"list-848049244973","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"goodsDetail","margin":"0","name":"列表","source":"16067","vesselAutoheight":0,"mode":1,"height":"150px"},"animations":[],"page_form":"","compId":"list_vessel10","list_style":"background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-848049244973","is_more":1,"param":"{\"id\":\"list-848049244973\",\"form\":\"appointment\",\"page\":1,\"app_id\":\"jJ47h47RG7\",\"is_count\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"16067\"}}","form":"appointment"},"title_ele11":{"type":"title-ele","style":"opacity:1;line-height:70.3125rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:32.8125rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;","content":"职场发展","customFeature":{"mode":1,"markColor":"rgb(21, 139, 224)","boxColor":"#000","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"title_ele11","parentCompid":"title_ele11","markColor":"rgb(21, 139, 224)","mode":1},"list_vessel12":{"type":"list-vessel","style":"margin-top:2.34375rpx;opacity:1;height:914.0625rpx;background-color:rgba(236, 236, 236, 0.93);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:457.03125rpx;margin-bottom:auto;margin-right:auto;margin-top:-23.4375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:328.125rpx;width:679.6875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"https:\/\/1251027630.cdn.myqcloud.com\/1251027630\/zhichi_frontend\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"none","inner-page-link":"prePage","segment":"cover","ifMust":true},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:382.03125rpx;margin-right:0;right:auto;","content":"我是文本","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"title","ifMust":true},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel12","compId":"data.content[0]"}],"customFeature":{"background-color":"rgba(236, 236, 236, 0.93)","background-image":"","form":"appointment","id":"list-938762894847","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"goodsDetail","margin":"1","name":"列表","source":"16080","vesselAutoheight":0,"mode":0,"height":"390px"},"animations":[],"page_form":"","compId":"list_vessel12","list_style":"margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-938762894847","is_more":1,"param":"{\"id\":\"list-938762894847\",\"form\":\"appointment\",\"page\":1,\"app_id\":\"jJ47h47RG7\",\"is_count\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"16080\"}}","form":"appointment"},"has_tabbar":1},
    need_login: false,
    page_router: 'page10000',
    page_form: 'none',
      list_compids_params: [{"compid":"list_vessel6","param":{"id":"list-869584331698","form":"appointment","page":1,"app_id":"jJ47h47RG7","is_count":0,"idx_arr":{"idx":"category","idx_value":"15955"}}},{"compid":"list_vessel8","param":{"id":"list-948323108256","form":"appointment","page":1,"app_id":"jJ47h47RG7","is_count":0,"idx_arr":{"idx":"category","idx_value":"16059"}}},{"compid":"list_vessel10","param":{"id":"list-848049244973","form":"appointment","page":1,"app_id":"jJ47h47RG7","is_count":0,"idx_arr":{"idx":"category","idx_value":"16067"}}},{"compid":"list_vessel12","param":{"id":"list-938762894847","form":"appointment","page":1,"app_id":"jJ47h47RG7","is_count":0,"idx_arr":{"idx":"category","idx_value":"16080"}}}],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      onLoad: function (e) {
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow:false
    });
    appInstance.setPageUserInfo();
    if(e.detail){
      this.dataId = e.detail;
    }
    appInstance.checkLogin();

    this.suspensionBottom();
    this.getCartList();
    appInstance.globalData.urlLocationId = e.location_id;

  },
  dataInitial: function(){
    appInstance.dataInitial();
  },
  onShareAppMessage: function(){
    var pageRouter = this.page_router,
        pagePath = '/pages/'+pageRouter+'/'+pageRouter;

    // 统计用户分享APP
    appInstance.countUserShareApp();

    pagePath += this.dataId ? '?detail='+this.dataId : '';
    return {
      title: appInstance.getAppTitle() || '即速应用',
      desc: appInstance.getAppDescription() || '即速应用，拖拽生成app，无需编辑代码，一键打包微信小程序',
      path: pagePath
    }
  },
  onShow: function(){
    var that = this;
    setTimeout(function(){
      appInstance.setPageUserInfo();
    });

    //用于判断当前页面是否需要验证手机号
    if (this.need_login && !appInstance.getUserInfo().phone) {
      appInstance.turnToPage('/pages/bindCellphone/bindCellphone', true);
    }
  },
  onReachBottom : function() {
    for(let i in this.data){
      if(/^bbs[\d]+$/.test(i)){
        appInstance.bbsScrollFuc(i);
      }
    }
  },
  tapPrevewPictureHandler:function(e){
    appInstance.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function(){
    for (let i in this.data) {
      if(/suspension/.test(i)){
        let suspension = this.data[i],
            newdata = {};

        if(this.data.has_tabbar == 1){
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom - 56)*2.34;
        }else{
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom)*2.34;
        }
        this.setData(newdata);
      }
    }
  },
  pageScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
      if (this.prevPage !== curpage) {
          this.prevPage = curpage;
          appInstance.pageScrollFunc(compid, curpage);
      }
  },
  goodsScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    if (this.prevPage !== curpage) {
        this.prevPage = curpage;
        appInstance.goodsScrollFunc(compid, curpage);
    }
  },
  franchiseeScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.franchiseeScrollFunc(compid, curpage);
  },
  changeCount: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.changeCount(dataset);
  },
  inputChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.inputChange(dataset, value);
  },
  bindDateChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindDateChange(dataset, value);
  },
  bindTimeChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindTimeChange(dataset, value);
  },
  bindSelectChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindSelectChange(dataset, value);
  },
  bindScoreChange: function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.bindScoreChange(dataset);
  },
  submitForm: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.submitForm(dataset);
  },
  udpateVideoSrc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.udpateVideoSrc(dataset);
  },
  tapMapDetail: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.tapMapDetail(dataset);
  },
  uploadFormImg: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.uploadFormImg(dataset);
  },
  deleteUploadImg:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.deleteUploadImg(dataset);
  },
  listVesselTurnToPage: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.listVesselTurnToPage(dataset);
  },
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    let openVerifyPhone = e.currentTarget.dataset.openVerifyPhone; // 是否开启短信验证
    if(openVerifyPhone){
      if(!appInstance.getUserInfo().phone) {
        appInstance.turnToPage('/pages/bindCellphone/bindCellphone', true);
      } else {
        appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
      }
    } else {
      appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
    }
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let contact = e.currentTarget.dataset.contact;
    let goodsType = e.currentTarget.dataset.goodsType;
    switch(+goodsType){
      case 0:
      case 1: appInstance.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id +'&contact=' + contact);
        break;
      case 3: appInstance.turnToPage('/pages/toStoreDetail/toStoreDetail?detail=' + id);
        break;
    }
  },
  turnToFranchiseeDetail: function(e){
    let dataset = e.currentTarget.dataset,
        id = dataset.id;
    appInstance.turnToPage('/pages/franchiseeDetail/franchiseeDetail?detail=' + id);
  },
  sortListFunc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.sortListFunc(dataset);
  },
  bbsInputComment: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputComment(dataset, comment);
  },
  bbsInputReply: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputReply(dataset, comment);
  },
  uploadBbsCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsCommentImage(dataset);
  },
  uploadBbsReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsReplyImage(dataset);
  },
  deleteCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteCommentImage(dataset);
  },
  deleteReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteReplyImage(dataset);
  },
  bbsPublishComment: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishComment(dataset);
  },
  clickBbsReplyBtn: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.clickBbsReplyBtn(dataset);
  },
  bbsPublishReply: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishReply(dataset);
  },
  keywordList:{},
  bindSearchTextChange : function(e){
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  searchList:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.searchList(dataset);
  },
  selectLocal:function(e){
    var that = this;
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    newdata[id].hidden = typeof(this.data[id].hidden) == undefined ? false : !this.data[id].hidden;
    newdata[id].provinces = ['请选择'];  newdata[id].citys =['请选择']; newdata[id].districts = ['请选择']
    newdata[id].provinces_ids =[null]; newdata[id].city_ids =[null]; newdata[id].district_ids = [null];
    for(var i in newdata[id].areaList){
      newdata[id].provinces.push(newdata[id].areaList[i].name);
      newdata[id].provinces_ids.push(newdata[id].areaList[i].region_id);
    }
    newdata[id].newlocal = '';
    this.setData(newdata);
  },
  cancelCity:function(e){
    var that = this;
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    newdata[id].hidden = !this.data[id].hidden;
    newdata[id].province = '';
    newdata[id].city = '';
    newdata[id].district = '';
    this.setData(newdata);
  },
  bindCityChange:function(e){
    const val = e.detail.value;
    let id = e.currentTarget.dataset.id,
        newdata = this.data,
        cityList = newdata[id].areaList;
        if(!newdata[id].newlocal){
          if(newdata[id].value[0] == val[0]){
            newdata[id].province = this.data[id].provinces[val[0]] == '请选择' ? '' : this.data[id].provinces[val[0]];
            newdata[id].citys = newdata[id].province == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities);
            newdata[id].city_ids = newdata[id].province == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities, 1);
            newdata[id].city = newdata[id].province == '' ? '' : newdata[id].citys[val[1]];
            newdata[id].districts = newdata[id].city == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities[val[1]].towns);
            newdata[id].district_ids = newdata[id].city == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities[val[1]].towns, 1);
            newdata[id].region_id = newdata[id].district_ids[val[2]];
            newdata[id].district = newdata[id].city == '' ? '' : newdata[id].districts[val[2]];
            newdata[id].value = val;
          }else{
            newdata[id].province = this.data[id].provinces[val[0]] == '请选择' ? '' : this.data[id].provinces[val[0]];
            newdata[id].citys = newdata[id].province == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities);
            newdata[id].city_ids = newdata[id].province == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities, 1);
            newdata[id].city = newdata[id].province == '' ? '' : newdata[id].citys[0];
            newdata[id].districts = newdata[id].city == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities[0].towns);
            newdata[id].district_ids = newdata[id].city == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities[0].towns, 1);
            newdata[id].region_id = newdata[id].district_ids[val[2]];
            newdata[id].district = newdata[id].city == '' ? '' : newdata[id].districts[val[2]];
            newdata[id].value = val;
          }          
          // newdata[id].district = newdata[id].district == '请选择'? '' :newdata[id].district
          this.setData(newdata)
    }
  },
  submitCity:function(e){
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    if(!newdata[id].districts){
      appInstance.showModal({content: '您未选择城市!'});
      newdata[id].province = '';
      newdata[id].city = '';
      newdata[id].district = '';
    }else{
      newdata[id].hidden = !this.data[id].hidden;
      newdata[id].newlocal = newdata[id].province + ' ' + newdata[id].city + ' ' +      newdata[id].district;
      newdata[id].value = [0,0,0];
      appInstance.citylocationList(e.currentTarget.dataset, newdata[id].region_id);
    }
    this.setData(newdata);
  },
  getCityList:function (province, id){
    let cityList = [], cityList_id = [];
    for(let i in province){
      if(typeof(province[i]) == 'object'){
        cityList.push(province[i].name)
        cityList_id.push(province[i].region_id);
      }else{
        cityList[1] = province.name;
        cityList_id[1]=province.region_id;
      }
    }
    if(id){
      return cityList_id;
    }else{
      return cityList;
    }

  },
  

  
  
  tapGoodsTradeHandler: function(event) {
    appInstance.tapGoodsTradeHandler(event);
  },
  tapInnerLinkHandler: function(event) {
    appInstance.tapInnerLinkHandler(event);
  },
  tapPhoneCallHandler: function(event) {
    appInstance.tapPhoneCallHandler(event);
  },
  tapRefreshListHandler: function(event) {
    var _this = this;
    appInstance.tapRefreshListHandler(event, _this);
  },
  tapGetCouponHandler: function(event) {
    appInstance.tapGetCouponHandler(event);
  },
  tapCommunityHandler: function(event) {
    appInstance.tapCommunityHandler(event);
  },
  turnToCommunityPage: function(event){
    let id = event.currentTarget.dataset.id;
    appInstance.turnToPage('/pages/communityPage/communityPage?detail=' + id);
  },
  tapToFranchiseeHandler: function(event){
    appInstance.tapToFranchiseeHandler(event);
  },
  tapToTransferPageHandler: function(event){
    appInstance.tapToTransferPageHandler(event);
  },
  tapFranchiseeLocation: function(event){
    appInstance.tapFranchiseeLocation(event);
  },
  showAddShoppingcart: function(event) {
    var that = this,
        goods_id = event.currentTarget.dataset.id;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/getGoods',
      data: {
        data_id: goods_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          var goods = res.data[0].form_data,
              defaultSelect = goods.model_items[0],
              goodsModel = [],
              selectModels = [],
              goodprice = 0,
              goodstock = 0,
              goodid ;
          if(goods.model_items.length){
            goodprice = defaultSelect.price;
            goodstock = defaultSelect.stock;
            goodid = defaultSelect.id;
          }else{
            goodprice = goods.price;
            goodstock = goods.stock;
          }
          for(let key in goods.model){
            if(key){
              let model = goods.model[key];
              goodsModel.push(model);
              selectModels.push(model.subModelId[0]);
            }
          }
          goods.model = goodsModel;
          if (goods.goods_type == 3){
            var businesssTimeString = '';
            if (goods.business_time && goods.business_time.business_time) {
              var goodBusinesssTime = goods.business_time.business_time;
              for (var i = 0; i < goodBusinesssTime.length; i++) {
                businesssTimeString += goodBusinesssTime[i].start_time.substring(0, 2) + ':' + goodBusinesssTime[i].start_time.substring(2, 4) + '-' + goodBusinesssTime[i].end_time.substring(0, 2) + ':' + goodBusinesssTime[i].end_time.substring(2, 4) + '/';
              }
              businesssTimeString = '出售时间：' + businesssTimeString.substring(0, businesssTimeString.length - 1);
              that.setData({
                
              })
            }
	  	      that.getCartList();
            that.setData({
              'addTostoreShoppingCartShow': true,
              businesssTimeString: businesssTimeString
            })
          }else{
            that.setData({
              'addShoppingCartShow': true
            })
          }
          that.setData({
            goodsInfo: goods ,
            'selectGoodsModelInfo.price': goodprice,
            'selectGoodsModelInfo.stock': goodstock,
            'selectGoodsModelInfo.buyCount': 1,
            'selectGoodsModelInfo.buyTostoreCount': 0,
            'selectGoodsModelInfo.cart_id':'',
            'selectGoodsModelInfo.models': selectModels,
            'selectGoodsModelInfo.modelId': goodid
          });
        }
      }
    });
  },
  hiddeAddShoppingcart: function(){
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow:false
    });
  },
  selectGoodsSubModel: function(e){
    let dataset = e.target.dataset,
        modelIndex = dataset.modelIndex,
        submodelIndex = dataset.submodelIndex,
        data = {};

    data['selectGoodsModelInfo.models['+modelIndex+']'] = this.data.goodsInfo.model[modelIndex].subModelId[submodelIndex];
    this.setData(data);
    this.resetSelectCountPrice();
  },
  resetSelectCountPrice: function(){
    let selectModelIds = this.data.selectGoodsModelInfo.models.join(','),
        modelItems = this.data.goodsInfo.model_items,
        data = {};
    data['selectGoodsModelInfo.buyCount'] = 1;
    data['selectGoodsModelInfo.buyTostoreCount'] = 0;
    for (let i = modelItems.length - 1; i >= 0; i--) {
      if(modelItems[i].model == selectModelIds){
        data['selectGoodsModelInfo.stock'] = modelItems[i].stock;
        data['selectGoodsModelInfo.price'] = modelItems[i].price;
        data['selectGoodsModelInfo.modelId'] = modelItems[i].id;
        break;
      }
    }
    this.setData(data);
  },
  // 电商
  clickGoodsMinusButton: function(e){
    var that = this;
    let count = this.data.selectGoodsModelInfo.buyCount;
    if(count <= 1){
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count - 1
    });
  },
  clickGoodsPlusButton: function(e){
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
        count = selectGoodsModelInfo.buyCount,
        stock = selectGoodsModelInfo.stock;

    if(count >= stock) {
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count + 1
    });
  },
  sureAddToShoppingCart: function(){
    var that = this,
        param = {
          goods_id: this.data.goodsInfo.id,
          model_id: this.data.selectGoodsModelInfo.modelId || '',
          num: this.data.selectGoodsModelInfo.buyCount,
          sub_shop_app_id : ''
        };

    appInstance.sendRequest({
      url: '/index.php?r=AppShop/addCart',
      data: param,
      success: function(res){
        appInstance.showToast({
          title:'添加成功',
          icon:'success'
        })
        that.hiddeAddShoppingcart();
      }
    })
  },

  // 到店

  clickTostoreMinusButton: function (e) {
    var that = this;
    let count = this.data.selectGoodsModelInfo.buyTostoreCount;
    if (count <= 0) {
      return;
    }
    if (count <= 1) {
      appInstance.sendRequest({
        hideLoading: true,
        url: '/index.php?r=AppShop/deleteCart',
        method: 'post',
        data: {
          cart_id_arr: [that.data.selectGoodsModelInfo.cart_id],
          sub_shop_app_id: that.franchiseeId || ''
        },
        fail: function (res) {
          that.setData({
            addToShoppingCartCount: currentGoodsNum,
            cartGoodsNum: currentCartNum,
            cartGoodsTotalPrice: currentTotalPrice
          });
        }
      });
      this.setData({
        'selectGoodsModelInfo.buyTostoreCount': count - 1
      });
      this.getCartList();
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyTostoreCount': count
    });
    this.sureAddTostoreShoppingCart('mins');
  },
  clickTostorePlusButton: function (e) {
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
      count = selectGoodsModelInfo.buyTostoreCount,
      stock = selectGoodsModelInfo.stock;

    if (count >= stock) {
      appInstance.showModal({
        content: '库存不足'
      });
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyTostoreCount': count
    });
    this.sureAddTostoreShoppingCart('plus');
  },
  sureAddTostoreShoppingCart: function (type) {
    var that = this,
        goodsNum = this.data.selectGoodsModelInfo.buyTostoreCount;
    if(type == 'plus'){
      goodsNum = goodsNum + 1;
    }else{
      goodsNum = goodsNum - 1;
    }
     var param = {
        _app_id: appInstance.getAppId(),
        app_id: appInstance.getAppId(),
        session_key: appInstance.getSessionKey(),
        goods_id: this.data.goodsInfo.id,
        model_id: this.data.selectGoodsModelInfo.modelId || '',
        num: goodsNum,
        sub_shop_app_id: ''
      };

    // appInstance.sendRequest({
    //   url: '/index.php?r=AppShop/addCart',
    //   data: param,
    //   success: function (res) {
    //     var data = res.data;
    //     that.setData({
    //       'selectGoodsModelInfo.cart_id': data
    //     })
    //     that.getCartList();
    //   }
    // })
    wx.request({
      url: appInstance.getSiteBaseUrl() + '/index.php?r=AppShop/addCart',
      data: param,
      success: function (res) {
        if (res.data.status == 0) {
          var data = res.data.data;
          that.setData({
            'selectGoodsModelInfo.cart_id': data,
            'selectGoodsModelInfo.buyTostoreCount': goodsNum
          })
          that.getCartList();
        } else {
          if (res.data.status == 401 || res.data.status == 2) {
              // 未登录
              app.login();
              return;
            }
          that.setData({
            'selectGoodsModelInfo.buyTostoreCount': 0
          });
          appInstance.showModal({
            content: res.data.data
          })
        }
      }
    })
  },
  readyToPay: function () {
    if (this.data.cartGoodsNum <= 0) return;
    var franchiseeId = this.franchiseeId,
      pagePath = '/pages/previewOrderDetail/previewOrderDetail' + (franchiseeId ? '?franchisee=' + franchiseeId : '');
    appInstance.turnToPage(pagePath);
    this.hiddeAddShoppingcart();
  },
  getValidateTostore: function(){
    var that = this;
    wx.request({
      url: appInstance.getSiteBaseUrl() + '/index.php?r=AppShop/precheckShoppingCart',
      data: {
        _app_id: appInstance.getAppId(),
        app_id: appInstance.getAppId(),
        session_key: appInstance.getSessionKey(),
        sub_shop_app_id: that.franchiseeId || ''
      },
      success: function (res) {
        if (res.data.status == 0){
          that.readyToPay();
        } else if (res.data.status == 401 || res.data.status == 2) {
            // 未登录
            appInstance.login();
            return;
        } else if (res.data.status == 1){
            appInstance.showModal({
              content: res.data.data,
              confirm: function () {
                that.goToShoppingCart();
              }
            })
        }else{
          appInstance.showModal({
            content: res.data.data
          })
        }    
      }
    })
  },
  goToShoppingCart: function () {
    var franchiseeId = this.franchiseeId,
      pagePath = '/pages/shoppingCart/shoppingCart' + (franchiseeId ? '?franchisee=' + franchiseeId : '');
    appInstance.turnToPage(pagePath);
    this.hiddeAddShoppingcart();
  },
  getCartList: function () {
    var that = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/cartList',
      data: {
        page: 1,
        page_size: 100,
        sub_shop_app_id: this.franchiseeId || '' 
      },
      success: function (res) {
        var price = 0,
          num = 0,
          addToShoppingCartCount = 0;

        for (var i = res.data.length - 1; i >= 0; i--) {
          var data = res.data[i];
          price += +data.num * +data.price;
          num += +data.num;
          if (that.goodsId == data.goods_id) {
            addToShoppingCartCount = data.num;
            that.cart_id = data.id;
          }
        }
        that.setData({
          cartGoodsNum: num,
          cartGoodsTotalPrice: price.toFixed(2),
          addToShoppingCartCount: addToShoppingCartCount,

        });
      }
    })
  },
  stopPropagation: function(){},
  turnToSearchPage:function(e){
    if (e.target.dataset.param) {
      appInstance.turnToPage('/pages/advanceSearch/advanceSearch?param=' + e.target.dataset.param);
    }else{
      appInstance.turnToPage('/pages/advanceSearch/advanceSearch');
    }
  }
};
Page(pageData);
