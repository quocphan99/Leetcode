/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last = {};

    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    // rangeList.sort((a, b) => a[0] - b[0]);

    let curStart = 0;
    let curEnd = last[s[0]];
    let result = [];

    for (let i = 1; i < s.length; i++) {
        if (i > curEnd) {
            result.push(curEnd - curStart + 1);
            curStart = i;
            curEnd = last[s[i]];
        } else {
            curEnd = Math.max(curEnd, last[s[i]]);
        }
    }

    result.push(curEnd - curStart + 1);
    return result;
};

s = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s)); // [9,7,8]

s = "eccbbbbdec"
console.log(partitionLabels(s)); // [10]