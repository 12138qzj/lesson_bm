/**
 * @param {number[]} nums1
 * @param {number[]} nums2
//  * @return {number}
//  */
//解题思路 
//**只要找到中间的两个元素就OK */
// 这道题让我们求两个有序数组的中位数，而且限制了时间复杂度为O(log (m+n))，
// 看到这个时间复杂度，自然而然的想到了应该使用二分查找法来求解。
// 那么回顾一下中位数的定义，如果某个有序数组长度是奇数，
// 那么其中位数就是最中间那个，如果是偶数，那么就是最中间两个数字的平均值。
// 这里对于两个有序数组也是一样的，假设两个有序数组的长度分别为m和n，
// 由于两个数组长度之和 m+n 的奇偶不确定，因此需要分情况来讨论，
// 对于奇数的情况，直接找到最中间的数即可，偶数的话需要求最中间两个数的平均值。
// 为了简化代码，不分情况讨论，我们使用一个小trick，
// 我们分别找第 (m+n+1) / 2 个，和 (m+n+2) / 2 个，
// 然后求其平均值即可，这对奇偶数均适用。加入 m+n 为奇数的话，
// 那么其实 (m+n+1) / 2 和 (m+n+2) / 2 的值相等，
// 相当于两个相同的数字相加再除以2，还是其本身

//时间复杂度为O((m+n+1)/2)
let nums1 = [1, 2, 3];
let nums2 = [3, 4];
var findMedianSortedArrays = function(nums1, nums2) {

    let m = nums1.length;
    let n = nums2.length;
    let len = m + n;
    let left = -1,
        right = -1;
    let aStart = 0,
        bStart = 0;
    for (let i = 0; i <= len / 2; i++) {
        left = right;
        if (aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])) {
            right = nums1[aStart++];
        } else {
            right = nums2[bStart++];
        }
    }
    if ((len % 2) == 0)
        return (left + right) / 2.0;
    else
        return right;
};
console.log(findMedianSortedArrays(nums1, nums2));