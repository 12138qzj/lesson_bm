var orangesRotting = function(grid) {
    let k = 0;
    // { x: 0, y: 0 } 上下左右四个方向
    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    let queue = [];
    let time = -1;
    // 找到所有 坏橘子
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // console.log(grid[i][j])
            if (grid[i][j] === 2) {
                queue.push({ x: i, y: j })
            }
        }
    }
    while (queue.length) {
        // 每分钟 找到所有当前的坏橘子
        time++;
        let rowNodes = queue.splice(0);
        // 所有当前的坏橘子 4 个方向让它变坏
        for (let { x, y }
            of rowNodes) {

            console.log("运行次数", k++, { x, y });
            // 循环上下左右 四个方向
            for (let direct of directions) {
                let x_new = x + direct[0];
                let y_new = y + direct[1];
                if (0 <= x_new && x_new < grid.length &&
                    0 <= y_new && y_new < grid[0].length &&
                    grid[x_new][y_new] === 1
                ) {
                    grid[x_new][y_new] = 2;
                    queue.push({ x: x_new, y: y_new })
                }
            }
        }
    }
    for (let row of grid) {
        if (row.includes(1)) return -1;
    }
    return time;
}
console.log(orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
]));