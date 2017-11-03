<?php
$data=array(
0=>array('one'=>34,'two'=>'d'),
1=>array('one'=>45,'two'=>'e'),
2=>array('one'=>47,'two'=>'h'),
3=>array('one'=>12,'two'=>'c'),
4=>array('one'=>15,'two'=>'w'),
5=>array('one'=>85,'two'=>'r'),
);
foreach($data as $val){
$key_arrays[]=$val['one'];
}
array_multisort($key_arrays,SORT_ASC,SORT_NUMERIC,$data);
var_dump($data);