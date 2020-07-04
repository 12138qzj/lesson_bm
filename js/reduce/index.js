let arr = [1, 2, 3, 4];

let sum = arr.reduce((pre, cur) => {
    console.log(pre, cur);
    return pre + cur;
});
console.log(sum);



function reducefunc(arr, reduceCallback, initialValue) {

    //参数数量的判断 arguments 

    //参数校验
    if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
        return [];
    } else {
        //initialValue 0 1
        //判断 一个参数是否存在，将结果赋值给一个变量。
        let hasInitalValue = initialValue !== undefined;

        //**********代码经典*************/
        let pre = hasInitalValue ? initialValue : arr[0];
        console.log("pre", pre, hasInitalValue);
        for (let i = hasInitalValue ? 0 : 1; i < arr.length; i++) {
            pre = reduceCallback(pre, arr[i], i, arr);
        }
        return pre;
    }
}

console.log("----", reducefunc(arr, function(pre, cur) {
    console.log(pre, cur);

    return pre + cur;
}), 0);