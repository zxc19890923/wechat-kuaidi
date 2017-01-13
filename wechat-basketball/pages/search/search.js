Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    onLoad:function(options){
        var than = this;
        console.log(options.id);
        wx.request({
          url: 'http://m.kuaidi.com/all/zhongtong/533273905644.html',
          data: {
              
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function(res){
            // success
            console.log(res);
          },
          fail: function(res) {
            // fail
            console.log(res);
          }
        })
    }
});