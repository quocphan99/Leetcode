/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let total = 1;
    let counter = 0;

    while (n > 1) {
        total += counter * 4 + 4;
        counter++;
        n--;
    }

    return total;
};


let input = 3;
let result = coloredCells(input);
console.log(result);