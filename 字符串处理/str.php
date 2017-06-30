<?php 
/**
 * substr()：从字符串中获取其中的一部分
 * strstr()：查找字符串在另一个字符串中第一次出现的位置，并返回从该位置到字符串结尾的所有字符
 * subchr()：同 strstr()
 * strrchr()：查找字符串在另一个字符串中最后一次出现的位置，并返回从该位置到字符串结尾的所有字符
 * substr()
 * string substr ( string string, int start [, int length] )
 */
 echo substr('abcdef', 1);      //输出 bcdef
 echo substr('abcdef', 1, 2);   //输出 bc
 echo substr('abcdef', -3, 2);  //输出 de
 echo substr('abcdef', 1, -2);  //输出 bcd

 /**
  * strstr()
  * string strstr ( string string, string needle )
  *
  */
 $email = 'user@weitip.com';
 $domain = strstr($email, '@');
 echo $domain;			// 输出 @weitip.com

/**
 * strchr()
 * string strrchr ( string string, string needle )
 */

	$str="AAA|BBB|CCC";
	echo strrchr($str, "|"); // 输错|CCC

/**
 * 结合 substr() 函数便可以实现 截取某个最后出现的字符后面的所有内容 这一功能：
 */
	$str="AAA|BBB|CCC";
	echo substr(strrchr($str, "|"), 1);


 ?>