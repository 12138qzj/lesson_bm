/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //      const dp = new Array(triangle[triangle.length - 1].length);
    //   // base case 是最后一行
    //   for (let i = 0; i < dp.length; i++) {
    //     dp[i] = triangle[triangle.length - 1][i];
    //   }
    //   // 从倒数第二列开始迭代
    //   for (let i = dp.length - 2; i >= 0; i--) {
    //     for (let j = 0; j < triangle[i].length; j++) {
    //       dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    //     }
    //   }
    //   return dp[0];

    let leng = triangle.length;
    for (let i = leng - 1; i > 0; i--) {
        let leng2 = triangle[i].length;
        for (let j = 0; j < leng2 - 1; j++) {
            triangle[i - 1][j] = triangle[i - 1][j] + Math.min(triangle[i][j], triangle[i][j + 1]);
        }
    }
    return triangle[0][0]


    // let sum=0;
    // let a=0;
    // let b=0;
    // let res=[];

    // de(sum,a,b);
    // function de(sum,l,r){
    //     // console.log(triangle)
    //     if(triangle[l]!==undefined&&triangle[l][r]!==undefined){
    //         sum+=triangle[l][r];
    // // console.log(sum)

    //         de(sum,l+1,r);
    //         de(sum,l+1,r+1);
    //     }else{
    // // console.log("sum",sum)

    //     res.push(sum);

    //     }

    //     return;
    // }
    // // console.log(res)
    // let min=Infinity;
    // for(let i=0;i<res.length;i++){
    //     min=Math.min(min,res[i])
    // }
    // return min
};
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    //      const dp = new Array(triangle[triangle.length - 1].length);
    //   // base case 是最后一行
    //   for (let i = 0; i < dp.length; i++) {
    //     dp[i] = triangle[triangle.length - 1][i];
    //   }
    //   // 从倒数第二列开始迭代
    //   for (let i = dp.length - 2; i >= 0; i--) {
    //     for (let j = 0; j < triangle[i].length; j++) {
    //       dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    //     }
    //   }
    //   return dp[0];

    let leng = triangle.length;
    for (let i = leng - 1; i > 0; i--) {
        let leng2 = triangle[i].length;
        for (let j = 0; j < leng2 - 1; j++) {
            triangle[i - 1][j] = triangle[i - 1][j] + Math.min(triangle[i][j], triangle[i][j + 1]);
        }
    }
    return triangle[0][0]


    // let sum=0;
    // let a=0;
    // let b=0;
    // let res=[];

    // de(sum,a,b);
    // function de(sum,l,r){
    //     // console.log(triangle)
    //     if(triangle[l]!==undefined&&triangle[l][r]!==undefined){
    //         sum+=triangle[l][r];
    // // console.log(sum)

    //         de(sum,l+1,r);
    //         de(sum,l+1,r+1);
    //     }else{
    // // console.log("sum",sum)

    //     res.push(sum);

    //     }

    //     return;
    // }
    // // console.log(res)
    // let min=Infinity;
    // for(let i=0;i<res.length;i++){
    //     min=Math.min(min,res[i])
    // }
    // return min
};