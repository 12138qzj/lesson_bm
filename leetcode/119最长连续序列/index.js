/**
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  if(nums.length === 1 || nums.length === 0){
    return nums.length
  }
  nums = nums.sort((a, b) => a - b )
  let start = 0 , end = 0, cha = 0, res = 0;
  console.log('nums', nums)
  // for (let index = 0; index < nums.length; index++) {
    while (end < nums.length) {
      // console.log('nums[end]',nums[end])
      if(nums[end] === nums[end + 1]){
        end++;
        cha++;
      }else if(nums[end] + 1 === nums[end + 1]){
        end++;
      } else if (nums[end] + 1 !== nums[end + 1]) {
        if(res <=  end - start - cha) {
          res = end - start - cha + 1
          end = end + 1;
          start = end;
          cha = 0;
        } else {
          end = end + 1;
          start = end;
          cha = 0;
        }
      }
    }
    console.log('res', res, nums.length)
   return res
};
console.log(longestConsecutive([100,2,0,1, 3,4]))