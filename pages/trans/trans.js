// pages/trans/trans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:{},
    id:'',
    ischeck:false,
    transed:[],
    page:1,
    loading:false
  },

  toDoc: function(e){
    let item = e.currentTarget.dataset.doc;
    let date = new Date(item.create_time);
    var a = date.getMonth()+1
    let data = JSON.stringify({
      writer:item.author_name,
      avatarUrl:item.pic_link,
      data:date.getFullYear() + '年' + a + date.getDate()+'日',
      title:item.title,
      id:item.post_id,
      a_id:item.author_id,
      author_qualified:item.author_qualified,
      c:item.content,
      qualified:item.qualified
    })
    wx.setStorage({
      key:'doc',
      data:data,
      success(){
        wx.navigateTo({
          url: '../document/document',
        })
      }
    })
    
  },

  check: function(){
    this.setData({
      ischeck:true
    })
    getApp().resquest.getTransExist({
      order:'time',
      page:this.data.page,
      size:4,
      trans_id:this.data.id
    }).then((data) => {
      console.log(data)
      if(data.data == null){
        this.setData({
          loading:false
        })
        return
      }
      this.setData({
        transed:data.data,
        page:this.data.page + +1
      })
    })
  },

  nextPage: function(){
    if(this.data.loading)return;
    this.setData({
      loading:true
    });
    getApp().resquest.getTransExist({
      order:'time',
      page:this.data.page,
      size:4,
      trans_id:this.data.id
    }).then((data) => {
      if(data.data == null){
        this.setData({
          loading:false
        })
        return
      }
      let arr = this.data.transed;
      arr.push.apply(arr,data.data)
      this.setData({
        transed:arr,
        page:this.data.page+1,
        loading:false
      })
    })
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
      let result = getApp().towxml(data.content, 'markdown');
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