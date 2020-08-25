- 使用cnpm i rollup -S 工具

打包命令：
npx rollup index.js --file dist.js --format cjs


- module.exports
module.exports.obj = obj;使用这个导出 则是浅拷贝到引入的地方

export 导入是将需要导入的东西加载在引入的地方  把代码复制过来



commonJS是
 规范是在代码运行时同步阻塞性地加载模块，在执行代码过程中遇到 require(X) 时会停下来等待，直到新的模块加载完成之后再继续执行接下去的代码

 CommonJS 中的缓存可以解决重复查找和重复执行的问题
 缓存还解决了循环引用的问题
 ```js
// a.js
module.exports = {
    foo: 1,
};

// main.js
const a1 = require('./a.js');
 ```


 ES6 模块导入导出
 ```js
    // counter.mjs
export let count = 1;

export function increment () {
  count++;
}

// main.mjs
import { increment, count } from './counter.mjs'
```


两者的区别：

1. commonJS 可以在运行时使用变量进行 require

 ES6 module静态 import 语法（还有动态 import，返回 Promise）不行，因为 ES6 模块会先解析所有模块再执行代码


 2. require 会将完整的 exports 对象引入，
    import 可以只 import 部分必要的内容，这也是为什么使用 Tree Shaking 时必须使用 ES6 模块 的写法

3. ES6module是在代码执行前加载模块
 import 另一个模块没有 export 的变量，在代码执行前就会报错，
 而 CommonJS 是在模块 执行代码边加载。
