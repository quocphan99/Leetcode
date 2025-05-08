/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i - 1] === sorted[i]) continue;

        let j = i + 1;
        let k = sorted.length - 1;

        while (j < k) {

            let sum = sorted[i] + sorted[j] + sorted[k];
        
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                result.push([sorted[i], sorted[j], sorted[k]]);
                j++;
                k--;
                while (j < k && sorted[j] === sorted[j - 1]) j++;
                while (j < k && sorted[k] === sorted[k + 1]) k--;
            }
        }
    }

    return result;
};

// let nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums)); // Output: [[-1,-1,2],[-1,0,1]]

// sorted [ -10, -5, -5, -4, -4, -3, -2, -2,  0,  0,  1,  2,  2,  2, 2,  5,  5]
let nums = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];
console.log(threeSum(nums)); // Output: [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]