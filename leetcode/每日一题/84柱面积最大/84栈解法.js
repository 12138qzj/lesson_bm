/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (!heights) {
        return 0
    }
    heights.unshift(0)
    heights.push(0)
    const stack = []
    let area = 0
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let curr = stack[stack.length - 1]
            stack.pop()
            let left = stack.length === 0 ? 0 : stack[stack.length - 1] + 1
            let right = i - 1
            area = Math.max(area, (right - left + 1) * heights[curr])
        }
        stack.push(i)
    }
    return area
};