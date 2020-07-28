//generator

// const { lchmod } = require("fs-extra")

// 如同 async await
// 协(纤)程 ：意为进程/线程 更小的单位

function* foo() {
    yield '1' //yield 不是返回1  如果需要返回值 则需要放到next(返回值)中
    console.log("1")
    let b = yield "two"
    console.log("2", b)
    yield "three"
    console.log("3")
}
let iterator = foo();



function autoRun(iterator) {

    let { value, done } = iterator.next(value);
    if (done) return;
    autoRun(iterator)
}
autoRun(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();