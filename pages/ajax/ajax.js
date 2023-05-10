import request from '../../utils/request'

Page({
  data: {
    msg: ''
  },
  onLoad: function (options) {
      this.getData()
      this.getData2()
  },
  getData(){
    wx.request({
      url: 'https://v1.hitokoto.cn',
      method: 'POST',
      data:{
        pageno: 2,
        pagesize: 10
      },
      success: res =>{
          this.setData({
            msg: res.data.hitokoto
          })
      },
      fail: err =>{
        wx.showToast({
          title: err,
        })
      }
    })
  },
  async getData2(){
    let res = await request({
      url: 'https://v1.hitokoto.cn',
      method: 'POST',
      data:{
        pageno: 1,
        pagesize: 10
      }
    })
    console.log(res)
  },
  getPhoneNumber (e) {
    console.log(e)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})