/**
 * @param {number[]} nums
 * @return {number}
 */
var num = [0, 0, 1, 2, 5];
var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b)
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {

        if ((nums[i] + 1) == nums[i + 1]) {

            // right++;
            count++;
            //  console.log(i, right)


        } else if ((nums[i]) == nums[i + 1]) {
            console.log("muns2", nums, i)
                // nums.splice(i, i + 1);
                //  i--;
                // console.log("muns", nums)
            continue;
        } else {
            //   max = Math.max(right - left + 1, max)
            count = 0;
            //left = i + 1;
            // right = i + 1;
        }
        console.log(count)

        max = Math.max(count + 1, max)

    }
    console.log(nums, max)

};

longestConsecutive(num)
    // num.sort((a, b) => a - b)
console.log(num)