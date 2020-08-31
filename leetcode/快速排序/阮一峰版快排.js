const qs = (arr) => {
    if (arr.length <= 1) return arr; //当数组剩下一个的时候返回
    let left = [];
    let right = [];
    let provit = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < provit) {
            left.push(arr[i]); //小于基数的在左边
        } else {
            right.push(arr[i]); //大于基数的在右边
        }
    }
    return [...qs(left), provit, ...qs(right)]; //递归使数组扩展，直到数组剩下一个
}
const arr = [0, 1, -1, 3, 99, -4, 6];
// 1，原地交换
// 2，没有partition思想
// 比较好理解
console.log(qs(arr));