- react知识点
    1. create-react-app  react项目名字 ----创建react项目的命令
    2. 全局安装create-react-app命令：npm/cnpm/yarn i -g create-react-app (react开发工具)
    3. npm run start ：npm run运行一个在package.json中的脚本
    4. yarn add lazyload //这个包是图片延迟加载的包
- react 加载时间分析
    1. react react-dom 加载js 花时间
    2. mvvm 能力组件化
    3. JSX 编译 -> < js
-   eact 组件化编程 
- rea

    ct 基本 认识

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
    3. shouldComponentUpdate:返回true 和false ,true代表（组件）允许改变，false代表不允许改变。
    3. componentWillUpdate:组件数据在改变之前执行(数据包括：state,props)
    4. componentDidUpdate:组件数据修改完成执行(数据包括：state,props),
    5. componentWillReveceProps:props数据发生改变执行
    6. commonentWillUnmount:组件卸载的时候执行。
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
