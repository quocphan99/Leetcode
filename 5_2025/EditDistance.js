/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

    if (word1.length === 0 || word2.length === 0) {
        return Math.max(word1.length, word2.length);
    }
    if (word1 === word2) return 0;

    let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = i;
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = i;
    }

    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                dp[i + 1][j + 1] = dp[i][j];
            } else {
                dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1;
            }
        }
    }

    return dp[word1.length][word2.length];
};

word1 = "horse";
word2 = "ros";
console.log(minDistance(word1, word2)); // Output: 3

word1 = "intention";
word2 = "execution";
console.log(minDistance(word1, word2)); // Output: 5

word1 = "abc"
word2 = "defghi"
console.log(minDistance(word1, word2)); // Output: 6

word1 = "leet"
word2 = "code"
console.log(minDistance(word1, word2)); // Output: 4

word1 = "aaaaaaaaaaaaaaaaaaaaaa"
word2 = "aaaaaaaaaaaaaav"
console.log(minDistance(word1, word2)); // Output: 8