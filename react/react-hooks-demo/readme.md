

rfc 函数式组件 快捷
1. hooks 特色

    - useState
        useState(参数/函数)
        useState((prevstate)=>prevState+10)
    - useEffect
        生命周期的替代
        - 在return 完执行 <====> 与componentDidMount生命周期一样
        根据依赖是state 在状态执行的时候改变依赖，执行 <====> 与
    - useCallback

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
    - 问题1： 使用useRef 去解决闭包问题
            当使用定时器去获取useState 中的值当在初始化和执行定时器这段时间改变state值 则不会改变定时器中的值 
        解决方法： 将这个值存在 secondsRef.current中 ;
    - 问题2： 接口数据还没有加载完成，用户提前退出，报错

        解决方法：使用ref来判断组件是否存在 （卸载）
            当卸载组件的时候 使用useEffect的返回函数 
            
            来修改ref中的值 来判断是否要修改 state值