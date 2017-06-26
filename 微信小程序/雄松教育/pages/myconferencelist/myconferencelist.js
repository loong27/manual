Page({
  data: {
    reservelist:[]
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData:function(){
    this.setData({
      reservelist:[
        {
          "id": 1,
          "name": "2018MBA辅导逻辑(一)",
          "time": "68分11秒",
          "reserver": "王老师",
          "imgurl": "http://www.xiongsongedu.com/attachment/images/6/2017/06/FAP3bOM1yiYlpzcLB1Y2BpmG3ZrbGA.jpg"
        },
        {
          "id": 2,
          "name": "2018MBA英语词汇(二)",
          "time": "35分13秒",
          "reserver": "张老师",
          "imgurl": "http://www.xiongsongedu.com/attachment/images/6/2017/06/ZExpiWtpBIMzEe7iqpbQrEBMmiwbPE.jpg"
        }
      ]
    })
  }
})
