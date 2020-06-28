/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var s = 11,
    nums = [1, 2, 3, 4, 5];

var minSubArrayLen = function(s, nums) {
    let R = 0,
        L = 0;
    let mix = Infinity;
    let sum = nums[0];
    console.log(nums.length);
    while (R < nums.length) {

        console.log("R", L, R, sum);

        if (sum > s) {
            console.log("RRRRRRRRRRRRRRR", L, R, sum);
            mix = mix > (R - L + 1) ? (R - L + 1) : mix;
            sum = sum - nums[L];
            L++;
        } else if (sum < s) {
            R++;
            sum = sum + nums[R];
        }
    }
    return mix == Infinity ? 0 : mix;
};
console.log(minSubArrayLen(s, nums));
let mix = Infinity;

console.log(mix == Infinity);