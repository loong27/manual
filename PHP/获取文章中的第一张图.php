<?php
/*
*获取文章第一章图片
* $text string 查找图片的文章
* return string 图片路径
*/
function getpic($text){
    preg_match_all("#<img.*\>#isU",$text,$ereg);//先通过正则匹配出来所有的 
    $img=$ereg[0][0];//这里返回匹配到的数组
    preg_match_all ("#src=('|\")(.*)('|\")#isU", $img, $img1); //使用正则获取所有图片地址
    $img_path =$img1[2][0];//获取第一张图片路径
    return $img_path; 
}