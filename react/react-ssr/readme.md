## SPA单页应用（React，vue）

React/vue 经过webpack打包 变成html/css/js 静态资源

html ->中<div id="root"></div>

等所有的js将内容渲染到root中去
用户不能第一时间看到有价值的内容（白屏时间长）

## SSR 服务器渲染
vue/React 经过webpack ->后端应用（node）在后端就将首页给编辑好
用户第一次访问 的html 就可以看到有内容的页面（好处：白屏时间更短了）

客户端渲染：
就是用户拿到js的时候，将DOM节点 挂载在html中

## MPA



### webpack 打包解决 import 导出的方法（热更新的配置）

使用webpack包来帮助我们打包（）
    cnpm i webpack webpack-cli -D   

    "dev:start":"nodemon --watch build --exec node ./build/bundle.js",
    配置启动 ： 使用nodemon启动 ，监听 build，目录下的文件 启动打包好的bundle.js文件

   打包配置：
    "dev:build:server": "webpack --config ./webpack.server.js --watch"
    使用webpack工具打包 使用./webpack.server.js这个路劲的配置 监听配置文件 只要

    **总结**：只要我们文件修改，配置文件就会 自动打包，
    然后我使用nodemon监听 打包出来文件，打包文件改变，服务器也会重新启动

## JXS文件解析 （.babelrc文件的配置）
    因为使用了.jsx文件， 要是有bable来解析.jsx文件转化为js文件
    加入相关的依赖包
    cnpm i @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader -D
    预设配置
    ```js
        {
            "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
            ]
        }
    ```

## 配置文件合并（就相当于redux中的combineReduces）  
    使用多个配置文件，然后合并到一个文件中，
    使用合并的配置文件解析我们所有的代码

    步骤：
    1. 导出包 const { merge } = require('webpack-merge');
    2. 将配置导出module.exports = merge(baseConfig, serverConfig)

## 同构组件
一份代码可以在服务端执行，在客户端也可以执行，
1. 服务端的bundle.js 是一个node项目
2. 客户端有一个index.js 就是一个静态资源，是node服务给客户端的
3. node 服务 让React组件 通过 renderToString 渲染成html字符串
4. node 返回的东西就是带有 内容的字符串（缩短首白屏时间）
5. node 返回html 结构，也把客户端的index.js 返回给浏览器 让react组件在客户端 也会渲染一次，绑定事件

## 同构路由
1. 目的 需要根据当前的url 渲染页面
2. 客户端 BrowserRouter
3. 服务端 手动传 前端的路径 request.url 告诉StaticRouter
4. 让两端 都知道 用户正在访问的URL , 两端渲染页面都能保持一致
5. ？？？？问题 鼠标点击Link 和 属性浏览器地址栏  




