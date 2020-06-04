/**
 * @param {number[]} nums
 * @return {number[]}
 * 初次求解
 */
var productExceptSelf = function(nums) {
    let letf = [],
        right = [],
        output = [];
    letf[0] = 1, right[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        letf[i] = letf[i - 1] * nums[i - 1];
    }
    for (let j = nums.length - 2; j >= 0; j--) {
        right[j] = right[j + 1] * nums[j + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        output[i] = letf[i] * right[i]
    }
    //console.log(count)
    return output;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * 求解第一次改进
 */
var productExceptSelf = function(nums) {
    let letf = [],
        right = [];
    let leng = nums.length
    letf[0] = 1, right[leng - 1] = 1;

    for (let j = leng - 2; j >= 0; j--) {
        right[j] = right[j + 1] * nums[j + 1];
    }
    for (let i = 1; i < leng; i++) {
        letf[i] = letf[i - 1] * nums[i - 1];
        letf[i - 1] = letf[i - 1] * right[i - 1];
    }
    letf[leng - 1] = letf[leng - 1] * right[leng - 1];
    // for(let i=0;i<nums.length;i++){
    //      right[i]=letf[i]*right[i]
    // }
    //console.log(count)
    return letf;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 改进版（终）
 */
var productExceptSelf = function(nums) {
    const ret = [];

    for (let i = 0, temp = 1; i < nums.length; i++) {
        ret[i] = temp;
        temp *= nums[i];
    }
    for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
        ret[i] *= temp;
        temp *= nums[i];
    }
    return ret;

};