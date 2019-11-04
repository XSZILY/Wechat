// pages/person/person.js
Page({
  info: function() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  order: function(e) {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  address: function() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  contact: function (e) {
    wx.makePhoneCall({
      phoneNumber: '400-321'   
    })
  }
})