// pages/trans/trans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:{},
    id:''
  },

  write: function(){
    wx.navigateTo({
      url: '../write/write?type=1&id=' + this.data.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var res = new Promise((resolve,reject) => {
      wx.getStorage({
        key:'doc',
        success(res){
          var data = JSON.parse(res.data);
          resolve(data);
        }
      });
    })

    res.then((data)=>{
      console.log(data)
      let result = getApp().towxml(data.content, 'markdown');
      console.log(result)
      this.setData({
        a:result,
        id:data.trans_id
      })
    })
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