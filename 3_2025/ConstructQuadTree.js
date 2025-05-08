
// Definition for a QuadTree node.
function _Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};


/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
    return createQuadNode(grid, 0, grid.length - 1, 0, grid.length - 1);
};

let createQuadNode = function (grid, fromX, toX, fromY, toY) {

    console.log("FromX: " + fromX);
    console.log("ToX: " + toX);
    console.log("FromY: " + fromY);
    console.log("ToY: " + toY);
    console.log("--------------------");

    let firstValue = grid[fromY][fromX];
    for (let i = fromY; i <= toY; i++) {
        let array = grid[i];

        for (let j = fromX; j <= toX; j++) {
            let val = array[j];

            if (val != firstValue) {

                let topLeft = createQuadNode(grid, fromX, fromX + (toX - fromX - 1) / 2, fromY, fromY + (toY - fromY - 1) / 2);
                let topRight = createQuadNode(grid, fromX + (toX - fromX + 1) / 2, toX, fromY, fromY + (toY - fromY - 1) / 2);

                let botLeft = createQuadNode(grid, fromX, fromX + (toX - fromX - 1) / 2, fromY + (toY - fromY + 1) / 2, toY);
                let botRight = createQuadNode(grid, fromX + (toX - fromX + 1) / 2, toX, fromY + (toY - fromY + 1) / 2, toY);

                return new _Node(1, false, topLeft, topRight, botLeft, botRight);
            }
        }
    }
    
    return new _Node(firstValue, true, null, null, null, null);
}

let input = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
let result = construct(input);
console.log(result);
