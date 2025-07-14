/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let map = {};
    map[0] = 0; // Base case: 0 amount requires 0 coins
    let max = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= amount; i++) {
        map[i] = max; // Initialize with Infinity
        for (let coin of coins) {
            if (i - coin >= 0) {
                map[i] = Math.min(map[i], map[i - coin] + 1);
            }
        }
    }

    if (map[amount] === max) {
        return -1; // If we never updated the value, return -1
    }
    return map[amount];
};


coins = [1, 2, 5];
amount = 11;
console.log(coinChange(coins, amount)); // Output: 3 (11 = 5 + 5 + 1)

coins = [2];
amount = 3;
console.log(coinChange(coins, amount)); // Output: -1 (not possible to make 3 with coin 2)

coins = [1];
amount = 0;
console.log(coinChange(coins, amount)); // Output: 0 (0 amount requires 0 coins)