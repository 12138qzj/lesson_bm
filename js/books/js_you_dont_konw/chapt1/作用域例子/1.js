function fn() {
    console.log(a);
}
var a;

fn();


// a(); //uncaught TypeError
//当查出的a 对象上没有被调用的属性 
function i() {
    'use strict'
    // var b;
    var a = 1;

    function init(a) {
        b = a
    }
    init(a);
}


i();

console.log(b);