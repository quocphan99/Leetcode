/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let result = [[]];

    let recursion = function(curSet, curIndex){
        if (curIndex >= nums.length) {
            return;
        }

        for (let i = curIndex; i < nums.length; i++) {
            curSet.push(nums[i]);
            result.push([...curSet]);
            curIndex++;
            recursion(curSet, curIndex);
            curSet.pop();
        }
    }

    recursion([], 0);
    return result;
};

nums = [1,2,3];
console.log(subsets(nums)); // Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]