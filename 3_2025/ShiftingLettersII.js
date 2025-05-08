/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {

    let shiftArr = Array(s.length + 1).fill(0);

    // update array to prepare prefix sum
    for (let i = 0; i < shifts.length; i++) {
        let shift = shifts[i];
        let start = shift[0];
        let end = shift[1];
        let direction = shift[2] == 0 ? -1 : 1;

        shiftArr[start] += direction;
        shiftArr[end + 1] += -direction;
    }

    // calculate prefix sum
    let shiftValues = [shiftArr[0]];
    for (let i = 1; i < shiftArr.length; i++) {
        shiftValues[i] = shiftArr[i] + shiftValues[i - 1];
    }

    let result = "";
    for (let i = 0; i < shiftValues.length - 1; i++) {
        let shift = shiftValues[i];
        let number = (((letterToNumber(s[i]) + shift) % 26) + 26) % 26;

        result += numberToLetter(number);
    }

    return result;
};

let numberToLetter = function (num) {
    return String.fromCharCode(97 + num % 26); // 96 is the char code just before 'a'
}

let letterToNumber = function (letter) {
    let code = letter.toLowerCase().charCodeAt(0);

    return code - 97; // 'a' = 0, 'b' = 1, ..., 'z' = 25
}

let s = "abc";
let number = [[0, 1, 0], [1, 2, 1], [0, 2, 1]];

console.log("ShiftingLetter: " + shiftingLetters(s, number));