<?php 

/**
* 新闻爬虫功能模块
* @author loong
* @param 
* @date 2018/4/22 10:50
*/

if(!defined("Xincms")) exit("Access Denied");

class SpiderAction extends BackAction
{
	protected   $dao,$cache_model;
	function _initialize()
	{
		parent::_initialize();
		$this->dao = D('Spider');
		unset($_POST['status']);
		unset($_POST['groupid']);
		unset($_POST['amount']);
		unset($_POST['point']);
    }

    //列表页面
	public function index()
	{
		$model = M('spider');
		$list = $model->where(1)->select();
		$this->assign('list', $list);
		$this->display();
	}

	//修改页面
	public function edit()
	{
		$model = M('spider');
		$pk=ucfirst($model->getPk ());
		$id = intval($_REQUEST [$model->getPk ()]);
		if(empty($id))   $this->error(L('do_empty'));
		$do='getBy'.$pk;
		$vo = $model->$do ( $id );
		if($vo['setup']) $vo['setup']=string2array($vo['setup']);
		$this->assign ( 'vo', $vo );
		$this->display ();
	}

	//采集
	public function start()
	{
		$id = $_POST['id'];
		if(!empty($id))
		{
			$model = M('spider');
			$rule = $model->where('id='.$id)->find();
			$domain = $rule['domain'];
			$url = $rule['url'];
			$listrule = $rule['listrule'];
			$contentrule = $rule['contentrule'];
			$donumber = 0;
			$contents = M('content');

			session_start();

			$donumber = $_SESSION['donumber'];

			$list = $_SESSION['weblist'];

	        if (empty($list[0])) {
	        	$url = empty($_SESSION['nexturl']) ? $url : $_SESSION['nexturl'];
				$page =  @file_get_contents($url); //获取列表页内容

				$pattern = '/<meta.+?charset=[^\w]?([-\w]+)/i'; //匹配网页编码方式正则
		        preg_match($pattern, $page, $arr); //获取网页编码方式
		        $charset = strtolower($arr[1]);
		        if($charset == 'GBK'){
		            $content=iconv("GBK","UTF-8",$page); //若是gbk编码方式则转为utf-8
		        }else if ($charset == 'gb2312') {
		        	$content=iconv("gb2312","UTF-8",$page); //若是gb2312编码方式则转为utf-8
		        }else{
		            $content = $page;
		        }

				$pattern = '/(?i)<a\b[^>]*?href=([\"\']?)([^\"\']*?)\1[^>]*?>下一页<\/a>/';
		        preg_match($pattern, $page, $arr);
		        $nexturl = $domain.$arr[2];
		        if (empty($nexturl)) {
		        	echo json_encode(['code'=>201,'msg'=>'采集完成！']);
		        	exit;
		        }
		        $_SESSION['nexturl'] = $nexturl;

		        preg_match($listrule,$content,$arr); //获取列表部分内容
		        $main_content = $arr[1];
		        $pattern1 = '/<a\s?.*?href=[\"\'](.*?)[\"\'].*?<\/a>/'; //匹配url正则
		        preg_match_all($pattern1, $main_content, $link); //获取文章url列表
		        $links = array_unique($link[1]);
		        foreach ($links as $v) {
		            preg_match('/^(..\/)/', $v, $arr); //检查链接是否包含域名
		            $http_exists = count($arr);
		            if($http_exists){
		                $v = substr($v,2);
		            }

		            preg_match('/^((https?|ftp|news):\/\/)/', $v, $arr); //检查链接是否包含域名
		            $http_exists = count($arr);
		            if($http_exists){
		                $list[] = $v;
		            }else{
		                $list[] = $domain.$v;
		            }
		        }
		        $weburl = $list[0];
		        unset($list[0]);


	        }else{
	        	$weburl = $list[0];
	        	unset($list[0]);
	        }

	        $list = array_values($list);
		    $_SESSION['weblist'] = $list;

	        if (empty($weburl)) {
	        	echo json_encode(['code'=>201, 'number'=>$donumber,'msg'=>$weburl.'没有待采集链接']);
	        	exit;
	        }

	        $checkurl = $contents->where("source='".$weburl."'")->count();
	        if ($checkurl>0) {
	        	echo json_encode(['code'=>200, 'number'=>$donumber,'msg'=>$weburl.'--该链接已经采集过！']);
	        	exit;
	        }

        	$detail = @file_get_contents($weburl);

        	//匹配标题
	        $pattern = '/<title>(.*?)<\/title>/';
	        preg_match($pattern, $detail, $arr);
	        preg_match('/(.*?)[-|_].*?/', $arr[1], $newarr);
	        if (!empty($newarr[1])) {
	        	$title = $newarr[1];
	        }else{
	        	$title = $arr[1];
	        }

	        $pattern = '/<meta name=\"keywords\" content=?[\"\']?(.*?)[\"\']?\s?[\/]?>/';
        	preg_match($pattern, $detail, $arr);
        	$keywords = $arr[1];

	        //匹配描述
	        $pattern = '/<meta name=\"description\" content=\"(.*?)\"\s?[\/]?>/';
	        preg_match($pattern, $detail, $arr);
	        $description = $arr[1];

	        //匹配内容
	        preg_match($contentrule, $detail, $arr);
	        $content = $arr[1].'</div>';

	        $data = ['title' => $title, 'keywords' => $keywords, 'description' => $description, 'source' => $weburl];

	        //看是否已经抓取过，抓取过则跳过
	        $check = $contents->where("title='".$title."'")->count();
	        
	        if (empty($title)) {
	        	echo json_encode(['code'=>200, 'number'=>$donumber,'msg'=> '采集的文章标题为空已忽略','url'=>$weburl]);
	        	exit();
	        }

	        if ($check<=0) {
	        	$contentid = $contents->add($data);
	        	$addcontent = M('article')->add(['id'=>$contentid, 'content'=>$content, 'lang'=>1,'userid'=>1, 'mid'=>2]);
	        	$donumber = $_SESSION['donumber'] + 1;
	        	$_SESSION['donumber'] = $donumber;
	        	echo json_encode(['code'=>200, 'number'=>$donumber,'msg'=> $title.'--采集成功','url'=>$weburl]);
	        	exit();
	        }else{
				echo json_encode(['code'=>200, 'number'=>$donumber,'msg'=>$title.'--该文章已经采集过！']);
	        	exit();	        	
	        }

		}else{
			echo json_encode(['code'=>404,'msg'=>'站点不存在！']);
			exit;
		}
	}

	//清空爬虫session
	public function recoveryspider()
	{
		unset($_SESSION['donumber']);
		unset($_SESSION['weblist']);
		unset($_SESSION['nexturl']);
		echo json_encode(['code'=>200, 'msg'=>'采集工作结束！']);
		exit;
	}

	//回答抓取接口询问
	public function statecheck()
	{
		session_start();
		$donumber = $_SESSION['donumber'];
		return $donumber;
	}

   //    抓取新闻列表链接
    public function get_news_list($link, $dir_name, $rule)
    {
        $page_content = @file_get_contents($link);
        if(!$page_content){
        	return false;
        }
        $page_content = $this->grep_charset($page_content);

//        preg_match("/<div class=\"wrap_bigbox\">.*?<ul>(.*?)<\/ul>\s+<\/div.*? >/si",$page_content,$arr);
//        preg_match("/<div class=\"left_c balck14\">.*?<ul>(.*?)<\/ul>/si",$page_content,$arr);
//        preg_match("/<div class=\"zj_list_news\".*?<ul>(.*?)<\/ul>/si",$page_content,$arr);
//        preg_match("/<div class=\"sscon\".*?<ul class=\"sju\">(.*?)<\/ul>/si",$page_content,$arr);
//        $pattern = "/<div class=\"sscon\".*?<ul class=\"sju\">(.*?)<\/ul>/si";}
        preg_match($rule,$page_content,$arr);
        $main_content = $arr[1];
        $pattern1 = '/<a\s?.*?href=[\"\'](.*?)[\"\'].*?<\/a>/';
        preg_match_all($pattern1, $main_content, $link);
        $links = $link[1];
        foreach ($links as $v) {
            preg_match('/^((https?|ftp|news):\/\/)/', $v, $arr);
            $http_exists = count($arr);
            if($http_exists){
                $all_link[] = $v;
            }else{
                $all_link[] = $dir_name.$v;
            }
        }
        return $all_link;
    }


	/**
     * 删除
     *
     */
	function delete(){
		$name = MODULE_NAME;
		$model = M ( $name );
		$M=C('M');
		$pk = $model->getPk ();
		$id = $_REQUEST [$pk];
		if (isset ( $id )){
			if(false!==$model->delete($id)){
				if(in_array($name,$this->cache_model)) savecache($name);
				if($this->moduleid)delattach(array('moduleid'=>$this->moduleid,'id'=>$id));
				if($name=='Order')M('Order_data')->where('order_id='.$id)->delete();
				$this->success(L('delete_ok'));
			}else{
				$this->error(L('delete_error').': '.$model->getDbError());
			}
		}else{
			$this->error (L('do_empty'));
		}
	}
}


?>