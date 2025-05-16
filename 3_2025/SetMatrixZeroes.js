/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let mapWidth = {};
    let mapHeight = {};

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                mapWidth[i] = true;
                mapHeight[j] = true;
            }
        }
    }

    Object.keys(mapWidth).forEach((i) => {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0;
        }
    })

    Object.keys(mapHeight).forEach((j) => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }
    })

    return matrix;
};

matrix = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeroes(matrix)); // [[1,0,1],[0,0,0],[1,0,1]]
