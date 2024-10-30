/**
 * @param {string} s
 * @return {number}
 * 2020-9-20
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
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

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxleng = 0
    let index = 0
    let map = []
    while(index < s.length){
        if(map.includes(s[index])){
            map.shift()
        } else {
            map.push(s[index])
            index++
        }
        maxleng = Math.max(maxleng, map.length)
    }
    return maxleng
};