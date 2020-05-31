- react知识点
    1. create-react-app  react项目名字 ----创建react项目的命令
    2. 全局安装create-react-app命令：npm/cnpm/yarn i -g create-react-app (react开发工具)
    3. npm run start ：npm run运行一个在package.json中的脚本
- react 加载时间分析
    1. react react-dom 加载js 花时间
    2. mvvm 能力组件化
    3. JSX 编译 -> js
- react 组件化编程
- react 基本认识
    index.js 为整个工程的入口
    1. #### 导入
    ​	默认导入：import App from './App';
    ​	命名导入：import { name } from './App'
    #### 导出
    ​	默认导出：  export default App;
    ​	取名导出:	export const name = 'lilei';
### 生命周期
    #### 函数列表
    1. componentWillMount:在组件渲染之前运行
    2. componentDidMount: 在组件渲染之后执行
    3. shouldComponentUpdate:返回true 和false ,true代表允许改变，false代表不允许改变。
    3. componentWillUpdate:数据在改变之前执行(数据包括：state,props)
    4. componentDidUpdate:数据修改完成执行(数据包括：state,props),
    5. componentWillReveceProps:props数据发生改变执行
    6. commonentWillUnmount:组件卸载的时候执行。
### 受控组件/非受控组件

#### 非受控组件 
    ref={}

### 组件库
    https://ant.design/components/notification-cn/
