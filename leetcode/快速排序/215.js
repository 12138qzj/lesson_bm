/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @author qzj
 * 使用快排找元素的位置，找第K个最大的元素
 */
var num = [];
var findKthLargest = function(nums, k) {

    var rusult = 0;
    let leng = nums.length;

    function quick_sort(left, right) {
        // if (rusult != 0)
        //     return;
        if (left >= right) return;
        let r = right;
        let l = left;
        let priv = nums[left];
        while (left < right) {
            while (left < right && priv < nums[right]) right--;
            nums[left] = nums[right];
            while (left < right && priv > nums[left]) left++;
            nums[right] = nums[left];

        }

        nums[left] = priv;
        return left;
    }


    let i = 0,
        j = nums.length - 1;
    // 基准 -> index
    let index = quick_sort(i, j);
    // 基准 是不是 第 k 
    // [8, 9, 7, -1, 5] k = 2 > 1 2 3
    // partition: [5, -1, 7, 8, 9]
    // 第K个最大元素：从大到小    2
    // [9， 8， 7， 5， -1]
    // 从小到大：K 从小到大排列 nums.length - k 
    // [-1， 5， 7， 8， 9]
    // 倒数： 第 k 大元素 
    k = nums.length - k
    while (index !== k) {
        if (index < k) {
            i = index + 1;
        } else {
            j = index - 1;
        }
        index = quick_sort(i, j);
    }
    return nums[index];
};
console.log(findKthLargest(num, 0))