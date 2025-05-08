/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {


    if (digits.length == 0) return [];

    let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    return recursive(digits, map);
};


let recursive = function (digits, map) {


    if (digits.length == 1) {
        return map[digits[0]].split("");
    }

    let remainResult = recursive(digits.slice(1, digits.length), map);

    let curString = map[digits[0]];
    let result = [];
    for (let i = 0; i < curString.length; i++) {
        for (let j = 0; j < remainResult.length; j++) {
            result.push(curString[i] + remainResult[j]);
        }
    }

    return result;
}

let digits = "234";
console.log(letterCombinations(digits));
