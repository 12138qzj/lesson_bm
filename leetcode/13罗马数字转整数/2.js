/**
 * @param {string} s
 * @return {number}
 * 罗马数字规则：
 * 当一个数字的左边值是小于自己的 则减法算，
 * 右边的则是加法算。
 */
var romanToInt = function(s) {
    let table = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
        // let leng = s.length,
    let i = 1,
        res = 0;
    if (s.length <= 1) {
        return s.length ? table[s[0]] : res;
    }
    let pre = table[s[0]];
    while (i < s.length) {
        if (table[s[i]] > pre) {
            res -= pre;
        } else {
            res += pre;
        }
        pre = table[s[i]]
        i++;
    }

    return res + table[s[i - 1]];
};