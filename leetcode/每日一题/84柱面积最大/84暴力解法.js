/**
 * @param {number[]} heights
 * @return {number}
 */
var nums = [2, 1, 5, 6, 2, 3];
var largestRectangleArea = function(heights) {
    let leng = heights.length;
    let max = 0;
    for (let i = 0; i < leng; i++) {
        let left = i - 1;
        let right = i + 1;
        let count = 1;
        while (left > -1 && heights[left] >= heights[i]) {
            left--;
            count++;
        }
        while (right < leng && heights[right] >= heights[i]) {
            right++;
            count++;
        }
        // if (max < heights[i] * count) {
        //     max = heights[i] * count;
        // }
        max = Math.max(max, heights[i] * count)
    }
    return max;
};
console.log(largestRectangleArea(nums))