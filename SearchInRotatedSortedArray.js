/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    if (nums.length < 10) {
        // normal search

        for (let i = 0; i < nums.length; i++) {
            if (target == nums[i]) return i;
        }

        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    let middle;
    
    if (nums[right] > nums[left]) return binarySearch(nums, target);

    // search rotated index
    while (right - left > 1){

        middle = Math.floor((left + right) / 2);

        if (nums[middle] > nums[left]){
            left = middle;
        } else {
            right = middle;
        }
    }

    // console.log("Left: " + left);
    // console.log("Right: " + right);
    // console.log("Nums: " + nums);
    
    let rotatedIndex;
    if (nums[left] > nums[0]){
        if (nums[right] > nums[0]){
            rotatedIndex = right;
        } else {
            rotatedIndex = left;
        }
    } else {
        rotatedIndex = left;
    }

    if (target == nums[rotatedIndex]) return rotatedIndex;

    let sortedArr = nums.slice(rotatedIndex + 1, nums.length).concat(nums.slice(0, rotatedIndex + 1));

    let index = binarySearch(sortedArr, target);

    if (index == -1) return -1;

    let rightPartAmount = nums.length - (rotatedIndex + 1);

    if (index >= rightPartAmount){
        return index - rightPartAmount;
    } else {
        return nums.length - rightPartAmount + index;
    }

};

var binarySearch = function (nums, target) {

    // console.log(nums);

    let left = 0
    let right = nums.length - 1;
    let middle;

    if (nums[left] == target) return left;
    if (nums[right] == target) return right;

    while (right - left > 1) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] == target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle;
        } else {
            left = middle;
        }
    }

    return -1;
}

let nums = [68,69,70,71,72,74,75,77,82,84,90,91,92,93,94,102,104,105,106,107,109,110,111,112,113,114,121,122,123,124,125,127,129,131,132,137,139,142,143,149,151,154,162,166,167,170,172,176,177,179,184,185,187,188,189,193,195,198,202,204,205,206,208,210,211,212,215,221,222,227,230,231,232,235,236,238,239,240,246,247,249,250,253,255,256,261,263,266,267,270,271,273,274,275,276,277,278,280,281,282,285,286,287,289,295,297,299,0,4,7,10,12,15,18,19,24,27,29,30,32,34,35,36,37,41,42,43,44,45,48,52,53,55,65,67]
let target = 166;

console.log(search(nums, target));