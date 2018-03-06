<?php  

	//通过ajax获取单个留言的详情
	public function ajax()
	{	
		global $_W;
		global $_GPC;
		$id = $_GPC['id'];
		if (!empty($id)) {
			$sql = 'show full fields from `ims_form_ceping`';
			$table = pdo_fetchall($sql); //取得表格所有字段

			$info = pdo_fetch('select * from ' . tablename('form_ceping') . ' where id = ' . $id);
			foreach ($info as $key => $value) {
				$i++;
				if (!empty($value)) {
					if ($key=='createtime') {
						$value = date('Y-m-d H:i:s',$value);
					}
					if ($key=='status') {
						if ($value==1) {
							$value = '已审核';
						}else{
							$value = '未审核';
						}
					}
					$msg[$i-1]['title'] = $table[$i-1]['Comment'];
					$msg[$i-1]['value'] = $value;
				}
			}
			$result = json_encode(['code'=>200,'msg'=>'成功！','result'=>$msg]);
			echo $result;
		}else{
			$result = json_encode(['code'=>404,'msg'=>'资源不存在！']);
			echo $result;
		}
	}