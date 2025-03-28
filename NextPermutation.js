/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    // if last two elements are in ascending order, swap them, return immediately
    if (nums[nums.length - 1] > nums[nums.length - 2]) { 
        swap(nums, nums.length - 2, nums.length - 1);
        return;
    }

    // else check from the end of the array to find the first split index
    let splitIndex = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            splitIndex = i - 1;
            break;
        }
    }

    if (splitIndex === -1) {
        // array is in descending order -> reverse the array
        nums.reverse();
        return;
    }

    // else found the split index, find the smallest element greater than the element at split index
    for (let i = nums.length - 1; i > splitIndex; i--) {
        if (nums[i] > nums[splitIndex]) {
            swap(nums, i, splitIndex);
            break;
        }
    }

    bubbleSort(nums, splitIndex + 1, nums.length - 1);
};

let swap = function(nums, i, j) {
    // using destructuring assignment
    [nums[i], nums[j]] = [nums[j], nums[i]];
};

function bubbleSort(arr, a, b) {
    for (let i = a; i < b; i++) {
        for (let j = a; j < b - (i - a); j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap without new array
                swap(arr, j, j + 1);
            }
        }
    }
}

let input = [1,1,5];
nextPermutation(input); // [1,3,2]
console.log(input);