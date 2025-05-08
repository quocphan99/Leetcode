/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];
    return searchIndex(nums, target, 0, nums.length - 1);
};

let searchIndex = function(nums, target, left, right){
    if (left > right) return [-1, -1];

    if (target < nums[left] || target > nums[right]) return [-1, -1];

    let mid = Math.floor((left + right) / 2);
    let isFounded = false;

    while(left <= right){
        if (nums[mid] === target) {
            isFounded = true;
            break;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    if (!isFounded) return [-1, -1];
    if (left === right) return [mid, mid];

    let leftSearch = searchIndex(nums, target, left, mid - 1);
    let rightSearch = searchIndex(nums, target, mid + 1, right);

    if (leftSearch[0] === -1 && rightSearch[1] === -1) return [mid, mid];
    if (leftSearch[0] === -1) return [mid, rightSearch[1]];
    if (rightSearch[1] === -1) return [leftSearch[0], mid];
    return [leftSearch[0], rightSearch[1]];
}

let nums = [3,3,3];
let target = 3;
console.log(searchRange(nums, target)); // [3, 4]