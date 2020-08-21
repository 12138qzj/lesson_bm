## 对象 类型转换 
### es5 
   - 转换为String  String(obj)则是调用 toString方法
   - 转换为Number  Number(obj)则是调用 valueOf方法
### es6
   - [Symbol.toPrimitive] 使用这个方法来判断 返回值

但我们使用===来做判断的时候 会隐式的转换类型 若存在[Symbol.toPrimitive]这个方法就走这个过程来转换

当不存在的时候 就使用es5这个转换
 转换为String  String(obj)则是调用 toString方法
 转换为Number  Number(obj)则是调用 valueOf方法

 因为 NaN===NaN 为false 

 则出现了这个Object.is(NaN,NaN)//ture 这个方法




