/**
 * @author qzj
 * @date 2020-4-14
 * @function 删除数组中的重复数据
 * @param {@type Array} nums
 * @return {Array}
 */
let nums = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4];
const removeDuplicates = function(nums) {
    //console.log(nums.length);
    // let a = nums[0];

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i - 1] == nums[i]) {
    //         nums.splice(i - 1, 1);
    //         i--;
    //     }
    // }
    // return nums.length;
    // var count = 0;
    // var n = nums.length;
    // let hash = new Map();
    // for (let i = 0; i < n; i++) {
    //     hash.set(nums[i])
    // }
    // console.log(hash);
    // console.log(hash.size);
    // return hash.size;
    var count = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {

        } else {
            nums[count + 1] = nums[i + 1]
            count++;
        }
    }
    return count + 1;

};
console.log(removeDuplicates(nums));
console.log(nums);