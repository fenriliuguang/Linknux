// pages/user/fans/fans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    follow:true,
    fans:false,
    arr:[]
  },

  switch: function(e){
    let index = e.currentTarget.dataset.index;
    let isfollow = this.data.arr[index].isfollow;
    getApp().resquest[isfollow?'cancelGuanzhu':'guanzhu'](this.data.arr[index].user_id).then(() => {
      this.setData({
        [`arr[${index}].isfollow`]:!isfollow
      })
    })
  },

  ontab:function(e){
    var obj = {
      follow:false,
      fans:false
    }
    obj[e.currentTarget.dataset.tab] = true
    this.setData(obj);
    if(obj.follow){
      getApp().resquest.getGuanzhu().then((arr) =>{
        for(let i = 0;i<arr.length;i++)arr[i]['isfollow'] = true;
        this.setData({
          arr:arr
        })
      })
    }else{
      getApp().resquest.getFollowed().then((arr) =>{
        for(let i = 0;i<arr.length;i++)arr[i]['isfollow'] = true;
        this.setData({
          arr:arr
        })
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().resquest.getGuanzhu().then((arr) => {
      for(let i = 0;i<arr.length;i++)arr[i]['isfollow'] = true;
      this.setData({
        arr:arr
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