/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    return recursion(s);
};

let recursion = function (s) {

    let result = "";
    let remain = s;
    while (remain.length > 0) {
        
        let splitResult = splitString(remain);

        result += splitResult[0];
        
        remain = splitResult[1];
        if (remain.length === 0) return result;

        // remain will have this format: number[char]
        let firstBracketIndex = remain.indexOf("[");
        if (firstBracketIndex === -1) {
            return result + remain;
        }

        let lastBracketIndex = getLastBracketIndex(remain, firstBracketIndex);
        let innerString = remain.slice(firstBracketIndex + 1, lastBracketIndex);

        let recursionResult = recursion(innerString);

        let number = remain.slice(0, firstBracketIndex);
        result += recursionResult.repeat(number);

        remain = remain.slice(lastBracketIndex + 1);
    }

    return result;
}

let splitString = function (s) {
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!isChar(char)) {
            index = i;
            break;
        }
    }
    return [s.slice(0, index), s.slice(index)];
}

let isChar = function (char) {
    return /^[a-z]$/.test(char);
}

let getLastBracketIndex = function (s, firstBracketIndex) {
    let index = -1;
    let counter = 1;

    for (let i = firstBracketIndex + 1; i < s.length; i++) {
        let char = s[i];
        if (char === "[") {
            counter++;
        } else if (char === "]") {
            counter--;
        }
        if (counter === 0) {
            index = i;
            break;
        }
    }

    return index;
}


let s = "2[abc]3[cd]ef"
console.log(decodeString(s)); // Output: "abcabccdcdcdef"

// let s = "3[a]2[bc]";
// console.log(decodeString(s)); // Output: "aaabcbc"