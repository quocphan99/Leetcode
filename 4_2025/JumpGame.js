/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length == 1) return true;

    let curMaxLength = 0;
    let selectedIndex = 0;
    let newMaxLength = getMaxJump(nums, selectedIndex);

    if (newMaxLength >= nums.length - 1) return true; 


    while (curMaxLength < newMaxLength){
        curMaxLength = newMaxLength;
        selectedIndex = getNextJump(nums, selectedIndex);
        newMaxLength = getMaxJump(nums, selectedIndex);

        if (newMaxLength >= nums.length - 1){
            return true;
        }
    }

    return false;
};

let getNextJump = function(nums, index){
    let maxJump = getMaxJump(nums, index);
    let maxIndex = index;

    for (let i = index + 1; i <= maxJump; i++) {
        let curMaxJump = getMaxJump(nums, i);

        if (curMaxJump > maxJump) {
            maxJump = curMaxJump;
            maxIndex = i;
        }
    }
    return maxIndex;
}

let getMaxJump = function(nums, index){
    return index + nums[index];
}

let nums = [1,1,1,0];
console.log(canJump(nums));