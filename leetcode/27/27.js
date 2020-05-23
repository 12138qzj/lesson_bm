/**
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var val = 2;
var removeElement = function(nums, val) {
    var n = 0;
    nums.forEach((element, index) => {
        console.log(element, index)
            //element == val ? null : nums[n++] = element;
            // console.log("后", element, index)
        element == val ? nums.splice(i) : nums[n++] = element;

    });
    return n;
};
console.log(removeElement(nums, val))
nums.splice(1, 1);
console.log(nums)