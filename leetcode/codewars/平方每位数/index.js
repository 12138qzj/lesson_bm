function squareDigits(num) {
    //may the code be with you
    num = num + '';
    let str = '';
    for (let i = 0; i < num.length; i++) {
        str = str + num[i] * num[i];
    }
    return str * 1;
}

let a = 123;
a = a + "";
console.log(a[0] * a[0], a[1] * a[1], a[2], a[3]);

console.log(squareDigits(234));