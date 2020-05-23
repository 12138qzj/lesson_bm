/**
 * @author qzj
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
//     let hash = new Map()
//     for(let i=0;i<nums.length;i++){
//         if(hash.has(nums[i]))
//         return nums[i]
//         hash.set(nums[i],true)
//     }
// };
let nums = [2, 3, 1, 0, 2, 5, 3];
var findRepeatNumber = function(nums) {
    //let hash = new Map()
    let a = [];
    for (let i = 0; i < nums.length; i++) {
        if (a.some((num) => {
                return num == nums[i]
            }))
            return nums[i]
        a.push(nums[i])
    }
};
console.log(findRepeatNumber(nums))

var findRepeatNumber1 = function(nums) {
    //let hash = new Map()
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i]))
            return nums[i]
        hash.set(nums[i])
    }
};
console.log(findRepeatNumber1(nums))