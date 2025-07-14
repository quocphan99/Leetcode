/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let curFromMinArray = [nums[0]];

    for (let i = 1; i < nums.length; i++) {

        let curNum = nums[i];
        if (curNum > curFromMinArray[curFromMinArray.length - 1]) {
            curFromMinArray.push(curNum);
        } else {
            let left = 0;
            let right = curFromMinArray.length - 1;

            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (curFromMinArray[mid] < curNum) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            curFromMinArray[left] = curNum;
        }
    }

    return curFromMinArray.length;
};

nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
nums = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(nums)); // Output: 4
nums = [7, 7, 7, 7, 7, 7, 7];
console.log(lengthOfLIS(nums)); // Output: 1