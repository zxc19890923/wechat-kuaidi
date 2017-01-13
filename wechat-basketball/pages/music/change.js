// pages/music/change.js
Page({
  data:{
    name: "",
    time: "09:00",
    date: "2017-1-1",
  },
  onLoad:function(options){
    var than = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '选择快递员',
      success: function(res) {
        // 单机通过id查询数据库用户信息
        wx.request({
          url: 'http://localhost:3000/local',
          data: {
            id: options.id
          },
          method: 'GET',
          header: {
                    'content-type': 'application/json'
          },
          success: function(res){
            // success
            console.log(res.data);
            // 如果单机了快递员的信息，那么就跳转到选择界面
            than.setData({
              name: res.data[0].title
            })
          }
        })
      }
    })
  },
  // 时间改变的时候，修改赋值
  bindTimeChange:function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  // 日期改变的时候，修改赋值
  bindDateChange:function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 表单提交的时候，修改赋值，插入数据库。
  formSubmit: function(e) {
    console.log(e.detail.value);
    wx.showToast({
      title: '下单成功',
      icon: 'success',
      duration: 10000
    });
    setTimeout(function(){
      wx.hideToast();
      wx.switchTab({
        url: '../me/me',
        success: function(res){
          // success
        }
      })
    }, 2000)
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