/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    recursion([], nums, result);
    return result;
};

let recursion = function(nums, remains, result) {

    if (remains.length === 1){
        result.push(nums.concat(remains));
        return;
    }

    for (let i = 0; i < remains.length; i++) {
        let newNums = nums.concat(remains[i]);
        let newRemains = [...remains];
        swap(newRemains, i, remains.length - 1);
        newRemains.pop();

        recursion(newNums, newRemains, result);
    }
}

let swap = function(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

nums = [1,2,3];
console.log(permute(nums)); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]