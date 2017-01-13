// pages/index/info.js
Page({
  // 数据模块
  data:{
    // 定义默认数据为空，从后台获取
    list: {}
  },
  onReady:function() {

  },
  onLoad:function(options){
    var than = this;
    // 页面初始化 options为页面跳转所带来的参数
      wx.request({
        url: 'http://localhost:3000/about?uid='+options.id,
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          than.setData({
            list: res.data[0]
          })
          // 设置选项卡的title
          wx.setNavigationBarTitle({
            title: res.data[0].name
          })
          console.log(res.data[0]);
        }
      })
    console.log(options.id);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})