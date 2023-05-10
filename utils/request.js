export default function reuest(options){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data:options.data || {},
      success: res =>{
        resolve(res.data)
      },
      fail: err =>{
        reject(err)
      }
    })
  }) 
}