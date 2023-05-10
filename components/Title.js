// components/Title.js
Component({
  options:{
    "styleIsolation": "apply-shared",
    "multipleSlots": true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    msg:{
      type: String,
      value: '11111'
    },
    test:{
      type: Function,
      value: ()=>{}
    }
  },
  observers:{
    'count': ()=>{
      console.log('count 发生变化了')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    count: 10
  },
  lifetimes:{
    created(){
      console.log('组件的created')
    },
    attached(){
      console.log('组件的attached')
    },
    detached(){
      console.log('组件的detached')
    },
  },
  pageLifetimes:{
    show(){

    },
    hide(){
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    testFun(){
      this.properties.test()
      this.triggerEvent('changeTitle', '星期一', '')
      this.setData({
        count: this.data.count + 10
      })
    }
  }
})
