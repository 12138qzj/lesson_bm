/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

// mod 的分配率： (a + b) mod c = (a mod c + b mod c) mod c
// 当前的 preSumModK
// = (( 当前的前缀和 )) mod K
// = (( 上一项的前缀和 + A[i])) mod K
// = ( (((上一项的前缀和) mod KK + A[i] mod KK )) mod K
// = (( 上一个 preSumModK + A[i] mod KK )) mod K
// = (( 上一个 preSumModK ++A[i]A )) mod K
// 一前一后的 preSumModK 有了联系，便可在迭代中计算它

var subarraysDivByK = function(A, K) {

    let map = { 0: 1 } // 为了让边界情况也能适用通式
    let preSumModK = 0 // 保存前缀和模K的结果，初始值：0模K=0
    let count = 0 // 计数
    for (let i = 0; i < A.length; i++) { // 一次遍历做完所有事
        preSumModK = (preSumModK + A[i]) % K // preSumModK的递推关系
        if (preSumModK < 0) preSumModK += K // 处理preSum为负数的情况，需要加 K
        if (map[preSumModK]) { // 之前存过的 与当前preSum相等的key
            count += map[preSumModK] // 把它出现的次数累加给count
        }
        if (map[preSumModK]) { // 以前存过，出现次数+1
            map[preSumModK]++
        } else { // 新存入，初始值1
            map[preSumModK] = 1
        }
    }
    return count // 返回计数结果

};