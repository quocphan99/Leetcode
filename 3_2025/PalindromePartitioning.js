/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

    let matrix = Array.from({ length: s.length }, () => Array(s.length).fill(false));
    let strMatrix = Array.from({ length: s.length }, () => Array(s.length).fill(''));

    let isReverse = (s1, s2) => {
        if (s1.length !== s2.length) return false;

        for (let i = 0; i < s1.length; i++){
            if (s1[i] !== s2[s2.length - 1 - i]) return false;
        }
        return true;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0) {
                matrix[i][j] = true;
                strMatrix[i][j] = s[j];
                continue;
            } 

            let partLength = Math.floor((i + 1)/ 2);
            let str0 = s.slice(j, j + partLength);
            let str1 = s.slice(j + i - partLength + 1, j + i + 1);

            matrix[i][j] = isReverse(str0, str1);
            if (matrix[i][j]) {
                strMatrix[i][j] = s.slice(j, j + i + 1);
            }
        }
    }

    let recursive = (column, curPartition) => {
        if (column >= matrix.length) {
            result.push(curPartition);
            return;
        }

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][column]) {
                recursive(column + i + 1, [...curPartition, strMatrix[i][column]]);
            }
        }
    }

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0]) {
            recursive(1 + i, [strMatrix[i][0]]);
        }
    }

    return result;
};

let isPalindrome = (s, start, end) => {
    if (end > s.length - 1) return false;

    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

s = "abbab"
console.log(partition(s));
// s = 'a';
// console.log(partition(s));