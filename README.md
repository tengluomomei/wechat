### 1.开发小程序的技术选型
原生小程序开发
微信小程序：https://developers.weixin.qq.com/miniprogram/dev/framework/
微信小程序主要技术包括：WXML、WXSS、JavaScript；
支付宝小程序：https://opendocs.alipay.com/mini/developer
支付宝主要技术包括：AXML、ACSS、JavaScript；

选择框架开发小程序：
uni-app由DCloud团队开发和维护,是一个使用 Vue 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
uni-app目前是很多公司的技术选型，特别是希望适配移动端App的公司
taro，由京东团队开发和维护，是一个开放式 跨端 跨框架 解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用
taro因为本身支持React、Vue的选择，给了我们更加灵活的选择空间
特别是在Taro3.x之后，支持Vue3、React Hook写法等


### 第一个小程序
  1.注册小程序开发帐号: https://mp.weixin.qq.com/、https://developers.weixin.qq.com/miniprogram/dev/reference/
  2.安装开发者工具
    微信开发者工具：官方提供的开发工具，必须下载、安装;
      https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
    VSCode：很多人比较习惯使用VSCode来编写代码；
  3.小程序的架构模型
    宿主环境是微信客户端
    宿主环境执行小程序的各种文件：wxml文件、wxss文件、js文件
    小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能，例如：微信扫码、微信支付、微信登录、地理定位、etc…
    双线程通信模型:
      当小程序基于 WebView 环境下时，WebView 的 JS 逻辑、DOM 树创建、CSS 解析、样式计算、Layout、Paint (Composite) 都发生在同一线程，在 WebView 上执行过多的 JS 逻辑可能阻塞渲染，导致界面卡顿。
      以此为前提，小程序同时考虑了性能与安全，采用了目前称为「双线程模型」的架构。
      WXML模块和WXSS样式运行于 渲染层，渲染层使用WebView线程渲染（一个程序有多个页面，会使用多个WebView的线程）。
      JS脚本（app.js/home.js等）运行于 逻辑层，逻辑层使用JsCore运行JS脚本
      这两个线程都会经由微信客户端（Native）进行中转交互

      通信模型分为两部分:
      渲染层和逻辑层之间的通信,由微信客户端进行转发
      逻辑层和第三方服务器之间的通信,由微信客户端进行转发


### 2. 项目构成
项目目录结构如下：

```
|-- miniprogram
    |-- README.md
    |-- app.js // 小程序项目的入口文件
    |-- app.json // 小程序项目的全局配置文件
    |-- app.wxss // 小程序项目的全局样式文件
    |-- project.config.json // 项目的配置文件
    |-- sitemap.json 用来配置小程序及其页面是否允许被微信索引
    |-- pages // 用来存放所有小程序的页面
    |   |-- index	//	首页
    |-- utils	//	工具库
    |-- components	//	公共组件库
    |-- config	//	基础配置
    |-- custom-tab-bar	//	自定义 tabbar
    |-- model	//	mock 数据
```
  
### pages
  小程序官方建议把所有小程序的页面，都存放在 pages 目录中，以单独的文件夹存在，其中，每个页面由 4 个基本文件组成，它们分别是：
  .js 文件（页面的脚本文件，存放页面的数据、事件处理函数等）
  .json 文件（当前页面的配置文件，配置窗口的外观、表现等）
  .wxml 文件（页面的模板结构文件）
  .wxss 文件（当前页面的样式表文件）

### tabBar
  tab栏的展示
    tabBar 是移动端应用常见的页面效果，用于实现多页面的快速切换
    小程序中通常将其分为：底部 tabBar和顶部 tabBar
    tabBar中只能配置最少 2 个、最多 5 个 tab 页签
    当渲染顶部 tabBar 时，不显示 icon，只显示文本
  
### WXML: 
    WXML（WeiXin Markup Language）是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的 HTML
    WXML 和 HTML 的区别
      标签名称不同
        HTML （div, span, img, a）
        WXML（view, text, image, navigator），内置组件
      属性节点不同
        HTML （a标签上的href）
        WXML （navigator组件上的url）
      WXML提供了类似于 Vue 中的模板语法
        数据绑定
        列表渲染
        条件渲染

### WXSS: 
    WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式，类似于网页开发中的 CSS。
    WXSS 和 CSS 的区别：
      新增了 rpx 尺寸单位
        CSS 中需要手动进行像素单位换算，例如 rem
        WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算
      提供了全局的样式和局部样式
        项目根目录中的 app.wxss 会作用于所有小程序页面
        局部页面的 .wxss 样式仅对当前页面生效
      WXSS 仅支持部分 CSS 选择器
        .class 和 #id
        element
        并集选择器、后代选择器
        ::after 和 ::before 等伪类选择器

### JS 逻辑交互：
    小程序中的 JS 文件分为三大类:
      app.js
        是整个小程序项目的入口文件，通过调用 App() 函数来启动整个小程序
      页面的 .js 文件
        是页面的入口文件，通过调用 Page() 函数来创建并运行页面
      普通的 .js 文件
        是普通的功能模块文件，用来封装公共的函数或属性供页面使用
  
### App注册函数
    https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html
    1.启动过程：
      把小程序的代码包下载到本地
      解析 app.json 全局配置文件
      执行 app.js 小程序入口文件，调用 App() 创建小程序实例
      渲染小程序首页
      小程序启动完成
      注： 每个小程序都需要在 app.js 中调用 App 函数 注册小程序实例

    2.作用：
      1.判断打开场景
        https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
      2.定义全局App的数据：globalData,其他页面也可以访问
      3.生命周期函数：初始化操作、读取本地数据，类似于token，然后保存在全局方便使用等

# Page函数
    https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html
    执行过程：
    加载解析页面的 .json 配置文件
    加载页面的 .wxml 模板和 .wxss 样式
    执行页面的 .js 文件，调用 Page() 创建页面实例
    页面渲染完成

    作用：（在注册时, 可以绑定初始化数据、生命周期回调、事件处理函数等）

    监听页面的下拉刷新和上拉加载更多
      下拉刷新事件:onPullDownRefresh()
      开启下拉刷新：enablePullDownRefresh: true
        1.全局开启
        2.局部开启（推荐）
        3.注意停止下拉刷新: wx.stopPullDownRefresh()

      上拉触底事件:onReachBottom()
      配置上拉触底距离：onReachBottomDistance

# 内置组件: 
  https://developers.weixin.qq.com/miniprogram/dev/component/
  1.视图容器（掌握）：
    view: 类似div
    scroll-view: 可滚动的视图区域
    swiper 和 swiper-item:
  2.基础内容（掌握）:
    text:类似span
    rich-text:富文本组件,支持把 HTML 字符串渲染为 WXML 结构
  3.其它常用组件
    button:通过 open-type 属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）
    image: 组件的 mode 属性用来指定图片的裁剪和缩放模式

  # 模板语法：
    变量：字符串、数字、布尔
    逻辑判断 wx:if – wx:elif – wx:else
    列表循环：wx:for: 默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item

  # 事件处理
    事件绑定：事件是通过bind/catch这个属性绑定在组件上的（和普通的属性写法很相似, 以key=“value”形式）

    事件对象:当某个事件触发时, 会产生一个事件对象, 并且这个对象被传入到回调函数中
      target:是触发该事件的源头组件
      currentTarget:是当前事件所绑定的组件

    参数传递:小程序中的事件传参比较特殊，不能在绑定事件的同时为事件处理函数传递参数,可以通过data-属性来完成 
      单个参数：
        设置：data-type=1
        获取：e.currentTarget.dataset.type
      多个参数：
        设置：mark:name="11" mark:age="12"
        获取：e.mark



    特殊事件:
      input: bindinput/bindblur/bindfocus等
      scroll-view: bindscrolltowpper/bindscrolltolower等
    事件捕获：
      capture-bind:tap
    事件冒泡:
      冒泡事件：touchstart   touchmove   touchend  longtap   tap这五个事件
      阻止事件冒泡：catchtap


# 组件化开发
  组件类似于页面，自定义组件由 json wxml wxss js 4个文件组成
  向组件传递数据 - properties： {type:string,value: 'xxx'}
  组件向外传递事件 – 自定义事件:  this.triggerEvent("change",res)  
  组件的生命周期:
    created:
    attached:
    detached:

# 网络请求
    微信提供了专属的API接口:wx.request(Object object)
    出于安全性方面的考虑，小程序官方对数据接口的请求限制:
      1.只能请求 HTTPS 类型的接口
      2.必须将接口的域名添加到信任列表中
    不存在跨域：

# 展示弹窗效果
  四种方式: showToast、showModal、showLoading、showActionSheet

# 分享功能
  1.点击右上角的菜单按钮，之后点击转发： onShareAppMessage()
  2.点击某一个按钮，直接转发:<button open-type="share"></button>

# 获取设备信息
  wx.getSystemInfo(Object object)

# 获取位置信息
  wx.getLocation(Object object)

# Storage存储
  同步存取数据的方法
    wx.setStorageSync(string key, any data)
    any wx.getStorageSync(string key)
    wx.removeStorageSync(string key)
    wx.clearStorageSync()
  异步存储数据的方法
    wx.setStorage(Object object)
    wx.getStorage(Object object)
    wx.removeStorage(Object object)
    wx.clearStorage(Object object)

# 界面跳转
  1.tabbar页面:wx.switchTab()
  2.其他：
    wx.redirectTo():关闭当前所在页面，再跳转到指定的非TabBar页面。不受页面层数限制。
    wx.navigateTo():关闭当前所在页面，跳转到指定的非TabBar页面，注意页面路径限制是五层。左上角会显示一个返回按钮，可以直接返回到上一层页面。


  








