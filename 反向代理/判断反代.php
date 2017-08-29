<?php 
$proxy_rs = $_SERVER['SERVER_NAME'];
if( $proxy_rs != 'zzzedu.cn') 
{
 echo '非法反向代理访问';
 header('Location: http://www.zzzedu.cn/');
 exit;
}
 ?>