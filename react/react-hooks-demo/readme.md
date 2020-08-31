

rfc 函数式组件 快捷
1. hooks 特色

    - useState
        useState(参数/函数)
        useState((prevstate)=>prevState+10)
    - useEffect
        生命周期的替代
        - 在return 完执行 <====> 与componentDidMount生命周期一样
        根据依赖是state 在状态执行的时候改变依赖，执行 <====> 与
    - useRef
        useRef返回一个对象
        useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
        返回的 ref 对象在组件的整个生命周期内保持不变

        解决函数作用域问题，使得定时器不能拿到实时的值
        ```jsx
        export const MyComponent=()=>{

        const [message,setMessage]=useState("initial message");
        const [seconds,setSeconds]=useState(0);
        const secondsRef=useRef();

        useEffect(() => {
            setTimeout(()=>{
            console.log(seconds);
            setSeconds(1);
            secondsRef.current=1;

            // console.log(seconds);
            // setMessage(`total seconds : ${seconds}`)

            },1000)
            setTimeout(()=>{
            setMessage(`total seconds : ${secondsRef.current}`)
            },2000)
        }, [])
        
        return(
            <div>
            <h3>{message}</h3>
            <h4>{seconds}</h4>
            </div>
        )
        }
        ```

    - useContext 

        复杂的state的父传子 传值优化
        当需要超过两层组件传值的时候 使用这个来优化  他没有reducer这么复杂，忽略，且比useState使用更简洁。
        创建 
        1. 创建一个：export const ThemeContext = React.createContext( 参数/*存入的值*/);
        ```jsx
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
        ``` 
        使用原始的获取值方法 太复杂
            导入 ThemeContext
            <ThemeContext.Comsumer >
                {
                    user=>{

                    }
                }
            </ThemeContext.Comsumer>
        2. 在Toolbar中使用 const Theme=useContext(ThemeContext) 就能获取这个值
    - useReducer
        三个参数 1. reducer 函数 2. 初始值 3. 初始值计算函数

        - redux 是企业级的数据状态安全流程及架构
            - state 可读的
            - state 写操作 disptch action->reducer ->旧新状态的操作
            
        只是共享 reducer 函数 具体数据不能共享  ，只是useState的替代方案


    - useCallback
        使用：返回一个函数做优化

        是因为父组件改变了值 会发生重新渲染 导致父组件的js函数也会重新渲染一次，导致子组件也重新渲染。

        优化场景：
        1. 当我们将一个函数作为参数，传递给子组件的时候，使用useCallback对函数进行处理

        2. useCallback会根据依赖是否发生改变，判断是否改变返回函数，
        然后子组件使用memo(子组件名)变成高阶组件，
        3. memo()高阶组件的使用， 会根据props进行浅层比较 该变则会重新渲染
    - useMemo
        使用：也会返回一个memozied（记忆的）值

        优化：对返回值做优化 返回值可以是（对象，数组，函数）
        场景：当我们使用一个常量，传递给子组件的时候，当父组件state值改变整个函数是会发生重新执行的，然后子组件也会重新渲染。**优化：**将这个常量使用useMemo返回。 

4. 分析react项目是如何运行的
    jsx
    root根
    jsx编译过程
    - 结点类型
      - 标签结点
      - 组件 递归解析结点
      - <></> frangrment 将所有节点先挂载在这个结点上 如何这个结点再将这些结点挂载在父节点上 ---好处不会生成新的结点 只需要挂载一次 优化了dom结点的挂载
      - 文本结点 递归的退出条件 创建文本 退出递归 


5. 你做项目的时候碰到了什么问题吗？
    - 使用文档 API
    - 问题1： 
            使用useRef 去解决闭包问题
            当使用定时器去获取useState 中的值当在初始化和执行定时器这段时间改变state值 则不会改变定时器中的值 
        解决方法： 将这个值存在 secondsRef.current中;
    - 问题2： 接口数据还没有加载完成，用户提前退出，报错

        解决方法：使用ref来判断组件是否存在 （卸载）
            当卸载组件的时候 使用useEffect的返回函数 
            
            来修改ref中的值 来判断是否要修改 state值