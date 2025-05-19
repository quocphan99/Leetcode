/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    if (nums[left] < nums[right]) return nums[0];
    let middle;

    while (left < right) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return nums[left];
};

nums = [3,4,5,1,2];
console.log(findMin(nums)); // 1
nums = [4,5,6,7,0,1,2];
console.log(findMin(nums)); // 0
nums = [1,2,3,4,5];
console.log(findMin(nums)); // 1