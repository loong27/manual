import util from './../../utils/util.js';
Page({
  data: {
    sortindex:0,  //排序索引
    sortid:null,  //排序id
    sort:[],
    activitylist:[], //会议室列表列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchConferenceData();
    this.fetchSortData();
  },
  fetchSortData:function(){ //获取筛选条件
    this.setData({
      "sort": [
          {
              "id": 0,
              "title": "热门点击"
          },
          {
              "id": 1,
              "title": "最新发布"
          },
          {
              "id": 2,
              "title": "最多参与"
          },
      ]
    })
  },

  fetchConferenceData:function(){  //获取会议室列表
    const perpage = 10;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    //获取服务器数据开始
    var that = this
    //调用应用实例的方法获取全局数据  
    wx.request({
      url: 'http://www.xiongsongedu.com/app/index.php?i=6&c=entry&m=ewei_shopv2&do=mobile&r=xcx.course&appid=loong&appsecret=kN83v57QGnQGkuhyqlBjCOOYubHo6d',//上线的话必须是https，没有appId的本地请求貌似不受影响  
      data: { appid: "loong", appsecret: "kN83v57QGnQGkuhyqlBjCOOYubHo6d" },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      header: { 
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.result);
        const newslists = res.data.result;
        that.setData({
          newslists: res.data.result
        })
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
    
  //获取服务器数据结束
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
      newlist.push({
        "id":i+1,
        "name": "2018MBA英语词汇(五)",
        "status": util.getRandomArrayElement(["进行中","报名中","已结束"]),
        "time": "2017/06/26 14:00",
        "coments": Math.floor(Math.random()*1000),
        "address":"全国",
        "imgurl":"http://www.xiongsongedu.com/attachment/images/6/2017/06/ZExpiWtpBIMzEe7iqpbQrEBMmiwbPE.jpg"
      })
    }
    this.setData({
      activitylist:this.data.activitylist.concat(newlist)
    })
  },
  setSortBy:function(e){ //选择排序方式
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid
    })
    console.log('排序方式id：'+this.data.sortid);
  },
  setStatusClass:function(e){ //设置状态颜色
    console.log(e);
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchConferenceData();
  },
  onPullDownRefresh:function(){ //下拉刷新
    this.setData({
      page:0,
      activitylist:[]
    })
    this.fetchConferenceData();
    this.fetchSortData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})