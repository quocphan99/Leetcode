/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let checkedGrid = grid.map(row => row.map(y => 0));
    let counter = 0;

    for (let x = 0; x < grid.length; x++) {

        let row = grid[x];
        for (let y = 0; y < row.length; y++) {
            if (grid[x][y] == 0) continue;
            if (checkedGrid[x][y] == 1) continue;

            recursiveCheck(grid, checkedGrid, x, y);

            counter += 1;
        }

    }

    return counter;
};


let recursiveCheck = function (grid, checkedGrid, x, y) {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return;
    if (checkedGrid[x][y] == 1) return;
    if (grid[x][y] == 0) return;

    checkedGrid[x][y] = 1;

    recursiveCheck(grid, checkedGrid, x + 1, y);
    recursiveCheck(grid, checkedGrid, x - 1, y);
    recursiveCheck(grid, checkedGrid, x, y + 1);
    recursiveCheck(grid, checkedGrid, x, y - 1);
}

let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid));