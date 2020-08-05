
1. hooks 特色

    - useState
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
