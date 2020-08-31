- react知识点
    1. create-react-app  react项目名字 ----创建react项目的命令
    2. 全局安装create-react-app命令：npm/cnpm/yarn i -g create-react-app (react开发工具)
    3. npm run start ：npm run运行一个在package.json中的脚本
    4. yarn add lazyload //这个包是图片延迟加载的包
- react 加载时间分析
    1. react react-dom 加载js 花时间
    2. mvvm 能力组件化
    3. JSX 编译 -> < js
-   react 组件化编程 
- react 基本 认识

 ## 启动
    端口启动："start": "set PORT=9000 HOST=192.168.1.109 && react-scripts start",
     index.js 为整个工程的入口
      1. #### 导入
    ​	默认导入：import App from './App';
    ​	命名导入：import { name } from './App'
    #### 导出
    ​	默认导出：  export default App;
    ​	取名导出:	export const name = 'lilei';
### 生命周期    #### 函数列表

    1. componentWillMount:在组件渲染之前运行
    2. componentDidMount: 在组件渲染之后执行
    3. shouldComponentUpdate:返回true 和false ,true代表（组件变量）允许改变，false代表不允许改变。
    4. componentWillUpdate:组件数据在改变之前执行(数据包括：state,props)
    5. componentDidUpdate:组件数据修改完成执行(数据包括：state,props),
    6. componentWillReveceProps:props数据发生改变执行
    7. componentWillUnMount:组件卸载的时候执行。

### react-16中加入的生命周期

    componentWillMount,
    componentWillUpdate,
    componentWillReveceProps 这三个周期函数被废弃 （能用 会有警告）

    getDerivedStateFromProps: 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

    getSnapshotBeforeUpdate(prevProps, prevState)： 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。

#### fiber调和引擎
    fiber reconciler（协调器）

    requestIdleCallback(walk)

    比线程还小的任务 --纤程或者叫协程
    fiber 就是比线程更为细微的流程控制机制
    就是 使用异步 es6的 ** generate：yield **特性  

   - 能够把中断的任务切片处理
   - 能够调整优先级，重置并复用任务 

   ### DOM diff 介绍
    - 之前的DOM diff 是递归的过程：我们遍历所有的结点，如果js 执行时间很长的 

        而且js计算和页面渲染，绘制，互斥的。
    浏览器一次的事件循环（event-loop）/frame 一帧

    js的任务必须要执行完成  不执行完成 则不是一次完整的渲染 不可以被打断js的执行，不会渲染页面

    #### react 16 中的阶段

     - render 阶段：算出哪些需要 更新
     - Commit 阶段：之前render阶段 已经花费了时间，为了让用户尽快的看到页面，所以会一起喝成
     **使用这几个生命周期**
        getSnapshotBeforeUpdate；
        componentDidMount；
        componentDidUpdate；
        componentWillUnmount。

     fiber 是一个数据结构
     这个数据结构支持我们写出 可中止暂停重启启动的代码
####  ####生命周期的三个阶段    
            1. 初始化渲染阶段
                render componentDidMount
            2. 更新阶段
                shouldComponentUpdate render componentDidUpdate
            3. 卸载阶段
                componentWillUnMount

### 受控组件/非受控组件

#### 非受控组件 
    ref={}

### 组件库
#### Antd ui组件库的使用
    https://ant.design/components/notification-cn/
    

### jsx语法
 JavaScript +XML
  遇见<>则根据JavaScript语法解析
  遇见{}则根据XML(HTML)语法解析
### redux-thunk(中间件)
     #### 安装
      yarn add redux-thunk
    #### 使用方法
        import { } from redux-thunk


#### 页面优化 （路由）
 路由懒加载 ：import React ,{lazy,Suspense} from 'react';
const RecommendComponent=lazy(()=>import("../application/Recommend"))

### react Router 路由讲解
#### History
    - replaceState()
    - pushState()
    //这个API监听路由前进，后退的
    - window.addEventListener('popstate',()=>{
        console.log("路由发生了改变")
    })
- React-router 
    Link借助了 pushState 让url 变化 页面无刷新
