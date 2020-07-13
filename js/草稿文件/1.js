// for (var i = 0; i < 10; i++) {
//     setTimeout(console.log,s 1000, i)
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }
// console.log(_i);


// f()();
// console.log(a);

// var a = () => {
//     console.log("object");
// }

// function f() {
//     let value = 123;

//     return function() {
//         console.log(value);
//     }
// }

// let g = f(); // while g function exists, the value stays in memory

// g();
// g = null;
// g();
// f()();

// console.log(x);
// 声明位置
var me = {
    name: 'xiuyan',
    hello: function() {
        console.log(`你好，我是${this.name}`)
    }
}

var name = 'BigBear'
var hello = me.hello

// 调用位置
me.hello() // 你好，我是xiuyan
hello() // 你好， 我是BigBear


function fn(a) {
    console.log(a);
    var a = 2;
    var a = 1;

    function a() {
        // console.log(a);
    }
    // a = 2
    console.log("1111", a);
}




// fn();
console.log(fn);
fn(2);



// console.log(fn);



// fn();
// var fnname = "李四"