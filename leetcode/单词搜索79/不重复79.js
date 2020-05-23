/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * @author qzj
 * @date 2020-05-17
 */
let board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ],
    word = "EESS";

var exist = function(board, word) {
    //越界处理
    // 在首尾加一个数组
    let board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    board[-1] = []
    board.push([])

    console.log(board)

    //寻找首个字母
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board.length; x++) {
            if (word[0] === board[y][x] && backtrack(y, x, 0)) return true
        }
    }

    //回溯
    function backtrack(y, x, i) {
        //回溯终止
        console.log(board)
        if (i + 1 === word.length) return true
        console.log(y, x, i)

        //保存字母
        var tmp = board[y][x]
        board[y][x] = false

        if (board[y][x + 1] === word[i + 1] && backtrack(y, x + 1, i + 1)) return true
        if (board[y][x - 1] === word[i + 1] && backtrack(y, x - 1, i + 1)) return true
        if (board[y + 1][x] === word[i + 1] && backtrack(y + 1, x, i + 1)) return true
        if (board[y - 1][x] === word[i + 1] && backtrack(y - 1, x, i + 1)) return true

        //复原字母
        board[y][x] = tmp
    }

    return false
};
console.log(exist(board, word))