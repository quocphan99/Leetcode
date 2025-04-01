/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    return recursive(m, n, dp);
};

let recursive = function(m, n, dp){
    if (n === 1 || m === 1) return 1;

    if (dp[m][n] === 0){
        dp[m][n] = recursive(m - 1, n, dp) + recursive(m, n - 1, dp);
    }

    return dp[m][n];
}

let n = 3, m = 7;
console.log(uniquePaths(m, n));