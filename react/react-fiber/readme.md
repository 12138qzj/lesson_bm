JSX ->createElement -> 虚拟DOM (react element)->对应平台的渲染器 reactDOM/react-native

setState -> 生成另外一颗 虚拟DOM -> dom diff(reconcilers) -> 找出那些需要更新的地方 ->应用更新

## stack reconciler 

## fiber reconciler

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

     fiber 是一个数据结构
     这个数据结构支持我们写出 可中止暂停重启启动的代码
```js
fiber:{
    child:第一个子节点,
    sibling:下一个兄弟,
    return :给父节点
}

fiber 以单链表的形式 来表达的一个数树

```
    但是在react中 他是可以被打断的 打断加入了各个生命周期
    - 宏任务（task）
    - 微任务（microtask）
    - request AnimationFram
    - render
    - requestIdleCallback 当这个一帧浏览器有空闲时间的时候才会执行 这个函数。----没有则推到下一帧


#### 前版本：
    js是执行的老大，要等js执行完才会执行其他任务

    现在是js主动让步， js自己放在 requesIdleCallback 里面，js和浏览器统一站在用户体验的角度 （合作调度）
