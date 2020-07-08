/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let numbers = [2, 7, 11, 15],
    target = 9;
// console.log(object);
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    console.log(right);
    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        }
        if (numbers[left] + numbers[right] < target) {
            left++;
        }
        if (numbers[left] + numbers[right] == target) {

            return [left, right];
        }
    }

    return [];

};
console.log(twoSum(numbers, target));