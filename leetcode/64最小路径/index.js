/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    grid[0][-1] = Infinity;
    for (let i = 0; i < grid.length; i++) {
        grid[i][-1] = Infinity;
    }
    grid[-1] = [];
    for (let i = 0; i < grid[0].length; i++) {
        grid[-1][i] = Infinity;
    }
    console.log(Math.min(grid[0][-1], 2))
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (j === 0 && i === 0)
                continue;
            // console.log("qian",i,j,grid[i][j])
            grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1])
                // console.log("hou",i,j,grid[i][j])

        }
    }





    // console.log(grid[0][0])
    // console.log(grid)

    return grid[grid.length - 1][grid[0].length - 1];

};