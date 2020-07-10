/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    // var count = M.length;
    // let friends = [];
    // for (let i = 0; i < count; i++) {
    //     friends[i] = i;
    // }


    // function union(j, i) {
    //     if (friends[j] != friends[i]) {
    //         friends[i] = friends[j]
    //         count--;
    //     }
    // }
    // for (let j = 0; j < count; j++) {
    //     for (let i = j + 1; j < count; i++) {
    //         if (M[j][i]) {
    //             union(j, i)
    //         }
    //     }
    // }
    // return count;


    /**广度优先 解法 */


    // let count = M.length;
    // let res = 0;
    // let friends = [];
    // for (let i = 0; i < count; i++) {
    //     friends.push(1);
    // }
    // let query = [];

    // for (let j = 0; j < count; j++) {
    //     if (friends[j]) {
    //         query.push(j);
    //         while (query.length > 0) {
    //             let temp = query.splice(0)
    //             for (let pre of temp) {
    //                 if (friends[pre]) {
    //                     for (let i = 0; i < count; i++) {
    //                         if (M[pre][i]) {
    //                             query.push(i);
    //                         }
    //                     }
    //                     friends[pre] = 0;
    //                 }
    //             }
    //         }
    //         res++;
    //     }

    // }
    // return res;


    /**深度优先 解法 */
    let count = M.length;
    let res = 0;
    let friends = [];
    for (let i = 0; i < count; i++) {
        friends.push(1);
    }

    function depet(i) {
        if (friends[i]) {
            friends[i] = 0;
            for (let j = 0; j < count; j++) {
                if (M[i][j]) {
                    if (friends[j]) {
                        depet(j);

                    }
                }
            }
        }
    }

    //  let query =[];
    for (let j = 0; j < count; j++) {
        if (friends[j]) {
            res++;
            depet(j)
        }

    }
    return res;

};