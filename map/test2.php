<?php

header("Content-type:text/html; charset=utf8");
		$url="http://api.map.baidu.com/geocoder/v2/?location=".$_POST["lat"].",".$_POST["lng"]."&ak=hNGh7Ijv4ed9ztF6nUzsbt7sG94hHDSg&coordtype=bd09ll&output=json";		
		$json = file_get_contents($url);
		$arr = json_encode($json, true);
		echo $arr;
?>