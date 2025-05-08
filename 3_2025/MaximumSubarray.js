/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = dp[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
        max = Math.max(max, dp[i]);
    }

    return max;
};


let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums)); // Output: 6