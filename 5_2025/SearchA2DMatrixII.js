/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let currentRow = 0;
    let currentCol = matrix[0].length - 1;

    while (currentRow < matrix.length && currentCol >= 0) {
        if (matrix[currentRow][currentCol] === target) {
            return true;
        } else if (matrix[currentRow][currentCol] > target) {
            currentCol--;
        } else {
            currentRow++;
        }
    }

    return false;
};

matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

console.log(searchMatrix(matrix, 5)); // Output: true
console.log(searchMatrix(matrix, 20)); // Output: false

matrix = [[1,1]];
console.log(searchMatrix(matrix, 0)); // Output: false

matrix = [[5,6,10],[6,10,13],[10,13,18],[14,18,19]];
console.log(searchMatrix(matrix, 14)); // Output: true