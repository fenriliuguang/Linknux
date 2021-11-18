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
                title:"标题",
                word:"正文",
                writer:"作者",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                count1:100,
                count2:200,
                count3:300
            },
           {
                id:1,
                title:"标题",
                word:"正文",
                writer:"作者",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                count1:100,
                count2:200,
                count3:300
            },
            {
                id:2,
                title:"标题",
                word:"正文",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                writer:"作者",
                count1:100,
                count2:200,
                count3:300
            },
            {
                id:3,
                title:"标题",
                word:"正文",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                writer:"作者",
                count1:100,
                count2:200,
                count3:300
            },
            {
                id:4,
                title:"标题",
                word:"正文",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                writer:"作者",
                count1:100,
                count2:200,
                count3:300
            },
        ],
        guanzhu_page:[],
        resou_page:[
            {
                id:0,
                title:"标题",
                word:"正文",
                writer:"作者",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                count1:100,
                count2:200,
                count3:300
            },
           {
                id:1,
                title:"标题",
                word:"正文",
                writer:"作者",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                count1:100,
                count2:200,
                count3:300
            },
            {
                id:2,
                title:"标题",
                word:"正文",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                writer:"作者",
                count1:100,
                count2:200,
                count3:300
            },
            {
                id:3,
                title:"标题",
                word:"正文",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                writer:"作者",
                count1:100,
                count2:200,
                count3:300
            },
            {
                id:4,
                title:"标题",
                word:"正文",
                data:"2000年1月1日",
                avatarUrl:"../../static/icons/眼睛.png",
                writer:"作者",
                count1:100,
                count2:200,
                count3:300
            },
        ],
        memberList: [
            {
                id:0,
                name:"吕布",
                number:1000,
                rank:11111
            }
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

        var arr;

        switch(e.currentTarget.dataset.tab){
            case "guanzhu":
                arr = getApp().resquest.getFollow(1,10,"score");
                this.setData({
                    guanzhu_page:arr
                });
                break;
            case "resou":
                arr = getApp().resquest.getIndex(1,10,"score");
                this.setData({
                    fenqu_page:arr
                });
        }
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
        // var guanzhu = getApp().resquest.getIndex(1,10,"score");

        // this.setData({
        //     guanzhu_page:guanzhu
        // });
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