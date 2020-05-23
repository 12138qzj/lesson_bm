/**
 * @param {string} S
 * @return {string[]}
 */
var S = "a1b2";
let string = "12345";
var letterCasePermutation = function(S) {
    let ans = [];
    let reg1 = /[a-zA-Z]+/
    let reg = /[a-zA-Z]/




    function backtrack(str, i) {
        if (i >= S.length) {
            ans.push(str);
            return;
        }
        console.log(ans)

        let curr = S[i];
        console.log('curr', curr)

        if (reg.test(curr)) {
            let low = str + curr.toLowerCase(),
                high = str + curr.toUpperCase();
            console.log('low', low)
            console.log('high', high)
            backtrack(low, i + 1);
            backtrack(high, i + 1);
        } else {
            backtrack(str + curr, i + 1);
        }
    }
    backtrack('', 0);

    return ans;
};
console.log(letterCasePermutation(string))