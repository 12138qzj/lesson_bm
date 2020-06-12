/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) {
        var str = x * (-1) + "";
        //x=x*(-1)
    } else {
        var str = x + "";
    }
    let result = ''
    for (let i = str.length - 1; i > -1; i--) {
        //console.log("ress", str[i]);
        result += str[i]
    }
    // console.log(result, "re", str, Number(result));
    if (x < 0) {
        return Number(result) <= Math.pow(2, 31) ? -Number(result) : 0;
        //x=x*(-1)
    } else {
        return Number(result) < Math.pow(2, 31) ? Number(result) : 0;
    }

};
let a = 156;
let temp = a[0];
a[0] = a[2];
// a[2] = temp[a[0], a[2]] = [a[2], a[0]]
console.log(a[1], a, a.length);
reverse(a)