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
    post_id:"",
    a_id:"",
    isGuanzhu:false,
    isLike:false,
    isStar:false,
    load:true,
    author_qualified:false,
    
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
    });
    setTimeout(()=>{
      console.log(data);
      let result = getApp().towxml(data.c, 'markdown');
      this.setData({
        author_qualified:data.author_qualified,
        a:result,
        writer:data.writer,
        avatarUrl:data.avatarUrl,
        data:data.data,
        title:data.title,
        post_id:data.id,
        a_id:data.a_id
      }) 
      getApp().resquest.add(this.data.post_id);
      this.setGuanzhu();
      this.setStarAndLike();
    },100);
    
  },

  setGuanzhu:function(){
    getApp().resquest.getGuanzhu().then((data2) => {
      console.log(data2);
      for(let i=0;i<data2.length;i++){
        if(data2[i].user_id==this.data.a_id){
          this.setData({
            isGuanzhu:true
          })
        }
      }
    });
  },

  dz:function(){
    let point = '';
    if(this.data.load)return
    if(this.data.a_id == getApp().globalData.openid)return;
    this.setData({
      load:true
    })
    point = this.data.isLike?"-1":"1";
    getApp().resquest.like(this.data.post_id,point).then(()=>{
      this.setStarAndLike();
    });
  },
  
  sc:function(){
    if(this.data.load)return
    if(this.data.a_id == getApp().globalData.openid)return;
    this.setData({
      load:true
    })
    if(this.data.isStar){
      getApp().resquest.cancelCollect(this.data.post_id).then(()=>{
        this.setStarAndLike();
      });
    }else{
      getApp().resquest.collect(this.data.post_id).then(()=>{
        this.setStarAndLike();
      });
    }
  },

  setStarAndLike(){
    getApp().resquest.checkStarAndLike(this.data.post_id).then((data) => {
      this.setData(data);
      this.setData({
        load:false
      });
    });
  },

  gz:function(){
    if(this.data.a_id == getApp().globalData.openid)return;
    if(this.data.isGuanzhu){
      getApp().resquest.cancelGuanzhu(this.data.a_id).then(()=>{
        this.setData({
          isGuanzhu:false
        })
      });
    }else{
      getApp().resquest.guanzhu(this.data.a_id).then(()=>{
        this.setData({
          isGuanzhu:true
        })
      });
    }
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