// app.js
const host = "http://192.168.43.221:8080";
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
    link:"",
    t:"",
    c:"",
    a_id:""
  };
  object.a_id = res.data.data[i].author_id;
  var d = new Date(res.data.data[i].create_time)
  object.id = res.data.data[i].post_id;
  object.t = res.data.data[i].title;
  object.c = res.data.data[i].content;
  if(res.data.data[i].title.length > 20){
    object.title = res.data.data[i].title.slice(0,19)+ "...";
  }else {
    object.title = res.data.data[i].title;
  }
  object.word = res.data.data[i].content.slice(0,30) + "...";
  object.writer = res.data.data[i].author_name;
  var a = d.getMonth()+1
  object.data = d.getFullYear() + "年" + a + "月" +d.getDate() + "日";
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
  towxml:require('/towxml/index'),
  globalData: {
    userInfo: null,
    isLogin:false,
    unionid:null,
    openid:null,
    token:'token'
  },
  resquest:{
    getFollow: function(page,size,order){

      var arr = [];
      var app = getApp();

      wx.request({
        header:{
          Authorization: "Bearer " + app.globalData.token 
        },
        url: host + '/follow/get/post',
        data:{
          page:page,
          size:size,
          order:order
        },
        dataType:"json",
        method:"GET",
        success(res){
          if(res.data.data == null)return;
          for(var i = 0;i<res.data.data.length;i++){
            arr.push(setObj(res,i));
          }
        },
      })

      return arr;
    },
    getIndex: function(page,size,order){

      var arr = [];
      var app = getApp();

      wx.request({
        header:{
          Authorization: "Bearer " + app.globalData.token 
        },
        url: host + '/index',
        data:{
          page:page,
          size:size,
          order:order
        },
        dataType:"json",
        method:"GET",
        success(res){
          console.log(res);
          if(res.data.data == null)return;
          for(var i = 0;i<res.data.data.length;i++){
            arr.push(setObj(res,i));
          }
        }
      })

      return arr;
    },
    getFenqu: function(page,size,order,label_id){

      var arr = [];
      var app = getApp();

      wx.request({
        header:{
          Authorization: "Bearer " + app.globalData.token 
        },
        url: host + '/index',
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
      var app = getApp();
      var data = {
        me:null,
        rank:null
      }
      wx.request({
        header:{
          Authorization: "Bearer " + app.globalData.token 
        },
        url: host + '/rank',
        method:'GET',
        success(res){
          data.me = res.data.data.me;
          data.rank = res.data.data.rank;
        }
      });

      console.log(data)
      return data;
    },
    search: function(s){
      var arr = [];
      wx.request({
        url: host + '/search',
        method: 'GET',
        data:{
          search : s
        },
        success(res){
          console.log(res);
          for(var i = 0;i<res.data.data.length;i++){
            arr.push(setObj(res,i));
          }
        }
      });
      
      return arr;
    },
    add: function(p){
      wx.request({
        url: host+'/view/add',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        method:"PUT",
        data:{
          post_id:p
        },
        dataType:"json"
      })
    },
    post:function (params) {
      var code = 0;
      wx.request({
        url: host+'/post',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          title:params.title,
          content:params.content,
          label_id:params.label_id
        },
        method:"POST",
        dataType:"json",
        success(res){
          code = res.data.code;
        }
      })
      return code;
    },
    guanzhu:function(fid){
      wx.request({
        url: host+'/follow',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          follow_id:fid
        },
        dataType:"json",
        method:"POST"
      })
    },
    getGuanzhu:function(){
      var data = [];
      wx.request({
        url: host+'/follow/get/follow',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        method:"GET",
        success(res){
          data.push.apply(data,res.data.data);
        }
      })
      return data;
    },
    cancelGuanzhu:function(fid){
      wx.request({
        url: host+'/follow/cancel',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          follow_id:fid
        },
        dataType:"json",
        method:"PUT"
      })
    },
    collect:function(pid){
      wx.request({
        url: host+'/collect',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          post_id:pid
        },
        method:"POST",
        dataType:"json"
      })
    },
    cancelCollect:function(pid){
      wx.request({
        url: host+'/collect/delete',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          post_id:pid
        },
        method:"PUT",
        dataType:"json"
      })
    },
    checkStarAndLike:function(pid){
      let data = {
        isLike:false,
        isStar:true
      }
      wx.request({
        url: host+'/getvc',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          post_id:pid
        },
        method:"POST",
        dataType:"json",
        success(res){
          console.log(res.data)
          data.isLike = res.data.data.voted
          data.isStar = res.data.data.collected
        }
      })

      return data;
    },
    like:function(pid,point){
      wx.request({
        url: host +'/vote',
        header:{
          Authorization: "Bearer " + getApp().globalData.token 
        },
        data:{
          post_id:pid,
          direction:point
        },
        method:"POST",
        dataType:"json"
      })
    }
  }
})
