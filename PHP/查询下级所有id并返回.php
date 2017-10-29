<?php

    //查找所有下级知识点
    public function getAllChildcateIds($categoryID)
    {
        //初始化ID数组
        $array[] = $categoryID;
        $db = db('exam_pool');
        do
        {
            $ids = '';
            $where['pid'] = array('in',$categoryID);
            $cate = $db->where($where)->select();
            foreach ($cate as $k=>$v)
            {
                $array[] = $v['id'];
                $ids .= ',' . $v['id'];
            }
            $ids = substr($ids, 1, strlen($ids));
            $categoryID = $ids;
        }
        while (!empty($cate));
        $ids = implode(',', $array);
        return $ids;    //  返回字符串
        //return $array //返回数组
    }