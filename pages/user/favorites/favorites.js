Page({

    /**
     * 页面的初始数据
     */
    data: {
        page:[],
        loading:false,
        index:1
    },

    toDoc: function(e){
        let data = JSON.stringify(e.currentTarget.dataset.doc)
        console.log(e.currentTarget.dataset.doc)
        wx.setStorage({
            key:'doc',
            data:data
        })
        wx.navigateTo({
          url: '../../document/document',
        })
    },

    nextPage: function(){
        if(this.data.loading)return;
        this.setData({
            loading:true
        });
        getApp().resquest.getStar(this.data.index,10,'score').then((arr) => {
            this.setData({
                page:arr,
                index:this.data.index + ((arr.length == 0)?0:1),
                loading:false
            })
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
        getApp().resquest.getStar(1,10,'score').then((arr) => {
            this.setData({
                page:arr,
                index:(arr.length == 0)?1:2
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