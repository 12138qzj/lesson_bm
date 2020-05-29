/**
 * @param {number[]} nums
 * @return {number}
 */
var num = [2, 7, 9, 3, 1];
// var rob = function(nums) {
//     let one = 0,
//         two = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i % 2 == 0) {
//             one += nums[i];
//         } else {
//             two += nums[i]
//         }
//     }
//     return one > two ? one : two;
// };
// console.log(rob(num))


//动态规划
var num = [2, 7, 9, 3, 1];
var rob = function(nums) {
    let arr = [];
    arr[0] = 0;
    arr[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i - 1])
    }
    console.log(arr)
    console.log(arr[arr.length - 1])
    return arr[arr.length - 1];
    // return one > two ? one : two;
};
rob(num);