// pages/test/test.js
Page({
  chooseImage: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success(res) {

        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  chooseAddress: function() {
    wx.chooseAddress({
      success: function(res) {
        console.log(res.userName) 
        console.log(res.postalCode) 
        console.log(res.provinceName)
        console.log(res.cityName) 
        console.log(res.countyName) 
        console.log(res.detailInfo) 
        console.log(res.nationalCode) 
        console.log(res.telNumber) 
      }
    })
  },
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '400-100-1111', 
    })
  }
})