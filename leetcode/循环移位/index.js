let arr = [1, 2, 3, 4, 5, 6, 7],
    k = 3;
//[7,1,2,3,4,5,6]
function RShift(list, k) {
    //结构数据， 深拷贝一下

    const copy = [...list];
    const n = list.length;
    k = k % n;
    if (k === 0)
        return list;
    console.log(5 % n);
    for (let i = 0; i < n; i++) {
        list[i] = copy[[k + i] % n]
    }
    return list
}
console.log(RShift(arr, k));

//三次翻转法

/**
 * 1.[0,n-k-1]
 * 2 [n-k,n-1]
 * 3 [0,n-1]
 */
function reverse(list, start, end) {
    let t = null;
    while (start < end) {
        t = list[start]
        list[start] = list[end];
        list[end] = t;
        start++;
        end--;
    }
}

function FRShift(list, k) {
    const n = list.length;
    if (k % n) return list;
    reverse(list, 0, n - k - 1);
    reverse(list, n - k, n - 1);
    reverse(list, 0, n - 1);
    return list;

}

console.log(FRShift(arr, k));