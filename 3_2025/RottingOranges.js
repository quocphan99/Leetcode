/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let rottenAmount = 0;
    let freshAmount = 0;

    let checkArr = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) freshAmount++;
            if (grid[i][j] === 2) {
                checkArr.push([i, j]);
                rottenAmount++;
            }
        }
    }

    let rottenTime = 0;

    if (freshAmount === 0) return 0;
    if (rottenAmount === 0) return -1;

    while(checkArr.length > 0) {
        if (freshAmount === 0) return rottenTime;

        let newCheckArr = [];
        for (let i = 0; i < checkArr.length; i++) {
            let [x, y] = checkArr[i];

            if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
                newCheckArr.push([x - 1, y]);
                freshAmount--;
            }
            if (x + 1 < grid.length && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
                newCheckArr.push([x + 1, y]);
                freshAmount--;
            }
            if (y - 1 >= 0 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
                newCheckArr.push([x, y - 1]);
                freshAmount--;
            }
            if (y + 1 < grid[0].length && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
                newCheckArr.push([x, y + 1]);
                freshAmount--;
            }
        }
        checkArr = newCheckArr;
        rottenTime++;
    }

    if (freshAmount > 0) return -1;
};

let grid = [[0,2]]
console.log(orangesRotting(grid)); // 4