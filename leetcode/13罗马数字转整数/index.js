/**
 * @param {string} s
 * @return {number}
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
    let leng = s.length,
        i = 0;
    let left = 0,
        center = 0,
        res = 0;
    if (leng <= 1) {
        return leng ? table[s[0]] : res;
    }
    if (table[s[i]] < table[s[leng - 1]]) {
        while (i < leng - 1) {
            res += table[s[i]]
            i++;
        }
        // console.log(table[s[i]])
        return table[s[i]] - res;
    }
    if (table[s[i]] >= table[s[leng - 1]]) {
        res = table[s[i]];
        i++;
        while (i < leng) {
            res += table[s[i]]
            i++;
        }
        return res;
    }
};