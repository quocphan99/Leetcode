/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 can be formed with 0 squares

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};

n = 12;
console.log(numSquares(n)); // Output: 3 (4 + 4 + 4)
n = 13;
console.log(numSquares(n)); // Output: 2 (4 + 9)