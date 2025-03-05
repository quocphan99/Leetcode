/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let delta = 0;
    let curNum = nums[0];
    let tmp;
    let counter = 1;

    for (let i = 1; i < nums.length; i++) {

        tmp = nums[i];
        nums[i - delta] = tmp;

        if (curNum == tmp) {
            counter++;
        } else {
            curNum = tmp;
            counter = 1;
        }

        if (counter > 2) {
            delta++;
        }
    }

    return nums.length - delta;
};

let input = [0,0,1,1,1,1,2,3,3];
let result = removeDuplicates(input);
console.log(result);
console.log(input);