// pages/document/document.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:{},
    data:"",
    writer:"",
    title:"",
    avatarUrl:"",
    post_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data;
    wx.getStorage({
      key:'doc',
      success(res){
        data = JSON.parse(res.data);
      }
    })
    //let data = JSON.parse(options.data);
    setTimeout(()=>{
      console.log(data);
      let result = getApp().towxml(data.c, 'markdown');
      this.setData({
        a:result,
        writer:data.writer,
        avatarUrl:data.avatarUrl,
        data:data.data,
        title:data.title,
        post_id:data.id
      }) 
      getApp().resquest.add(this.data.post_id)
    },100)
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