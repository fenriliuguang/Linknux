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
                name:"页面1"
            },
            {
                id:1,
                name:"页面2"
            },
            {
                id:2,
                name:"页面3"
            },
            {
                id:3,
                name:"页面4"
            },
            {
                id:4,
                name:"页面5"
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