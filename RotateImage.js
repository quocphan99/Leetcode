/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let layerAmount = Math.floor(matrix.length / 2);

    for (let i = 0; i <= layerAmount ; i++) {

        let start = i;
        let end = matrix.length - i - 1;
        for (let j = i; j < matrix.length - i; j++) {
            if (j == matrix.length - i - 1) break;

            let first = matrix[start][j];
            let second = matrix[j][end];
            let third = matrix[end][matrix.length - 1 - j];
            let fourth = matrix[matrix.length - 1 - j][start];

            // console.log(first, second, third, fourth);

            let tmp = first;
            matrix[start][j] = fourth;
            matrix[matrix.length - 1 - j][start] = third;
            matrix[end][matrix.length - 1 - j] = second;
            matrix[j][end] = tmp;

            // console.log(matrix);
            // console.log("------");

            if (matrix.length - i - i == 2) break;  // run only one when matrix is 2x2

        }
    }
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix);
console.log(matrix);