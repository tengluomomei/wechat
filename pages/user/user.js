// pages/user/user.js
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    array: ['美国', '中国', '巴西', '日本'],
    text: 111,
    num: -10,
    onOff: true,
    list:[
      {name: 'xiaoming'},
      {name: 'xiaohong'},
      {name: 'xiaolan'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.token)
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
    console.log('下拉刷新')
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('加载更多')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '这是测试页面',
      imageUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
      path: '/pages/user/user'
    }
  },
  // 捕获
  parentCap(e){
    console.log('parent',e)
  },
  childCap(e){
    console.log('child',e)
  },
  // 冒泡
  parentTap(e){
    console.log('parent',e)
    // const type = e.currentTarget.dataset.type
  },
  childTap(e){
    console.log('child',e)
  },
  getDevice(){
    wx.getSystemInfo({
      success (res) {
        console.log(res)
      }
    })
  },
  getLoaction(){
    wx.getLocation({
      success (res) {
        console.log(res)
      }
    })
  }
})