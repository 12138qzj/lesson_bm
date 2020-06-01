/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var candies = [2, 3, 5, 1, 3],
    extraCandies = 3;
var kidsWithCandies = function(candies, extraCandies) {

    let max = 0;

    for (let i = 0; i < candies.length; i++) {

        if (max < candies[i]) {
            max = candies[i];
        }
        candies[i] = candies[i] + extraCandies;


    }
    for (let j = 0; j < candies.length; j++) {
        if (max <= candies[j]) {
            candies[j] = true;
        } else {
            candies[j] = false;
        }
    }
    return candies;
}
console.log(kidsWithCandies(candies, extraCandies));