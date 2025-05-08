/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    let map = new Map();
    let curIndex;
    for (let i = 0; i < nums.length; i++) {
        curIndex = nums[i];
        map.set(curIndex, 1);
    }

    let maxCounter = 0;
    let curCounter;
    let curNum;
    let keys = Array.from(map.keys());

    for (let i = 0; i < keys.length; i++) {
        curNum = keys[i];

        if (map.get(curNum - 1) == null) {
            curCounter = 1;
            while (map.get(curNum + 1) != null) {
                curCounter++;
                curNum++;
            }

            if (curCounter > maxCounter) {
                maxCounter = curCounter;
            }
        }
    }

    return maxCounter;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output: 4