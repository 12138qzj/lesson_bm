var longestConsecutive = function(nums) {
    if(nums.length <=1) return nums.length
    nums.sort((a,b) => a-b)
    console.log(nums);
    let maxLength = 1
    let curlenth = 1
    
    for(let i=1; i<nums.length; i++){
        if(nums[i-1] + 1 === nums[i]){
            curlenth = curlenth + 1
        } else if(nums[i-1] === nums[i]){
            continue;
        }else {
            curlenth = 1
        }
        maxLength = Math.max(maxLength ,curlenth)

    }
    return maxLength
};



console.log('12', longestConsecutive([1,2,0,1]));