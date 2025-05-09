/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let top = 0;
    let bot = matrix.length - 1;

    while (top <= bot) {

        let mid = Math.floor((top + bot) / 2);
        let row = matrix[mid];
        let first = row[0];
        let last = row[row.length - 1];

        if (first > target && last > target) {
            bot = mid - 1;
        } else if (first < target && last < target) {
            top = mid + 1;
        } else {
            return binarySearch(row, target);
        }
    }

    return false;
};

let binarySearch = function(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return true;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 13;
console.log(searchMatrix(matrix, target)); // true