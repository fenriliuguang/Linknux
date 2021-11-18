// app.js

function setObj(res,i){
  var object = {
    id:0,
    title:"标题",
    word:"正文",
    writer:"作者",
    data:"2000年1月1日",
    avatarUrl:"../../static/icons/眼睛.png",
    count1:100,        
    count2:200,
    count3:300,
    link:""
  };
  var d = new Date(res.data.data[i].create_time)
  object.id = res.data.data[i].post_id;
  object.title = res.data.data[i].title;
  object.word = res.data.data[i].content;
  object.writer = res.data.data[i].author_name;

  object.data = d.getFullYear() + "年" + d.getMonth() + "月" +d.getDate() + "日";
  object.avatarUrl = res.data.data[i].pic_link;
  object.count1 = res.data.data[i].viewd_num;
  object.count2 = res.data.data[i].vote_num;
  object.count3 = res.data.data[i].collect_num;
  return object;
}
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    isLogin:false,
    unionid:null,
    openid:null,
  },
  resquest:{
    getFollow: function(page,size,order){

      var arr = [];

      wx.request({
        url: 'http://localhost:8080/follow/get/post',
        data:{
          page:page,
          size:size,
          order:order
        },
        dataType:"json",
        method:"GET",
        success(res){
          for(var i = 0;i<res.data.data.length;i++){
            arr.push(setObj(res,i));
          }
        }
      })

      return arr;
    },
    getIndex: function(page,size,order){

      var arr = [];

      wx.request({
        url: 'http://localhost:8080/index',
        data:{
          page:page,
          size:size,
          order:order
        },
        dataType:"json",
        method:"GET",
        success(res){
          console.log(res);
          for(var i = 0;i<res.data.data.length;i++){
            arr.push(setObj(res,i));
          }
        }
      })

      return arr;
    },
    getFenqu: function(page,size,order,label_id){

      var arr = [];

      wx.request({
        url: 'http://localhost:8080/index',
        data:{
          page:page,
          size:size,
          order:order,
          label_id:parseInt(label_id)
        },
        dataType:"json",
        method:"GET",
        success(res){
          console.log(res);
          for(var i = 0;i<res.data.data.length;i++){
            arr.push(setObj(res,i));
          }
        }
      })

      return arr;
    },
    getRank: function(){
      var data = {
        me:null,
        rank:null
      }
      wx.request({
        url: 'http://localhost:8080/rank',
        method:'GET',
        success(res){
          data.me = res.data.data.me;
          data.rank = res.data.data.rank;
        }
      });

      console.log(data)
      return data;
    }
  }
})
