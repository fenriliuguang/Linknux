// pages/help/help.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        'helpList': [], // 求助数据列表 
    },
    push: function(){
        wx.navigateTo({
          url: '../write/write?type=2',
        })
    },

    check:function(e){
        let data = JSON.stringify(e.currentTarget.dataset.doc)
        wx.setStorage({
            key:'doc',
            data:data
        })
        wx.navigateTo({
          url: '../trans/trans',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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
        getApp().resquest.getTrans().then((data) => {
            this.setData({
                helpList:data
            })
        })
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