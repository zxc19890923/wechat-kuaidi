// me/me.js
Page({
  data:{
    userInfo: {
      
    }, 
    data: []
  },
  onLoad:function(options){
    wx.setNavigationBarTitle({
      title: '我',
      success: function(res) {
        // success
      }
    })
     // 页面渲染完成
    var than = this;
    wx.getUserInfo({
      success: function(res){
        // success
        console.log(res.userInfo);
        than.setData({
          userInfo: res.userInfo
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function() {
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
  }
})