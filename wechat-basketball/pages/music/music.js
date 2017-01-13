Page({
  data: {
    // 地图当前位置
      latitude: 0,
      longitude: 0,
      height: 0,
    // 地图上的坐标集合
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300,
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
  // 视野发生变化是触发
  regionchange(e) {
    console.log(e.type)
  },
  // 标记被单击的时候触发
  markertap(e) {
    console.log(e.markerId);
    wx.navigateTo({
        url: "change?id="+e.markerId
    })
  },
  // 控制按钮单机的时候触发
  controltap(e) {
    console.log(e.controlId);
    // 通过map的id获取地图实例，然后单机，移动到地图中心
    this.mapCtx = wx.createMapContext('map');
    this.mapCtx.moveToLocation();
  },
  onReady:function() {
    // 获取当前坐标，插入数据库
      var than = this;
    // 获取信息
    wx.getSystemInfo({
      success:function(res) {
        console.log(res.windowHeight);
        than.setData({
          height: res.windowHeight
        })
      }
    })
      wx.getLocation({
        type: 'wgs84',
        success: function(res){
          // 将我的坐标插入到数据库
        
          // 地位当前位置
          console.log(res);
          than.setData({
              latitude: res.latitude,
              longitude: res.longitude
          })
        }
      });
      // 获取数据中的快递员位置坐标，显示到地图上
      wx.request({
            url: 'http://localhost:3000/local', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
              console.log(res.data)
              than.setData({
                markers: res.data
              })
            }
          })
  },
  onLoad:function() {
    var than = this;
    
  }
})