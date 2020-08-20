## 数据劫持
    在es5的时候使用 Object.defineProperty()的get/set方法对数据进行监听
- proxy 可以拦截13种操作 如 获取/修改 原型对象
    监听数组的变化
    2. 监听对象的变化



对比
Object.defineProperty只能劫持对象的属性，对新增属性需要手动进行 Observe
