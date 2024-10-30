var longestConsecutive = function(nums) {
    if(nums.length <=1) return nums.length
    const set = new Set()
    console.log(nums);
    let maxLength = 1
    let curlenth = 1
    
    for(let i=1; i<nums.length; i++){
        // if(set.has(nums[i])){

        // } 
        if(set.has(nums[i]+ 1)){
            set.has(nums[i]+ 1) = set.has(nums[i]+ 1) +1
            set.has(nums[i]) = set.has(nums[i]+ 1)
        }
        if(set.has(nums[i]-1)){
            set.has(nums[i]+ 1) = set.has(nums[i]+ 1) +1
            set.has(nums[i]) = set.has(nums[i]+ 1)
        }
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

