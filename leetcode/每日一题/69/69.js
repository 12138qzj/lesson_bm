/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    if (x === 0) return 0;
    let re = x;
    while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
        // re = parseInt(re-(re*re-x)/(2*re))
        if (re * re < x) {
            re++

        } else {
            re = parseInt(re / 2);

        }
    }
    return re
};
console.log(mySqrt(10000));