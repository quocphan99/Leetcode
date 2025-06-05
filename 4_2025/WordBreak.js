/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let wordMap = {};
    for (let word of wordDict) {
        wordMap[word] = true;
    }

    let dp = new Array(s.length + 1).fill(true);
    let maxLength = 1;
    let keyArr = Object.keys(wordMap);
    for (let key of keyArr) {
        if (key.length > maxLength) {
            maxLength = key.length;
        }
    }

    return recursion(s, wordMap,maxLength, dp, 0, 1);
};

let recursion = (s, wordMap, maxLength, dp, start, curLength) => {
    if (start === s.length) {
        return true;
    }

    if (curLength > maxLength) {
        return false;
    }

    if (curLength > s.length) {
        return false;
    }

    let subStr = s.substring(start, start + curLength);

    if (wordMap[subStr] && dp[start + curLength]) {
        if (recursion(s, wordMap, maxLength, dp, start + curLength, 1)) {
            return true;
        } else {
            dp[start + curLength] = false;
        }
        
    }

    return recursion(s, wordMap, maxLength, dp, start, curLength + 1);
}

s = "leetcode";
wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true

s = "applepenapple";
wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict)); // Output: true

s = "catsandog";
wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict)); // Output: false

s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
wordDict = ["aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "ba"];
console.log(wordBreak(s, wordDict)); // Output: false