/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let counter = 0;
    let amount = matrix.length * matrix[0].length;
    let result = [];
    let row = 0, col = 0;
    let spacing = 0;
    let direction = 0; // 0: right, 1: down, 2: left, 3: up

    while(counter < amount){
        result.push(matrix[row][col]);
        
        if (direction === 0) {
            col++;
            if (col >= matrix[0].length - spacing) {
                direction = 1;
                col--;
                row++;
            }
        } else if (direction === 1) {
            row++;
            if (row >= matrix.length - spacing) {
                direction = 2;
                row--;
                col--;
            }
        } else if (direction === 2) {
            col--;
            if (col < spacing) {
                direction = 3;
                col++;
                row--;
                spacing++;
            }
        } else if (direction === 3) {
            row--;
            if (row < spacing) {
                direction = 0;
                row++;
                col++;
            }
        }
        counter++;
    }

    return result;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix)); // Output: [1,2,3,6,9,8,7,4,5]