// var a = [0, 2, 4, 5, 0, 8, 9]

// a.splice(0, 1)
// console.log(a);
// a.splice(3, 1)

// console.log(a);
var preson = {
    a: 2
}

Object.defineProperty(preson, "a", {
    writable: false,
    // value: 2
})

preson.a = 9;
console.log(preson);

let obj = { a: 1 }
Object.freeze(obj)
obj.a = 2
console.log(obj)