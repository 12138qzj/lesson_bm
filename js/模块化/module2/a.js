import { add, min, bar } from './math.js';

//导出来的时候 都是引用的关系
console.log(add(1, 2))
console.log(bar);

setTimeout(() => {
    console.log(bar);
}, 5000)