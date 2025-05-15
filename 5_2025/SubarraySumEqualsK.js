/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let counter = 0;

    let prefixSum = {};
    prefixSum[0] = 1;
    let curSum = 0;

    for (let num in nums) {
        curSum += nums[num];

        if (prefixSum[curSum - k] !== undefined) {
            counter += prefixSum[curSum - k];
        }

        prefixSum[curSum] = (prefixSum[curSum] || 0) + 1;
    }

    return counter;
};

nums = [1, 1, 1];
console.log(subarraySum(nums, 2)); // 2
nums = [1, 2, 3];
console.log(subarraySum(nums, 3)); // 2
nums = [1,2,1,2,1];
console.log(subarraySum(nums, 3)); // 4
nums = [-1,-1,1]
console.log(subarraySum(nums, 0)); // 1
nums = [1,-1,0];
console.log(subarraySum(nums, 0)); // 3