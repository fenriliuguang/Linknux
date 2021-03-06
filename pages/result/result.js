// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:[]
  },

  search: function(e){
    getApp().resquest.search(e.detail.value).then((arr)=>{
      this.setData({
        page:arr
      })
    });
  },

  toDoc :function(e){
    let data = JSON.stringify(e.currentTarget.dataset.doc)
    console.log(e.currentTarget.dataset.doc)
    wx.setStorage({
        key:'doc',
        data:data
    })
    wx.navigateTo({
      url: '../document/document',
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().resquest.search(options.search).then((arr)=>{
      this.setData({
        page:arr
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})