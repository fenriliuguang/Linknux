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
        list:[],
        loadFlag:false,
        loading:false,
        fenqu_:1,
        guanzhu_:1,
        resou_:1
    },
    toDoc :function(e){
        let data = JSON.stringify(e.currentTarget.dataset.doc)
        console.log(e.currentTarget.dataset.doc)
        wx.setStorage({
            key:'doc',
            data:data
        })
        wx.navigateTo({
          url: '../document/document',
        })
    },

    nextPage: function(e){
        if(this.data.loadFlag)return;
        this.setData({
            loadFlag:true,
            loading:true
        })
        var arr = this.data[e.currentTarget.dataset.page + 'page'];
        getApp().resquest[e.currentTarget.dataset.request](
            this.data[e.currentTarget.dataset.page] + 1,10,"score").then((arr2) => {
                console.log(arr2);
                if(arr2.length == 0){
                    this.setData({
                        loading:false,
                        loadFlag:false,
                    })
                    return;
                }
                arr.push.apply(arr,arr2);
                console.log(arr);

                this.setData({
                    [e.currentTarget.dataset.page + 'page']:arr,
                    loading:false,
                    loadFlag:false,
                    [e.currentTarget.dataset.page]:this.data[e.currentTarget.dataset.page] + 1
                })
            })
        console.log("loading...")
    },

    plus: function(){
        wx.navigateTo({
          url: '../write/write?type=0',
        })
    },

    search:function(e){
        console.log(e.detail.value);

        wx.navigateTo({
          url: '../result/result?search=' + e.detail.value,
        })
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

        var me = {
            pic_link : '',
            username : '',
            rank : null,
            contribution : 0
        }

        switch(e.currentTarget.dataset.tab){
            case "guanzhu":
                getApp().resquest.getFollow(1,10,"score").then((arr) => {
                    console.log(arr)
                    this.setData({
                        guanzhu_:1,
                        guanzhu_page:arr
                    });
                })
                break;
            case "resou":
                getApp().resquest.getIndex(1,10,"score").then((arr) => {
                    this.setData({
                        resou_:1,
                        resou_page:arr
                    });
                });
                break;
            case "fenqu":
                
                break;

            case "dashen":
                getApp().resquest.getRank().then((data) => {
                    me.contribution = data.me[0].contribution;
                    me.pic_link = data.me[0].pic_link;
                    me.username = data.me[0].username;
                    me.rank = '未上榜';
                    for(var i = 0;i<data.rank.length;i++){
                        if(data.me[0].pic_link === data.rank[i].pic_link){
                            me.rank = i+1;
                            this.setData({
                                me:me
                            })
                        }
                    }
                    this.setData({
                        memberList:data.rank
                    })
                    this.setData({
                        list:this.data.memberList.slice(3)
                    })
                });
                
                break;
        }
    },

    fenquOnTab: function(e){
        getApp().resquest.getFenqu(1,10,"score",e.currentTarget.dataset.tab).then((arr) => {
            this.setData({
                fenqu_page:arr
            });
        });
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
        getApp().resquest.getFollow(1,10,"score").then((arr) => {
            this.setData({
                guanzhu_page:arr
            });
        });
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