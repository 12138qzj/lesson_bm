/**
 * @param {string} s
 * @return {number}
 * 2020-9-20
 */
var lengthOfLongestSubstring = function(s) {
    let maxleng = -Infinity;
    let leng = s.length;
    let R = 0;
    let map = [];
    while (R < leng) {
        if (map.includes(s[R])) {
            while (map.includes(s[R])) {
                map.shift();
            }
        }
        map.push(s[R]);
        maxleng = Math.max(maxleng, map.length);
        R++;
    }
    return maxleng === -Infinity ? 0 : maxleng;
};