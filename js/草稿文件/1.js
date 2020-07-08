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
let x = 1;

function func() {

    console.log(x); // ?

    var x = 2;
}

func();