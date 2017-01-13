// pages/me/info.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '订单详情',
      success: function(res) {
        // success
      }
    })
  },
  onReady:function(){
   var than = this;
    // 加载订单
    wx.request({
      url: 'http://localhost:3000/orders',
      // data: {},
      method: 'GET',
      header: {
            'content-type': 'application/json'
      },
      success: function(res){
        // success
        console.log(res.data);
        than.setData({
          data: res.data
        })
      }
    })
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