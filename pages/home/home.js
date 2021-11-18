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
        me:null,
        fenqu_page:[],
        guanzhu_page:[],
        resou_page:[],
        memberList: [],
        list:[]
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
        var me = {
            pic_link : '',
            username : '',
            rank : null,
            contribution : 0
        }

        switch(e.currentTarget.dataset.tab){
            case "guanzhu":
                arr = getApp().resquest.getFollow(1,10,"score");
                setTimeout(()=>{
                    this.setData({
                        guanzhu_page:arr
                    });
                },200)
                break;
            case "resou":
                arr = getApp().resquest.getIndex(1,10,"score");
                setTimeout(()=>{
                    this.setData({
                        resou_page:arr
                    });
                },200)
                break;
            case "fenqu":
                
                break;

            case "dashen":
                var data = getApp().resquest.getRank();
                setTimeout(()=>{
                    console.log(data)
                    me.contribution = data.me[0].contribution;
                    me.pic_link = data.me[0].pic_link;
                    me.username = data.me[0].username;
                    me.rank = '未上榜';
                    for(var i = 0;i<data.rank.length;i++){
                        if(data.me[0].pic_link === data.rank[i].pic_link){
                            me.rank = i+1;
                            setTimeout(() => {
                                this.setData({
                                    me:me
                                })
                            },200)
                        }
                    }
                    setTimeout(() => {
                        this.setData({
                            memberList:arr
                        })
                        this.setData({
                            list:this.data.memberList.slice(3)
                        })
                    }, 200);
                },300)
                setTimeout(() => {
                    arr = data.rank;
                },200);
                
                break;
        }
    },

    fenquOnTab: function(e){
        var arr = getApp().resquest.getFenqu(1,10,"score",e.currentTarget.dataset.tab);

        setTimeout(()=>{
            this.setData({
                fenqu_page:arr
            });
        },200)

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
        var arr = getApp().resquest.getFollow(1,10,"score");
        setTimeout(()=>{
            this.setData({
                guanzhu_page:arr
            });
        },200)
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