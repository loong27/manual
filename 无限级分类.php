<?php 
	//无限级分类
	function get_stree($list,$id = 0)
	{
		foreach ($list as $key => $value) {
			if ($value['pid'] == $id) {
				$tree[$key] = $value;
				$tree[$key]['son'] = $this->get_stree($list,$value['id']);
			}
		}
		return $tree;
	}
	//无限级分类
	function get_stree_str($list,$id = 0)
	{
		$str = '<ul>';
		foreach ($list as $key => $value) {
			if ($value['pid'] == $id) {
				$tree[$key] = $value;
				$str .= '<li>'.$value['title'].'</li>';
				$str .= $this->get_stree_str($list,$value['id']);
			}
		}
		$str .= '</ul>';
		return $str;
	}
 ?>