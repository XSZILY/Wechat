// pages/detail/detail.js
Page({

  data: {
    gender: '男',
    username: 'Shmily',
    imgUrl: "/images/avatar.jpg"
  },

  changeAvatar: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        var tempFilePaths = res.tempFilePaths
        this.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },

  jump: function(e) {
    // 跳转到“个人资料修改页”
    wx.navigateTo({
      // 为了避免用户名中的特殊字符破坏字符串结构，使用encodeURIComponent()编码
      url: '/pages/modify/modify?username=' + encodeURIComponent(this.data.username) + '&gender=' + encodeURIComponent(this.data.gender)
    })
  }
})