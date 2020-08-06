'use strict';

const add = (a, b) => a + b;

var bar = "bar";
setTimeout(() => {
    bar = "zip";
}, 3000);

console.log(add(1, 2));
console.log(bar);

setTimeout(() => {
    console.log(bar);
}, 5000);