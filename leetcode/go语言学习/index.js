/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    var count = M.length;
    let friends = [];
    for (let i = 0; i < count; i++) {
        friends[i] = i;
    }


    function union(j, i) {
        if (friends[j] != friends[i]) {
            friends[i] = friends[j]
            count--;
        }
    }
    for (let j = 0; j < count; j++) {
        for (let i = j + 1; j < count; i++) {
            if (M[j][i]) {
                union(j, i)
            }
        }
    }
    return count;


};