/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * date 2020-06-07
 * 方法：BFS 广度优先遍历
 */
// var arr = [4, 2, 3, 0, 3, 1, 2],
//     start = 5;
var arr = [],
    start = 0;
var canReach = function(arr, start) {
    var result = false;

    function backBFS(start) {
        if (arr[start] == 0) {
            result = true;
            console.log("结果")
            return true;

        }
        let temp = arr[start];
        console.log("temp", temp, start)
        arr[start] = undefined;
        if (arr[start + temp] != undefined) {
            console.log("+法", arr, start)

            if (backBFS(start + temp))
                return
        }

        if (arr[start - temp] != undefined) {
            console.log("-法", arr, start, temp)

            if (backBFS(start - temp))
                return
        }
        return;
    }
    backBFS(start);
    console.log(result)
};

canReach(arr, start)
    // arr[1] = false;
if (arr[-1] == undefined)
    console.log(arr[-1], arr)