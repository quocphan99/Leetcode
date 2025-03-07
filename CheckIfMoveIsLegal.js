/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    
    // check 8 direction    
    let length = board.length;

    let horizontal = board[rMove];
    let vertical = board.map(arr => arr[cMove]);

    // Diagonal up and down
    let diagonal = board.map((arr, index) => {
            let curIndex = index + cMove - rMove;
            if (curIndex < 0 || curIndex >= length) return null;

            return arr[curIndex];
        }
    );

    let inverseDiagonal = board.map((arr, index) => {
            let curIndex = cMove + rMove - index;
            if (curIndex < 0 || curIndex >= length) return null;

            return arr[curIndex];
        }
    )

    return checkLine(horizontal, color, cMove) || checkLine(vertical, color, rMove)
    || checkLine(diagonal, color, rMove) || checkLine(inverseDiagonal, color, rMove);
}

let checkLine = function(arr, color, position){

    console.log("Start: ");
    console.log("Arr: " + arr);
    console.log("Position: " + position);
    console.log("--------------------------");

    let counter = 0;
    for (let i = position - 1; i >= 0 ; i--) {
        let curColor = arr[i];
        
        if (curColor == null) continue;
        if (curColor == ".") break;
        if (curColor == color) {
            if (counter > 0) return true;
            break;
        };

        if (curColor != color) {
            counter++;
        }
    }

    counter = 0;
    for (let i = position + 1; i < arr.length; i++) {
        let curColor = arr[i];

        if (curColor == null) continue;
        if (curColor == ".") break;
        if (curColor == color) {
            if (counter > 0) return true;
            return false;
        };

        if (curColor != color) {
            counter++;
        }
    }

    return false;
}

// let board = [[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]];
// let rMove = 4;
// let cMove = 3;
// let color = "B";


// let board = [[".",".",".",".",".",".",".","."],[".","B",".",".","W",".",".","."],[".",".","W",".",".",".",".","."],[".",".",".","W","B",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".","B","W",".","."],[".",".",".",".",".",".","W","."],[".",".",".",".",".",".",".","B"]];
// let rMove = 4;
// let cMove = 4;
// let color = "W";

// let board = [[".",".","W",".","B","W","W","B"],["B","W",".","W",".","W","B","B"],[".","W","B","W","W",".","W","W"],["W","W",".","W",".",".","B","B"],["B","W","B","B","W","W","B","."],["W",".","W",".",".","B","W","W"],["B",".","B","B",".",".","B","B"],[".","W",".","W",".","W",".","W"]];
// let rMove = 5;
// let cMove = 4;
// let color = "W";

// let board = [["B","B",".",".","B","W","W","."],[".","W","W",".","B","W","B","B"],[".","W","B","B","W",".","W","."],["B",".",".","B","W","W","W","."],["W","W","W","B","W",".","B","W"],[".",".",".","W",".","W",".","B"],["B","B","W","B","B","W","W","B"],["W",".","W","W",".","B",".","W"]];
// let rMove = 6;
// let cMove = 3;
// let color = "W";

// let board = [["B","B",".",".","B","W","W","."],[".","W","W",".","B","W","B","B"],[".","W","B","B","W",".","W","."],["B",".",".","B","W","W","W","."],["W","W","W","B","W",".","B","W"],[".",".",".","W",".","W",".","B"],["B","B","W","B","B","W","W","B"],["W",".","W","W",".","B",".","W"]];
// let rMove = 2;
// let cMove = 5;
// let color = "W";

// let board = [["B","W",".",".",".","W",".","B"],["W","B","B","W","B","W","W","B"],[".","B","W",".","W",".",".","W"],[".","W","B",".","W",".",".","."],["W",".",".",".","B","W","W","."],[".","B","B",".","W","W",".","W"],[".",".",".","W","B","B","W","W"],["B","B","B",".",".","W","B","."]];
// let rMove = 0;
// let cMove = 4;
// let color = "W";

let board = [["B","B","B",".","W","W","B","W"],["B","B",".","B",".","B","B","B"],[".","W",".",".","B",".","B","W"],["B","W",".","W","B",".","B","."],["B","W","W","B","W",".","B","B"],[".",".","W",".",".","W",".","."],["W",".","W","B",".","W","W","B"],["B","B","W","W","B","W",".","."]];
let rMove = 5;
let cMove = 6;
let color = "B";

console.log("Result: " + checkMove(board, rMove, cMove, color));