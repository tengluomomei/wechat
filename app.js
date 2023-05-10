// app.js
App({
  onLaunch() {
    console.log('app的onLaunch')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){
    console.log('app的onshow')
  },
  onHide(){
    console.log('app的onhide')
  },
  globalData: {
    userInfo: null,
    token: '111sfasdfdg'
  }
})
