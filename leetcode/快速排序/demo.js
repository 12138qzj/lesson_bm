/***
 * 
 * */
// function partition(nums, left, rigth) {
//     let provit = num[left];
//     while (left < rigth) {

//     }
// }

// function partition(nums, left, right) {
//     if (left >= right) return;
//     let i = left;
//     let j = right;
//     let provit = nums[left];
//     while (left < right) {
//         // left right 互相替换
//         // right 替换 left 位置
//         // left 替换 right 位置
//         // 1: 右边扫描，比基准值小数，如果这个数比基准值大，一直往前走
//         while (left < right && nums[right] >= provit) right--;
//         nums[left] = nums[right];
//         // 2: 左边扫描 比基准值大数
//         while (left < right && nums[left] <= provit) left++;
//         nums[right] = nums[left];
//     }
//     nums[left] = provit;

//     // return left;
//     partition(nums, i, left - 1);
//     partition(nums, left + 1, j);
// }
// var sortArray = function(nums) {
//     partition(nums, 0, nums.length - 1)
//     return nums;
// };

let num = [-1, -1, 7, 9, 8, -1, 5];

function kp(nums) {
    function sort(left, right) {
        if (right < left) return;
        let l = left;
        let r = right;
        let temp = nums[left];
        while (right > left) {
            while (temp <= nums[right] && left < right) right--;
            nums[left] = nums[right]
            while (temp >= nums[left] && left < right) left++;
            nums[right] = nums[left];
        }
        nums[left] = temp;
        sort(l, left - 1);
        sort(left + 1, r)
    }
    sort(0, nums.length - 1);
    return nums
}
console.log(kp(num))


// function fspx(nums) {

//     function sort(left, right) {
//         if (left > right)
//             return
//         let r = right
//         let l = left
//         let temp = nums[left]
//         while (left < right) {
//             while (temp <= nums[right] && left < right) right++;
//             nums[left] = nums[right];
//             while (temp > nums[right] && right < left) left++
//                 nums[right] = nums[left]
//         }
//         nums[l] = temp;
//         sort(0, left);
//         sort(left + 1, r)
//     }
//     sort(0, nums.length - 1)
//     return nums;
// }