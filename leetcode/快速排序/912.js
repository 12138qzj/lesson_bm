/**
 * @param {number[]} nums
 * @return {number[]}
 * @author qzj
 * 快速排序的核心函数实现
 */
let nums = [7, 9, 8, -1, 5];
var sortArray = function(nums) {

    function quick_sort(left, right) {
        if (left >= right) return;
        let priv = nums[left];
        while (left < right) {

            while (left < right && priv <= nums[right]) right--;
            nums[left] = nums[right];
            while (left < right && priv >= nums[left]) left++;
            nums[right] = nums[left];

        }
        nums[right] = priv;
        quick_sort(0, left - 1);
        quick_sort(left + 1, right)
            //return nums;
    }
    quick_sort(0, nums.length - 1)
    console.log(quick_sort(0, nums.length - 1));
    console.log(nums);
};
sortArray(nums)