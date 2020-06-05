var matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let a = null;

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let res = [];
    let top = 0,
        left = 0,
        right = matrix[0].length,
        bottom = matrix.length;
    let n = right * bottom;
    let i = 0,
        j = 0;
    console.log(right, bottom, n);
    while (n >= res.length) {
        while (j < right) {
            res.push(matrix[i][j])
            j++;
            console.log(j);

        }
        top++;
        j--;
        i++;
        while (i < bottom) {
            res.push(matrix[i][j])
            i++;
            console.log(i);
        }
        right--;
        i--;
        j--;
        while (j >= left) {
            res.push(matrix[i][j])
            j--;
            console.log(j);
        }
        bottom--;
        j++;
        i--;
        while (i >= top) {
            res.push(matrix[i][j])
            i--;
        }
        left++;
        i++;
        j++;
    }
    console.log(res.slice(0, n));
    return res;
};
spiralOrder(matrix2)
    // let i = 0;
    // do {
    //     // i++
    //     console.log(i++);

// } while (i < 4);