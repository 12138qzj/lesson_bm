/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [-1, 2, 1, -4],
    target = 1;
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let left = 0;
    let right = nums.length - 1;
    let p = 1;
    let res = Infinity;
    let result;
    while (true) {
        let k = Math.abs(nums[left] + nums[right] + nums[p] - target);
        console.log(k)

        if (k <= res) {
            result = nums[left] + nums[right] + nums[p];
            res = k;
            if (k == 0) {
                console.log("K")
                break;

            }

        }
        if (nums[left] + nums[right] + nums[p] > target && right > p + 1)
            right--;
        else if (nums[left] + nums[right] + nums[p] < target && p < right - 1) {
            p++;
        } else if (nums[left] + nums[right] + nums[p] < target && left < p - 1) {
            left++;
        } else {
            console.log("j")

            break;
        }
    }
    return result;


};
nums.sort((a, b) => a - b)
console.log(nums);
console.log(threeSumClosest(nums, target));


/**
 * 双指针解法
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a, b) => a - b);
    let result;
    let res = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            continue;
        let L = i + 1;
        let R = nums.length - 1;

        while (L < R) {
            let k = Math.abs(nums[L] + nums[R] + nums[i] - target)
            if (k < res) {
                res = k;
                result = nums[L] + nums[R] + nums[i];
            }
            if (nums[L] + nums[R] + nums[i] === target) {

                return result;

            } else if (nums[L] + nums[R] + nums[i] > target) {

                R--;
            } else if (nums[L] + nums[R] + nums[i] < target) {
                L++;
            }
        }
    }
    return result;
};