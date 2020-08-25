// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// console.log(i);
// var foo = function() {

//     console.log('foo1');

// }

// foo(); // foo1

// var foo = function() {

//     console.log('foo2');

// }

// foo(); // foo2
// 2、 请用javascript尽可能多的方法实现这样的数组转换[1, [2, [3]], 4, [5]] => [1, 2, 3, 4, 5]？

let arr = [1, [2, [3]], 4, [5]];

function dept(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "object") {
            res.push(...dept(arr[i]));
        } else {
            res.push(arr[i])
        }
    }
    return res
}
console.log(JSON.parse(JSON.stringify(arr)));

var ary2 = Array.from(arr);
console.log(ary2)
    // console.log(arr.Arrayfrom());