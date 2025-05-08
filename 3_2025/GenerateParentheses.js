/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return recursiveGenerate(n, n, n);
};

let recursiveGenerate = function(n, leftRemain, rightRemain){
    if (leftRemain === 0 && rightRemain === 0) return [""];

    if (leftRemain === rightRemain) {
        return recursiveGenerate(n, leftRemain - 1, rightRemain).map((val) => "(" + val);
    }

    if (leftRemain === 0) {
        return recursiveGenerate(n, leftRemain, rightRemain - 1).map((val) => ")" + val);
    } else {
        let result0 = recursiveGenerate(n, leftRemain - 1, rightRemain).map((val) => "(" + val);
        let result1 = recursiveGenerate(n, leftRemain, rightRemain - 1).map((val) => ")" + val);
        return result0.concat(result1);
    }
}

let n = 4;
let result = generateParenthesis(n);
console.log(result);