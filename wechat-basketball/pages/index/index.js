// index/index.js
Page({
  data: {
    imgUrls: [
      '../../images/scroll1.jpg',
      '../../images/scroll2.jpg',
      '../../images/scroll3.jpg',
      '../../images/scroll4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: []
  },
  onShareAppMessage: function () {
    return {
      title: '第一个微信小程序',
      desc: '微信小程序真的很牛逼啊，简直就是前端程序员的福利吗',
      path: '/index'
    }
  },
  onLoad:function() {
    var than = this;
      wx.request({
        url: 'http://localhost:3000/',
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
          than.setData({
            list: res.data
          })
          console.log(res);
        }
      })
  },
  textareaHandel:function(e) {
    console.log(e.detail.value);
  }
})