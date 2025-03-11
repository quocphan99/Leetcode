/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    if (nums.length == 1) return 0;
    
    let index = 0;
    let counter = 1;
    
    while (index + nums[index] < nums.length - 1) {
        index = getMaxJump(nums, index);
        counter += 1;
    }
    
    return counter;
};

let getMaxJump = function (nums, fromIndex) {
    let max = 0;
    let maxIndex = fromIndex;
    let range = nums[fromIndex];

    for (let i = fromIndex + 1; i <= fromIndex + range && i < nums.length; i++) {

        let step = i + nums[i];
        if (step >= nums.length - 1) {
            return i;
        }

        if (step > max) {
            max = step;
            maxIndex = i;
        }
    }

    return maxIndex;
}

let nums = [2,3,0,1,4];
console.log(jump(nums));