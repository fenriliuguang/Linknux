// pages/write/write/write.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        uplode:false,
        title:'',
        content:'',
        page_title:'',
        type:0,
        label:[
            "Ubuntu",
            "Mint",
            "Kali",
            "MX Linux"
        ],
        index:0
    },

    a:function(){},

    bindPickerChange:function (e) {
        this.setData({
            index:e.detail.value
        })
    },

    submit:function(){
        if(this.data.uplode)return
        var code;
        if(this.data.type == 0){
            code = getApp().resquest.post({
                label_id:this.data.index+1,
                title:this.data.title,
                content:this.data.content
            })
        }
        setTimeout(() => {
            if(code == 1000)wx.navigateBack();
        }, 200);
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.type == 0){
            this.setData({
                page_title:"上传文档",
                type:0
            })
        }
        if(options.type == 1){
            this.setData({
                page_title:"写中文翻译",
                type:1
            })
        }
        if(options.type == 2){
            this.setData({
                page_title:"发布英文文档求助",
                type:2
            })
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