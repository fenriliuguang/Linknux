// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab:{
            guanzhu:true,
            resou:false,
            fenqu:false,
            dashen:false
        },
        fenqu_page:[
            {
                id:0,
                title:"标题1",
                word:"正文",
                zone:"分区",
                read:"           XX阅读 XX评论",
                data:"2021年11月11日",
            },
           {
                id:1,
                title:"标题2",
                word:"正文",
                zone:"分区",
                read:"           XX阅读  XX评论",
                data:"2021年11月11日",
            },
            {
                id:2,
                title:"标题3",
                word:"正文",
                zone:"分区",
                read:"           XX阅读  XX评论",
                data:"2021年11月11日",
            },
            {
                id:3,
                title:"标题4",
                word:"正文",
                zone:"分区",
                read:"           XX阅读  XX评论",
                data:"2021年11月11日",
            },
            {
                id:4,
                title:"标题5",
                word:"正文",
                zone:"分区",
                read:"           XX阅读  XX评论",
                data:"2021年11月11日",
            },
        ],
    },
        

    ontab: function(e){
        var tab;
        tab = this.data.tab;
        for (let key in this.data.tab){
            if (key === e.currentTarget.dataset.tab){
                tab[key] = true;
            }else{
                tab[key] = false;
            }
        }
        this.setData({
            tab:tab
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