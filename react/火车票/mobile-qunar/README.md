1. css reset
    nomalize.css //

    函数式组件

## 无状态组将的创建流程刻意联系
    - 组件插入父级组件中， 

    - 组件的类型 如果是无状态组件
    prop-types css propTypes
    形参 props

    - props解构出来要prop
    - 功能函数建议由父组件来打理
        1. 子组件纯粹的负责 Render (渲染)
        2. 函数可以复用

### 
class Component-> function
 函数式编程 
    class + constructor + 生命周期 +render-> function + react hoocks魔法函数
 - useCallback 缓存一个函数
 - useMemo: 缓存一个值/函数

 4. 转态组件编写顺序
     - 数据 Provider

 5. redux

    - 简单的redux 项目结构
      1. store.js cerateStore reducers
            中间件 axios redux-thunk 支持异步
      2. reducers.js combineReducers
      3. action.js 数据请求，状态海边的触发都由actions来负责 ActionTypes
    - redux API ->(设计状态)
      1. 初始值from to 两个reducer函数
      2. 函数 初始值 action return 初始值
      3. 状态怎么改变  动作声明 SET_FROM
      4. Switch case
      5. 解构 { type , payload} action
      6. 
    defalutstate={
        start:上海,
        end:北京       
    }

    function reduce(state=defalutstate,action){
        Swith(){
            case "start":
                return [state.start,state.end]
            case "end":
                return [state.end,state.start]
            defalut:
                return state
        }
    }
- 数据组件化
 1. connect 高阶组件包装原组件
     connect({
         mapState,
         mapDispatch
     })
 2. 创建组件
 3. 状态组件 ， 无状态组件重用的方法。