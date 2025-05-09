/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = new Array(grid[0].length);
    dp[0] = grid[0][0];

    for (let j = 1; j < grid[0].length; j++) {
        dp[j] = dp[j - 1] + grid[0][j];
    }

    // console.log(dp);

    for (let i = 1; i < grid.length; i++) {

        dp[0] += grid[i][0];

        for (let j = 1; j < grid[0].length; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
        }

        // console.log(dp);
    }

    return dp[dp.length - 1];
};

let grid = [[1,2,3],[4,5,6]]
console.log(minPathSum(grid)); // 7