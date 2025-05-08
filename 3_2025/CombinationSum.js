/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];
    recursion(result, candidates, target, [], 0);

    return result;
};

let recursion = function(result, candidates, target, accumulator, startIndex) {

    for(let i = startIndex; i < candidates.length; i++) {
        let candidate = candidates[i];

        if (candidate < target){
            recursion(result, candidates, target - candidate, accumulator.concat(candidate), i);
        } else if (candidate === target) {
            result.push(accumulator.concat(candidate));
            break;
        } else {
            break;
        }
    }
}

// let candidates = [2,3,6,7];
// let target = 7;
// console.log(combinationSum(candidates, target)); // [[2,2,3],[7]]

let candidates = [8, 7, 4, 3];
let target = 11;
console.log(combinationSum(candidates, target)); // [[8,3],[7,4],[4,4,3]]