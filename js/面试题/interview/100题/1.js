//函数及对象

function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
    let arr = [1, 2, 3];
    return arr;
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a() //4
let obj = new Foo();
console.log(obj);
// obj.a(); //2
Foo.a(); //1



function myNew() {
    const obj = new Object();
    Constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    let ret = Constructor.apply(obj, arguments); // 判断构造函数是否存在返回值
    return typeof ret === 'object' ? ret : obj;
}