/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let arr = {};

    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] = (arr[nums[i]] || 0) + 1;
    }

    // console.log(arr);

    let curIndex = 0;
    let curCounter = arr[0] || 0;
    for (let i = 0; i < nums.length; i++) {
        while (curCounter <= 0) {
            curIndex++;
            curCounter = arr[curIndex] || 0;
        }
        nums[i] = curIndex;
        curCounter--;
    }
};

nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums); // Output: [0,0,1,1,2,2]