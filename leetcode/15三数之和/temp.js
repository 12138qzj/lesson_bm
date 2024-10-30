var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums);
    let res = []
    let map = new Set()
    let R
    let L
    for(let i = 0; i< nums.length; i++){
        L = i+1;
        R = nums.length -1
        console.log(i, L, R);
        while(L < R){
            if(nums[i] + nums[L] + nums[R] > 0){
                R --;
            } else if(nums[i] + nums[L] + nums[R] < 0){
                L++;
                
            } else {
                if(map.has(nums[i]+ '' + nums[L] + '' + nums[R])){
                } else {
                    map.add(nums[i]+'' +nums[L] + ''+ nums[R] )
                    res.push([nums[i], nums[L], nums[R]])
                }
            }
        }
    }
    console.log(map);
    return res
};
console.log(111, threeSum([-2,0,1,1,2])); 