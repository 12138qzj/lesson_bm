//经常用在对象上，
//例如a || b，如果a不存在，则返回b。
//a && b，如果a存在，则返回b，否则返回a。
let a = 0;
let b = 1;
console.log(3 && b);

/**
 * @param {number} n
 * @return {number}
 * 要求：求 1+2+...+n ，
 * 要求不能使用乘除法、for、while、if、else、switch、case等关键字
 * 及条件判断语句（A?B:C）。
 * @author qzj
 */
var sumNums = function(n) {
    var sum = 0;

    function back(k) {
        //console.log(sum,k,sum+k)
        sum += k;
        k && back(--k)
        return k;
    }
    back(n);
    return sum;
};